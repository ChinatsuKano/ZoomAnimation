console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=150%", // You can adjust this value as needed
                pin: true,
                scrub: true,
                markers: false
            }
        })
        .to(".image-container img", { // Targeting the specific image
            scale: 2, // You can increase this to scale: 3 or scale: 4
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut"
        })
        .to(
            ".section.hero",
            {
                scale: 1.1,
                transformOrigin: "center center",
                ease: "power1.inOut"
            },
            "<"
        );
});