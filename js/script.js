gsap.to("h1",{
    color: "red",
    duration: 2,
    delay: 1,
    opacity: 0,
    y:30, //works as translate in css.
    stagger: 0.2, //show h1 one by one. not all together. here stagger 1 is the time in a second.
})
gsap.from("h2",{
    color: "yellow",
    duration: 2,
    delay: 1,
    opacity: 0,
    y:30,
    stagger: -1, //show h2 one by one but last one is shown at first.
    repeat: -1,
    yoyo: true,
})

gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    yoyo: true,
    repeat: -1,
})
gsap.to("#box1a", {
    x: 1000,
    duration:2,
    delay: 1,
    rotate: 360,
    backgroundColor: "white",
    borderRadius: "50%",
    scale: 2,
    yoyo: true,
    repeat: -1,
})
gsap.from("#box1b", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "orange",
    borderRadius: "50%",
    scale: 0.5,
    yoyo: true,
    repeat: -1,
})
gsap.from("#box1c", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "orange",
    borderRadius: "50%",
    scale: 0.5,
    repeat: 1, //that means it will work 2 times.first it will work initially then secondly it will repeat.
})

gsap.from("#box2", {
    // x: 1000,
    y: 1200,
    duration: 2,
    delay: 1,
    rotate: 360,
    repeat: -1, 
    yoyo: true,
})

gsap.to("#box2a", {
    x: 1000,
    duration:2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale: 2,
    repeat: -1, 
    yoyo: true, //yoyo true means it will return from it's final position to initial position.
})
gsap.from("#box2b", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "green",
    borderRadius: "50%",
    scale: 0.5,
    repeat: -1,
    yoyo: true, 
})
gsap.from("#box2c", {
    x: 2000,
    duration: 5,
    delay: 1,
    rotate: 360,
    backgroundColor: "red",
    borderRadius: "20%",
    scale: 5, //make size bigger
    repeat: -1, // it means it will repeat infinitely.
    yoyo: true,
})

var tl = gsap.timeline()

tl.from("#nav h3",{
    y: -30, // it means translate -30
    opacity: 0,
    duration: 1,
    delay: 0.5,
})
tl.from(".navp p",{
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
})
tl.from("#middle",{
    y: 20,
    opacity: 0,
    duration: 0.5,
   scale: 0.2,
})