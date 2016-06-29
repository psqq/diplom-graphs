
# TODO: блокировка и разблокировка call_changed

module.exports = 
class Graph
    constructor: ->
        @vertices = []
        @links = []
        @map = {}
        @vinfo = {} # additional information for vertex
        @freenames = []
        @root = null
        @is_changes_lock = false
        @is_updated = false
        @change_listeners = []

    # === OTHER ====
    # update all info into this graph
    update: ->
        return if @is_updated
        for v in @vertices
            @vinfo[v].bfs = @make_bfs_info v
        @is_updated = false

    is_root: (v) -> v == @root
    set_root: (r) -> 
        return if r == @root
        @root = r
        @changed()

    leaves: (root = @root) ->
        return [] if not @is_vertex root
        @update()
        res = []
        rootbfs = @vinfo[root].bfs
        for u in @vertices
            if rootbfs[u].subvertices.length == 0
                res.push u
        return res

    make_bfs_info: (s) ->
        return [] if not @is_vertex s
        q = [s]
        used = {}
        used[s] = true
        res = {}
        res[u] = {} for u in @vertices
        res[s].dist = 0
        res[s].subvertices = []
        while q.length > 0
            v = q.shift()
            res[v].subvertices = [] if not res[v].subvertices?
            for u in @vertices
                if @is_link(v, u) and not used[u]
                    res[v].subvertices.push u
                    res[u].dist = res[v].dist + 1
                    used[u] = true
                    q.push u
        return res

    dist: (u, v = @root) ->
        return if not @is_vertex(u) or not @is_vertex(v)
        @update()
        res = @vinfo[u].bfs[v].dist
        return res

    dists_to_leaves: (v) ->
        res = []
        for l in @leaves()
            res.push @dist l, v
        return res

    next_vertices: (v) ->
        return @vinfo[@root].bfs[v].subvertices

    previous_vertices: (v) ->
        res = []
        rootbfs = @vinfo[@root].bfs
        for u in @vertices
            if v in rootbfs[u].subvertices
                res.push u
        return res

    invariant3: (sep = ', ') ->
        res = {}
        for v in @vertices
            t = []
            t[0] = @dist v
            t[1] = @previous_vertices(v).length
            t[2] = @next_vertices(v).length
            t[3] = '(' + @dists_to_leaves(v).sort().join(sep) + ')'
            res[v] = t.join sep
        return res

    invariant3_as_str: ->
        @update()
        return _.values(@invariant3(',')).sort().join ';'

    clear: ->
        @vertices = []
        @links = []
        @map = {}
        @vinfo = {} # additional information for vertex
        @freenames = []
        @root = null
        @is_changes_lock = false
        @is_updated = false
        @changed()

    # === CHANGES ===
    on_change: (callback) -> 
        @change_listeners.push callback

    changed: -> 
        @is_updated = false
        return if @is_changes_lock
        for callback in @change_listeners
            callback(this)

    lock_changes: ->
        @is_changes_lock = true

    unlock_changes: ->
        @is_changes_lock = false

    # === VERTICES === 
    generate_name: ->
        @freenames.sort (a, b) -> a - b
        res = ""
        while @freenames.length > 0
            v = "" + @freenames.shift()
            return v if not @is_vertex v
        return "" + @count_vertices()

    count_vertices: -> @vertices.length

    is_vertex: (name) ->
        return false if not name?
        return name in @vertices

    get_vinfo: (name) -> @vinfo[name]

    set_vinfo: (name, info) ->
        unless @vinfo[name]?
            @vinfo[name] = info
            return
        @vinfo[name][k] = v for k,v of info if info?

    add_vertex: (name, info) ->
        @set_vinfo name, info
        return if @is_vertex name
        @vertices.push name
        @map[name] = {}
        if not @root?
            @root = name
        @changed()

    del_vertex: (name) ->
        return if not @is_vertex(name)

        prev_lock_status = @is_changes_lock
        @lock_changes()

        _.pull @vertices, name
        delete @vinfo[name]
        @freenames.push parseInt(name)
        @del_links_with_vertex name
        if name == @root
            @root = if @vertices.length > 0 then @vertices[0] else null

        @is_changes_lock = prev_lock_status
        @changed()

    # === LINKS === 
    count_links: -> 
        return @links.length

    _make_link: (v1, v2) ->
        arr = [v1, v2].sort()
        return { from: arr[0], to: arr[1] }

    add_link: (v1, v2) ->
        return if @is_link(v1, v2)
        @links.push @_make_link(v1, v2)
        @map[v1][v2] = @map[v2][v1] = true
        @changed()

    del_link: (v1, v2) ->
        p = (l) -> (l.from == v1 and l.to == v2) or (l.from == v2 and l.to == v1)
        @del_linkp p

    del_links_with_vertex: (v) ->
        p = (l) -> v in _.values l
        @del_linkp p

    del_link_from_map: (v1, v2) ->
        @map[v1][v2] = @map[v2][v1] = false
        @changed()

    del_linkp: (predicate) ->
        res = []
        for l in @links
            if predicate l
                @del_link_from_map l.from, l.to, false
            else
                res.push l
        @links = res
        @changed()

    is_link: (v1, v2) ->
        return !!@map[v1][v2]

