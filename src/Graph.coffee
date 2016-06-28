
# TODO: блокировка и разблокировка call_changed

module.exports = 
class Graph
    constructor: ->
        @vertices = []
        @links = []
        @map = {}
        @vinfo = {} # additional information for vertex
        @change_listeners = []
        @freenames = []
        @root = null
        @is_changes_lock = false

    # === OTHER ====
    # update all info into this graph
    update: ->
        @dfs()

    is_root: (v) -> v == @root
    set_root: (r) -> 
        return if r == @root
        @root = r
        @changed()

    dfs: ->
        return if not @root?
        q = [@root]
        @vinfo[@root].disttoroot = 0
        @vinfo[@root].subvertices = []
        used = {}
        used[@root] = true
        while q.length > 0
            v = q.shift()
            for u in @vertices
                if @is_link(v, u) and not used[u]
                    @vinfo[v].subvertices = [] if not @vinfo[v].subvertices?
                    @vinfo[v].subvertices.push u
                    @vinfo[u].disttoroot = @vinfo[v].disttoroot + 1
                    q.push u
                    used[u] = true

    # === CHANGES ===
    on_change: (callback) -> 
        @change_listeners.push callback

    changed: -> 
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

