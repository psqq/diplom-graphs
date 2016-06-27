
CanvasGraphConstructor = require './CanvasGraphConstructor'
GraphBuilder = require './GraphBuilder'


mainloop_objects = []


mainloop = ->
    time = Date.now()
    dt = 14
    step = ->
        cur_dt = Date.now() - time
        time = Date.now()
        cur_dt = Math.min(cur_dt, 1000)
        while cur_dt > 0
            obj.update dt for obj in mainloop_objects
            cur_dt -= dt
        obj.render() for obj in mainloop_objects
        requestAnimationFrame step
    requestAnimationFrame step


g = GraphBuilder.builder1
    vertices:
        0: x: 100, y: 100
        1: x: 50, y: 50
        2: x: 150, y: 50
    links:
        0: [1, 2]

mainloop()
gb1 = new CanvasGraphConstructor $('#graphbuilder1').get(0), g
mainloop_objects.push gb1


_.defaults window, {gb1}
