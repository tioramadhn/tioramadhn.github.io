 gsap.registerPlugin(ScrollTrigger);
 const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".bg-warning",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
    }
  });
//  --- ORANGE PANEL ---
tl.from(".box", {
scaleX: 0, 
transformOrigin: "left center", 
ease: "none"
});

tl.from(".vid", {
    scale: .2, 
        transformOrigin: "top center", 
        ease: "none"
    
  });


