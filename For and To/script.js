gsap.to("#box1",{
    x:1000, // for x axis
    duration:2, // for speed
    delay:1, // for delay
    rotate:360, // for rotation
    backgroundColor:"blue", // for color
    borderRadius:"50%", // for circle
    scale:1.5 // for circle size
})
gsap.from(".box2",{
    x:1000,
    duration:2,
    delay:1,
})