var tl = gsap.timeline() // create a timeline

tl.from("h2",{
    y: -20, // move 20px up
    opacity: 0, // start with 0 opacity
    duration: 1, // animation duration
    delay: 0.5 // delay 0.5s
})

tl.from("h4",{
    y: -20, // move 20px up
    opacity: 0, // start with 0 opacity
    duration: 1, // animation duration
    stagger: 0.3 // delay 0.3s
})

tl.from("h1",{
    y: 20, // move 20px down
    opacity: 0, // start with 0 opacity
    duration: 1, // animation duration
    scale: 0.5 // start with 0.5 scale
})