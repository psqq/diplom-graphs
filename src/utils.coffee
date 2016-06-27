
# maths utils
dist = (a, b) -> Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
vec2 = (x, y) -> {x, y}

# utils for html elements
get_mousepos_in_element = (el, e) ->
    left = el.offsetLeft + el.clientLeft
    top = el.offsetTop + el.clientTop
    return { x: e.pageX - left, y: e.pageY - top }



module.exports = {
    # math utils
    dist, vec2,
    # html utils
    get_mousepos_in_element
}
