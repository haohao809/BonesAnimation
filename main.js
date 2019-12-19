window.onload = function() {
    const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;
    const fks = FKSystem.create(width/2, height/2);
    fks.addArm(200, Math.PI / 2, Math.PI / 4);
    fks.addArm(180, 0.87, 0.87);
    update();
    function update() {
        context.clearRect(0,0,width,height);
        fks.update();
        fks.render(context);
        requestAnimationFrame(update)
    }
             
}