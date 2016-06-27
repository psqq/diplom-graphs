
Graph = require './Graph'


###
example for builder1:
options
    vertices:
        0: x: 100, y: 100
        1: x: 50, y: 50
        2: x: 150, y: 50
    links:
        0: [1, 2]
###
module.exports.
builder1 = (options) ->
    g = new Graph
    g.add_vertex ""+name, info for name, info of options.vertices
    for a, arr of options.links
        for b in arr
            g.add_link ""+a, ""+b
    return g

