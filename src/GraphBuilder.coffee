
utils = require './utils'
GraphDrawer = require './GraphDrawer'
Graph = require './Graph'

module.exports = 
class GraphBuilder

    constructor: (@container, @graph = new Graph) ->
        @can = $("<canvas>").get 0
        @ctx = @can.getContext '2d'
        @can.width = @can.height = 400
        @graph_drawer = new GraphDrawer @graph, @ctx
        @mouse = { x: 0, y: 0 }
        @focus = false
        @handle_events()
        @container.appendChild @can

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

        $(@can).mouseup (e) =>
            if @mouse.target? and @mouse.dragtype == "link"
                v = @graph_image.get_vertex_byxy @mouse.linkend
                @graph_image.add_link @mouse.target.name, v.name
            # clean drag info
            @mouse.target = null
            @mouse.dragtype = "none"
            @mouse.linkend = null

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
            console.log vname

        # Print other info
        Mousetrap.bind "1", (e) =>
            return unless @focus
            console.log @mouse

    update: (dt) ->

    draw_draglink: ->
        if @mouse.target? and @mouse.dragtype == "link" and @mouse.linkend?
            @ctx.beginPath()
            a = @mouse.target
            b = @mouse.linkend
            @ctx.moveTo a.x, a.y
            @ctx.lineTo b.x, b.y
            @ctx.stroke()

    render: ->
        @ctx.clearRect 0, 0, @can.width, @can.height
        @draw_draglink()
        @graph_drawer.render()

