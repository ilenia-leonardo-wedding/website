import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const backgroundColorChange = () => {
    // Animation for changing background color
    gsap.to("body", {
        "--color": "#FAFAF7", // Default color
        immediateRender: false,
        scrollTrigger: {
            trigger: ".section-hero",
            start: 'top bottom',
            scroller: "body", // Specify the scroller as body
            scrub: true,
            end: '+=120%'
        }
    });

    gsap.to("body", {
        "--color": "#FAFAF7",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".section-presentazione",
            start: 'top bottom',
            scroller: "body", // Specify the scroller as body
            scrub: true,
            end: '+=120%'
        }
    });

    gsap.to("body", {
        "--color": "#8FAABF",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".section-infoGeneral",
            start: 'top bottom',
            scroller: "body", // Specify the scroller as body
            scrub: true,
            end: '+=120%'
        }
    });

    gsap.to("body", {
        "--color": "#FAFAF7",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".section-cerimonia",
            start: 'top bottom',
            scroller: "body", // Specify the scroller as body
            scrub: true,
            end: '+=120%'
        }
    });

    gsap.to("body", {
        "--color": "#F8DBD5",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".section-sala",
            start: 'top bottom',
            scroller: "body", // Specify the scroller as body
            scrub: true,
            end: '+=120%'
        }
    });

    gsap.to("body", {
        "--color": "#FAFAF7",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".section-form",
            start: 'top bottom',
            scroller: "body", // Specify the scroller as body
            scrub: true,
            end: '+=120%'
        }
    });

    gsap.to("body", {
        "--color": "#FAFAF7",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".section-countdown",
            start: 'top bottom',
            scroller: "body", // Specify the scroller as body
            scrub: true,
            end: '+=120%'
        }
    });


    gsap.to("body", {
        "--color": "#F8DBD5",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".section-visite",
            start: 'top bottom',
            scroller: "body", // Specify the scroller as body
            scrub: true,
            end: '+=120%'
        }
    });




};

