
# TODO: блокировка и разблокировка call_changed

module.exports = 
class Graph
    constructor: ->
        @vertices = []
        @links = []
        @map = {}
        @vinfo = {} # additional information for vertex
        @change_listeners = []

    # === EVENTS ===
    on_change: (callback) -> 
        @change_listeners.push callback

    changed: -> 
        for callback in @change_listeners
            callback(this)

    # === VERTICES === 
    count_vertices: -> @vertices.length

    is_vertex: (name) ->
        return name in @vertices

    get_vinfo: (name) -> @vinfo[name]

    set_vinfo: (name, info) ->
        unless @vinfo[name]?
            @vinfo[name] = info
            return
        @vinfo[name][k] = v for k,v of info if info?

    add_vertex: (name, info, call_changed = true) ->
        @set_vinfo name, info
        return if @is_vertex name
        @vertices.push name
        @map[name] = {}
        @changed() if call_changed

    del_vertex: (name, call_changed = true) ->
        return if not is_vertex(name)
        _.pull @vertices, name
        @del_links_with_vertex name, false
        @changed() if call_changed

    # === LINKS === 
    count_links: -> 
        return @links.length

    _make_link: (v1, v2) ->
        arr = [v1, v2].sort()
        return { from: arr[0], to: arr[1] }

    add_link: (v1, v2, call_changed = true) ->
        return if @is_link(v1, v2)
        @links.push @_make_link(v1, v2)
        @map[v1][v2] = @map[v2][v1] = true
        @changed() if call_changed

    del_link: (v1, v2, call_changed = true) ->
        p = (l) -> (l.from == v1 and l.to == v2) or (l.from == v2 and l.to == v1)
        @del_linkp p, call_changed

    del_links_with_vertex: (v, call_changed = true) ->
        p = (l) -> v in _.values l
        @del_linkp p, call_changed

    del_link_from_map: (v1, v2, call_changed = true) ->
        @map[v1][v2] = @map[v2][v1] = false
        @changed() if call_changed

    del_linkp: (predicate, call_changed = true) ->
        res = []
        for l in @links
            if predicate l
                @del_link_from_map l.from, l.to, false
            else
                res.push l
        @links = res
        @changed() if call_changed

    is_link: (v1, v2) ->
        return !!@map[v1][v2]

