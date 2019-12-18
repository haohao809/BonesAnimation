window.onload = function() {
    const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;
    const arm = Arm.create(width/2, height/2,100, 0.1);
    arm.render(context);          
}