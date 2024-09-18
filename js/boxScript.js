var tl = gsap.timeline()

tl.from("#name",{
    y: 20,
    opacity: 0,
    duration: 0.5,
   scale: 0.2,
})

tl.to("#name",{
    color: "#1B1464",
    duration: 2,
    delay: 1,
    opacity: 0,
    y:30, //works as translate in css.
    repeat: -1,
    yoyo: true,
})

gsap.to(".box1", {
    y: 535,
    duration: 2,
    // delay: 1,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box2", {
    y: 550,
    duration: 2,
    delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.from(".box3", {
    y: 500,
    duration: 2,
    delay: 0.4,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box4", {
    y: 500,
    duration: 2,
    delay: 0.1,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box5", {
    y: 500,
    duration: 3,
    delay: 0.4,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.from(".box6", {
    y: 500,
    duration: 4,
    delay: 0.1,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.from(".box7", {
    y: 500,
    duration: 2,
    // delay: 1,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box8", {
    y: 500,
    duration: 2,
    delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box9", {
    y: 500,
    duration: 3,
    delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box10", {
    y: 500,
    duration: 5,
    delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box11", {
    y: 500,
    duration: 2,
    // delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.from(".box12", {
    y: 500,
    duration: 2,
    delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box13", {
    y: 500,
    duration: 2,
    delay: 0.5,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.from(".box14", {
    y: 500,
    duration: 2,
    delay: 0.1,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.from(".box15", {
    y: 500,
    duration: 2,
    delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box16", {
    y: 500,
    duration: 2,
    // delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box17", {
    y: 500,
    duration: 2,
    delay: 2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box18", {
    y: 500,
    duration: 3,
    delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.from(".box19", {
    y: 500,
    duration: 2,
    delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to(".box20", {
    y: 500,
    duration: 2,
    // delay: 0.2,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})