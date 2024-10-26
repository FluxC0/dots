/*
@title: Worthless Clicker
@author: BasilE
@tags: ['clicker']
@addedOn: 2024-10-00

@img: ""

It's a clicker game. you click. surely nothing could come of this.

*/
const centerX = Math.floor(width()/2);
const centerY = Math.floor(height() / 2);

const button = 'b';
const pixel = 'px';
const level = map`b`;
var clicks = 0;
let lastClickTime = 0;
const clickCooldown = 200;
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
);




setMap(level)

onInput("d", () => {
	const currentTime = Date.now()
	if (currentTime - lastClickTime >= clickCooldown) {
    	clicks += 1;
		lastClickTime = currentTime;
    	clearText();
    	addText(clicks.toString(), {x:5, y:5, color:`1`});
	};
});