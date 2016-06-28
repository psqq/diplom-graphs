
module.exports =
class GraphInfo

    constructor: (@g1, @g2, @el1, @el2, @global_res) ->
        @update()
        @g1.on_change => @update()
        @g2.on_change => @update()

    update: ->
        s1 = @g1.invariant3_as_str()
        s2 = @g2.invariant3_as_str()
        $(@el1).html s1
        $(@el2).html s2
        clr = "red"
        msg = "Инврианты НЕ совпадают"
        if s1 == s2
            clr = "green"
            msg = "Инврианты совпадают"
        $(@global_res).html "<font color=#{clr}>#{msg}</font>"

