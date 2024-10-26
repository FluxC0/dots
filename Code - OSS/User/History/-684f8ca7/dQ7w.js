/*
@title: Worthless Clicker
@author: BasilE
@tags: ['clicker']
@addedOn: 2024-10-00

@img: ""

It's a clicker game. you click. surely nothing could come of this.

*/


const button = 'b'
const pixel = 'px'
const level = map`b`
var clicks = 0

setLegend(
    [button, bitmap`
    ....LLLLLLLL....
    ...L33333333L...
    ..L3333333333L..
    ..L3333333333L..
    .L333333333333L.
    .L333333333333L.
    L33333333333333L
    L33333333333333L
    L33333333333333L
    .L333333333333L.
    .L333333333333L.
    ..L3333333333L..
    ..L3333333333L..
    ...L33333333L...
    ....LLLLLLLL....

        
        
        `]
)




setMap(level)

oninput("d", () => {
    clicks += 1
    clearText()
    addText(clicks, {x:1, y:1, color:``})
})