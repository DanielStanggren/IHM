
function shootBall() {
    var ball = document.getElementById('ball');
    ball.style.bottom = '400px'; // move the ball up
    setTimeout(function() {
        ball.style.bottom = '50px'; // reset the ball position after the shot
    }, 1000);
}
