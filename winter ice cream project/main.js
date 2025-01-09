var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#s1",
            start:"0% 80%",
            end:"50% 50%",
            scrub: true,
        }
    })

    var tl1 = gsap.timeline({
        scrollTrigger:{
            trigger:"#s2",
            start:"0% 80%",
            end:"50% 50%",
            scrub: true,
        }
    })

tl.to(".hero-center-image",{
    top:"123%",
    left:"52.5%",
    width:"17vw",
    rotate:"0",
})

tl1.to(".hero-center-image",{
    top:"210%",
    left:"28.7%",
    width:"11vw",
    rotate:"0",
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#s3",
        start:"0% 65%",
        end:"50% 50%",
        scrub: true,
    }
})

tl2.to(".hero-center-image",{
    top:"270%",
    left:"29%",
    width:"19vw",
    rotate:"-54deg",
})