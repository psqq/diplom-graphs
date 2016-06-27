
CanvasGraphConstructor = require './CanvasGraphConstructor'
GraphBuilder = require './GraphBuilder'
GraphTable = require './GraphTable'


mainloop_objects = []


mainloop = ->
    time = Date.now()
    dt = 14
    step = ->
        cur_dt = Date.now() - time
        time = Date.now()
        cur_dt = Math.min(cur_dt, 1000)
        while cur_dt > 0
            for obj in mainloop_objects
                obj.update dt if obj.update? 
            cur_dt -= dt
        for obj in mainloop_objects
            obj.render() if obj.render?
        requestAnimationFrame step
    requestAnimationFrame step

mainloop()



# JSON.stringify(GraphBuilder.make_options_for_builder1(gb1.graph), null)
g1 = GraphBuilder.builder1 {"vertices":{"0":{"x":198,"y":375.1875},"1":{"x":93,"y":326.1875},"2":{"x":302,"y":338.1875},"3":{"x":43,"y":250.1875,"name":"3"},"4":{"x":154,"y":247.1875,"name":"4"},"5":{"x":300,"y":272.1875,"name":"5"},"6":{"x":261,"y":208.1875,"name":"6"},"7":{"x":354,"y":229.1875,"name":"7"},"8":{"x":103,"y":170.1875,"name":"8"},"9":{"x":37,"y":58.1875,"name":"9"},"10":{"x":113,"y":62.1875,"name":"10"},"11":{"x":194,"y":60.1875,"name":"11"},"12":{"x":327,"y":183.1875,"name":"12"},"13":{"x":361,"y":145.1875,"name":"13"},"14":{"x":320,"y":113.1875,"name":"14"},"15":{"x":357,"y":77.1875,"name":"15"},"16":{"x":317,"y":46.1875,"name":"16"}},"links":{"0":["1","2"],"1":["3","4"],"2":["5"],"3":["8"],"5":["6","7"],"8":["9"],"10":["8"],"11":["8"],"12":["7","13"],"13":["14"],"14":["15"],"15":["16"]}}
g2 = GraphBuilder.builder1 {"vertices":{"0":{"x":191,"y":380.375,"name":"0"},"1":{"x":50,"y":320.375,"name":"1"},"2":{"x":309,"y":303.375,"name":"2"},"3":{"x":68,"y":190.375,"name":"3"},"4":{"x":306,"y":180.375,"name":"4"},"5":{"x":65,"y":71.375,"name":"5"},"6":{"x":184,"y":187.375,"name":"6"},"7":{"x":266,"y":89.375,"name":"7"},"8":{"x":352,"y":82.375,"name":"8"},"9":{"x":177,"y":297.375,"name":"9"}},"links":{"0":["2","1","9"],"1":["3"],"2":["4"],"3":["5"],"4":["7","8"],"6":["9"]}}

gt = [new GraphTable("#gt1", g1), new GraphTable "#gt2", g2]
mainloop_objects = mainloop_objects.concat gt


prg = (i) -> console.log JSON.stringify(GraphBuilder.make_options_for_builder1(gt[i].graph))



_.defaults window, {GraphBuilder, prg, gt}
