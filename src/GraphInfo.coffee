

counter = 0


module.exports =
class GraphInfo
    constructor: (@container, @graph = new Graph) ->
        @container = $(@container).get 0 if _.isString @container
        @id = "graphinfo" + counter++
        @el = $("<div>").get 0
        $(@container).append @el
        @info =
            "#{@id}count_vertices":
                title: "Количество вершин:",
                func: => @graph.count_vertices()
            "#{@id}count_links":
                title: "Количество ребер:",
                func: => @graph.count_links()
        for id,o of @info
            $(@el).append($("<div><u>#{o.title}</u> <span id=#{id}></span></div>"))
        @graph.on_change => @update_info()
        @update_info()

    update_info: ->
        for id, o of @info
            console.log()
            $('#' + id).html "" + o.func()

