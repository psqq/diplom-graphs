
utils = require './utils'


FONTSZ = 20
RADIIUS = FONTSZ


module.exports = 
class GraphDrawer
    
    constructor: (@graph, @ctx) ->
        @graph.on_change => @render()

    # === VERTICES === 
    get_vertex_byxy: (pos) ->
        for name, info of @graph.vinfo
            return name if utils.dist(pos, info) < RADIIUS

    move_vertex: (vertex_name, new_pos) ->
        @graph.set_vinfo vertex_name, new_pos

    # === RENDER ===
    draw_links: () ->
        for l in @links
            a = @vertices[l.a]
            b = @vertices[l.b]
            @ctx.beginPath()
            @ctx.moveTo a.x, a.y
            @ctx.lineTo b.x, b.y
            @ctx.stroke()

    draw_vertices: () ->
        @ctx.font = "#{FONTSZ}px Monospace"
        for name, v of @vertices
            @ctx.beginPath()
            @ctx.arc v.x, v.y, RADIIUS, 0, 2 * Math.PI
            @ctx.fillStyle = 'black'
            @ctx.fill()
            @ctx.fillStyle = 'white'
            @ctx.textAlign = 'center'
            @ctx.textBaseLine = 'middle'
            @ctx.fillText v.name, v.x, v.y + FONTSZ/4

    render: () ->
        @ctx.save()
        @draw_links @ctx
        @draw_vertices @ctx
        @ctx.restore()


module.exports = GraphImage

