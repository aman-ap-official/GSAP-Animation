// without time line

// gsap.to("#box1",{
//     x: 1100,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1
// })
// gsap.to("#box2",{
//     x: 1100,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 1.5,
//     delay: 2.5
// })
// gsap.to("#box3",{
//     x: 1100,
//     scale: 0.5,
//     borderRadius: "50%",
//     duration: 1.5,
//     delay: 4
// })


// Time Line Animation

var tl = gsap.timeline()  // timeline object

tl.to("#box1",{
    x: 1100,  // move to
    rotate: 360, // rotate
    duration: 1.5, // time
    delay: 1 // delay
})

tl.to("#box2",{
    x: 1100, // move to
    rotate: 360,   // rotate
    duration: 1.5, // time
})

tl.to("#box3",{
    x: 1100,  // move to
    rotate: 360, // rotate
    duration: 1.5, // time
})