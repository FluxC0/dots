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
const clickNoise = tune`
500,
500: B5-500,
15000`
const button = 'b';
const button2 = 'b2';
const pixel = 'px';
const level = [map`b`,map`b2`];
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

        
        
        `],
	[button2, bitmap`
	....LLLLLLLL....
    ...L44444444L...
    ..L4444444444L..
    ..L4444444444L..
    .L444444444444L.
    .L444444444444L.
    L44444444444444L
    L44444444444444L
    L44444444444444L
    .L444444444444L.
    .L444444444444L.
    ..L4444444444L..
    ..L4444444444L..
    ...L44444444L...
    ....LLLLLLLL....
		`]
);




setMap(level[0])

onInput("d", () => {

	const currentTime = Date.now()
	if (currentTime - lastClickTime >= clickCooldown) {
		setMap(level[1]);
    	clicks += 1;
		playTune(clickNoise)
		lastClickTime = currentTime;
    	clearText();
		setMap(level[0]);
    	addText(clicks.toString(), {x:centerX, y:centerY, color:`1`});
	};
});