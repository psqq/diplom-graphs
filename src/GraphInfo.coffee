

counter = 0


module.exports =
class GraphInfo
    constructor: (@container, @graph = new Graph) ->
        @container = $(@container).get 0 if _.isString @container
        @id = "graphinfo" + counter++
        @el = $("<div>").get 0
        $(@container).append @el
        @info =
            "leaves":
                title: "Листья:"
                func: =>
                    @graph.leaves().join ', '
            "count_vertices":
                title: "Количество вершин:",
                func: => @graph.count_vertices()
            "count_links":
                title: "Количество ребер:",
                func: => @graph.count_links()
            "invariant3":
                title: "Инвариант 3:"
                func: => @invariant3()
            
        for id,o of @info
            $(@el).append($("<div><u>#{o.title}</u> <span id=#{@id+id}></span></div>"))
        @graph.on_change => @update_info()
        @update_info()

        @change_listeners = []
        @res = ""

    # ===== CHANGES =====
    # set_res: (new_res) ->
    #     return if @res == new_res
    #     @res = new_res
    #     @changed()

    # on_change: (callback) -> 
    #     @change_listeners.push callback

    # changed: -> 
    #     for callback in @change_listeners
    #         callback(this)

    # ===== INFO =====
    invariant3: ->
        res = {}
        # for v in @graph.vertices
        #     res[v] = @graph.vinfo[v].disttoroot
        # convert res to string
        res.dists_to_leaves = @graph.dists_to_leaves()
        res = JSON.stringify res, null, 2
        return $("<pre>#{res}</pre>")

    update_info: ->
        @graph.update()
        for id, o of @info
            id = @id + id
            res = o.func()
            $('#'+id).html ""
            $('#'+id).append res
