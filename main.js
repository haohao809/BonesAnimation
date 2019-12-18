window.onload = function() {
    const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;
    const arm = Arm.create(width/2, height/2,100, 0.1);
    const arm2 = Arm.create(arm.getEndX(),arm.getEndY(),100,0);
    angle = 0;
    update();
    function update() {
        context.clearRect(0,0,width,height);
        arm.angle = Math.sin(angle) *1.2;
        arm2.x = arm.getEndX();
        arm2.y = arm.getEndY();
        angle += 0.05;
        arm.render(context);
        arm2.render(context);
        requestAnimationFrame(update)
    }
    arm.render(context);          
}