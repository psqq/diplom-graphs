
utils = require './utils'


FONTSZ = 20
RADIIUS = FONTSZ


module.exports = 
class GraphDrawer
    
    constructor: (@graph, @ctx) ->

    # === VERTICES === 
    get_vertex_byxy: (pos) ->
        for name, info of @graph.vinfo
            return name if utils.dist(pos, info) < RADIIUS

    move_vertex: (vertex_name, new_pos) ->
        @graph.set_vinfo vertex_name, new_pos

    # === RENDER ===
    draw_links: () ->
        for l in @graph.links
            a = @graph.get_vinfo l.from
            b = @graph.get_vinfo l.to
            @ctx.beginPath()
            @ctx.moveTo a.x, a.y
            @ctx.lineTo b.x, b.y
            @ctx.stroke()

    draw_vertices: () ->
        @ctx.font = "#{FONTSZ}px Monospace"
        for name, info of @graph.vinfo
            @ctx.beginPath()
            @ctx.arc info.x, info.y, RADIIUS, 0, 2 * Math.PI
            @ctx.fillStyle = 'black'
            @ctx.fill()
            @ctx.fillStyle = 'white'
            @ctx.textAlign = 'center'
            @ctx.textBaseLine = 'middle'
            @ctx.fillText name, info.x, info.y + FONTSZ/4

    render: () ->
        @ctx.save()
        @draw_links()
        @draw_vertices()
        @ctx.restore()

