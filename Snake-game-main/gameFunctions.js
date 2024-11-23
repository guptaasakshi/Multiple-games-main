function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPrintTime) / 1000 < 1 / speed) return;
    lastPrintTime = ctime;
    gameEngine();
}

function isCollide(snakeArr) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) return true;
    }
    if (snakeArr[0].x < 0 || snakeArr[0].x >= 18 || snakeArr[0].y < 0 || snakeArr[0].y >= 18) return true;
    return false;
}
