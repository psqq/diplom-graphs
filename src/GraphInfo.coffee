

counter = 0


module.exports =
class GraphInfo
    constructor: (@container, @graph = new Graph) ->
        @container = $(@container).get 0 if _.isString @container
        @id = "graphinfo" + counter++
        @el = $("<div>").get 0
        $(@container).append @el
        @info =
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

    invariant3: ->
        # convert res to string
        res = JSON.stringify res, null, 2
        return $("<pre>#{res}</pre>")

    update_info: ->
        for id, o of @info
            id = @id + id
            res = o.func()
            $('#'+id).html ""
            $('#'+id).append res
