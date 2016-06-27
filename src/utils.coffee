
# ===== maths utils =====
dist = (a, b) -> Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
vec2 = (x, y) -> {x, y}

# ===== utils for html elements ===== 
get_mousepos_in_element = (el, e) ->
    offset = $(el).offset()
    return { 
        x: e.pageX - offset.left, 
        y: e.pageY - offset.top 
    }

# create html table by js matrix
# o: { header: bool }
make_talbe = (arr, o = {}) ->
    tbl = document.createElement 'table'
    for line, i in arr
        tr = document.createElement 'tr'
        for val, j in line
            t = if o.header and i == 0 then 'th' else 'td'
            cell = document.createElement t
            val = arr[i][j]
            if _.isString val
                cell.innerHTML = val
            else
                cell.appendChild val
            tr.appendChild cell
        tbl.appendChild tr
    return tbl

# ===== Graphics =====
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
    get_mousepos_in_element, make_talbe
    # Graphics
    draw_line, draw_circle_with_text
}
