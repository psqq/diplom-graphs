
Graph = require './Graph'
utils = require './utils'
CanvasGraphConstructor = require './CanvasGraphConstructor'
GraphInfo = require './GraphInfo'

counter = 0

module.exports =
class GraphTable
    constructor: (@container, @graph = new Graph) ->
        @container = $(@container).get 0 if _.isString @container

        @id = "gt" + counter++
        div_for_constructor = $("<div>").attr('id', @id + ".gb").get 0
        div_for_graph_info = $("<div>").attr('id', @id + ".info").get 0

        @el = utils.make_talbe [
            ['Рисунок графа', 'Информация о графе'], 
            [
                div_for_constructor, div_for_graph_info
            ]
        ], { header: true }
        @container.appendChild @el

        @gb = new CanvasGraphConstructor div_for_constructor, @graph
        @gi = new GraphInfo div_for_graph_info, @graph

    update: ->
        @gb.update() if @gb.update?

    render: ->
        @gb.render()

