
utils = require './utils'
GraphDrawer = require './GraphDrawer'
Graph = require './Graph'

module.exports = 
class CanvasGraphConstructor

    constructor: (@container, @graph = new Graph) ->
        @can = $("<canvas>").get 0
        @ctx = @can.getContext '2d'
        @can.width = @can.height = 400
        @mouse = { 
            x: 0, y: 0 # текущие координаты мыши над @can
            target: null # имя вершины над которой производится некоторое действие
        }
        @focus = false
        @handle_events()
        @container.appendChild @can
        @graph_drawer = new GraphDrawer @graph, @ctx

    update_mouse: (e) ->
        pos = utils.get_mousepos_in_element @can, e
        @mouse.x = pos.x
        @mouse.y = pos.y

    handle_events: ->
        $(@can).mouseout => @focus = false
        $(@can).mouseover => @focus = true
        
        $(@can).mousemove (e) =>
            @update_mouse e
            if @mouse.target
                if @mouse.dragtype == "move"
                    vertex_name = @mouse.target.name
                    @graph_image.move_vertex vertex_name, @mouse
                if @mouse.dragtype == "link"
                    @mouse.linkend = _.clone utils.vec2 @mouse.x, @mouse.y

        $(@can).mousedown (e) =>
            vname = @graph_drawer.get_vertex_byxy @mouse
            if vname? and @mouse.target? and @mouse.dragtype == "link"
                @graph.add_link @mouse.target, vname

        $(@can).mouseup (e) =>
            @mouse.target = null
            @mouse.dragtype = null

        # Add vertex
        Mousetrap.bind "v", (e) =>
            return unless @focus
            name = "" + @graph.count_vertices()
            @graph.add_vertex name, {
                x: @mouse.x, y: @mouse.y, name
            }

        # Add link
        Mousetrap.bind "l", (e) =>
            return unless @focus
            vname = @graph_drawer.get_vertex_byxy @mouse
            @mouse.target = vname
            @mouse.dragtype = "link"

        # Print other info
        Mousetrap.bind "1", (e) =>
            return unless @focus
            console.log @mouse

    update: (dt) ->

    draw_draglink: ->
        if @mouse.target? and @mouse.dragtype == "link" and @mouse.linkend?
            v = @graph.get_vinfo @mouse.target
            utils.draw_line @ctx, v, @mouse

    render: ->
        @ctx.clearRect 0, 0, @can.width, @can.height
        @draw_draglink()
        @graph_drawer.render()

