/*
@title: Worthless Clicker
@author: BasilE
@tags: ['clicker']
@addedOn: 2024-10-00

@img: ""

It's a clicker game. you click. surely nothing could come of this.

*/
const centerX = Math.floor(width() / 2);
const centerY = Math.floor(height() / 2);
const clickNoise = tune`
500,
500: B5-500,
15000`
const happyNoise = tune`
176.47058823529412,
176.47058823529412: F5-176.47058823529412,
176.47058823529412: G5-176.47058823529412,
176.47058823529412: A5-176.47058823529412,
4941.176470588235`
const button = 'b';
const button2 = 'c';
const bg = 'g';
const bgnscrn = 't'
const pixel = 'px';
const levels = [bgnscrn,bg];
var clicks = 0;
let lastClickTime = 0;
const clickCooldown = 200;

setLegend(
  [button, bitmap`
................
................
................
................
................
................
................
................
................
................
......33333.....
.....3333333....
.....0000000....
....0LLLLLLL0...
....000000000...
................`],
  [button2, bitmap`
................
................
................
................
................
................
................
........6.......
.....6..6..6....
......6...6.....
................
......33333.....
.....0000000....
....0LLLLLLL0...
....000000000...
................`],

  [bg, bitmap`
................
................
................
................
................
................
................
0000000000000000
LLLLLLLLLLLLLLLL
L33111111111133L
L33111111111133L
L31111111111113L
L33111111111133L
L33111111111133L
L11111111111111L
L11111111111111L`],
  [bgnscrn, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000006000000000
0060000000000000
0006000000000000
0000600006600000
0006000060000000
0000600600060000
L330006000000000
LL33000006600000
LLL3300060060000
LLLL330000006000
LLLLL33000000000
LLLLLL3000000000
LLLLLLL000000000`]
  

);




setMap(levels[0])
addText("Pointless Button", {x: centerX, y: centerY, color:color`2`});
addText("Clicker", {x: centerX, y:-3, color:color`2`});

function  start_loop() {
  onInput("d", () => {

    const currentTime = Date.now();
    if (currentTime - lastClickTime >= clickCooldown) {
      let bspr = addSprite(0, 0, button);

      clicks += 1;
      playTune(clickNoise);
      lastClickTime = currentTime;
      clearText();

      addText(clicks.toString(), { x: centerX, y: centerY - 3, color: `1` });
 

    };
  });
}