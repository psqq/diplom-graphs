
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


mainloop()
gb1 = new GraphBuilder $('#graphbuilder1').get(0)
mainloop_objects.push gb1

