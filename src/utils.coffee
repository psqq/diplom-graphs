
# maths utils
dist = (a, b) -> Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
vec2 = (x, y) -> {x, y}

# utils for html elements
get_mousepos_in_element = (el, e) ->
    offset = $(el).offset()
    return { 
        x: e.pageX - offset.left, 
        y: e.pageY - offset.top 
    }

# Graphics
draw_line = (ctx, a, b) ->
    ctx.beginPath()
    ctx.moveTo a.x, a.y
    ctx.lineTo b.x, b.y
    ctx.stroke()

draw_circle_with_text = (ctx, x, y, r, text, o) ->
    ctx.font = "#{o.fontsz}px #{o.fontFamily}"
    ctx.beginPath()
    ctx.arc x, y, r, 0, 2 * Math.PI
    ctx.fillStyle = o.circleColor
    ctx.fill()
    ctx.fillStyle = o.textColor
    ctx.textAlign = 'center'
    ctx.textBaseLine = 'middle'
    ctx.fillText text, x, y + o.fontsz/4


module.exports = {
    # math utils
    dist, vec2
    # html utils
    get_mousepos_in_element
    # Graphics
    draw_line, draw_circle_with_text
}
