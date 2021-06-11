
/* log:
    1. 有時可偵測到鍵盤狀態，有時不行。
*/

let game = Engine('stage'); // 傳入畫布元素的 ID
game.start();

game.setBackdrop("./assets_cars/bg.jpg");
let end = game.createSprite("./assets_cars/end.png");
let road = game.createSprite("./assets_cars/road.png");
let car1 = game.createSprite("./assets_cars/car_red.png");
let car2 = game.createSprite("./assets_cars/car_blue.png");
end.direction = 0;
end.y = 40;
end.x = 450;
car1.direction = 270;
car1.y = 20;
car1.x = 340;
car2.direction = 270;
car2.y = 50;
car2.x = 340;
key = game.key;

function loop() {
    if (key.right) {
        car1.direction += 4;
    }
    if (key.left) {
        car1.direction -= 4;
    }
    if (car1.touched(road)) {
        car1.stepForward(0.3);
    } else {
        car1.stepForward(2.5);
    }

    if (key.d) {
        car2.direction += 4;
    }
    if (key.a) {
        car2.direction -= 4;
    }
    if (car2.touched(road)) {
        car2.stepForward(0.3);
    } else {
        car2.stepForward(2.5);
    }

    if (car2.touched(end) && car1.touched(end)) {
        game.stop();
    }
}

game.forever(loop);