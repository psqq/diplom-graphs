
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
            utils.draw_line @ctx, a, b

    draw_vertices: () ->
        for name, info of @graph.vinfo
            textColor = if @graph.is_root name then 'red' else 'white'
            utils.draw_circle_with_text(
                @ctx, info.x, info.y, RADIIUS, name, {
                    fontsz: FONTSZ, fontFamily: 'Monospace',
                    circleColor: 'black', textColor: textColor
                }
            )

    render: () ->
        @ctx.save()
        @draw_links()
        @draw_vertices()
        @ctx.restore()

