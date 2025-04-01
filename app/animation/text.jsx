import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Titolo Hero
export const fadeBottomAnimation = (elementRef) => {
    if (elementRef.current) {
        // Splitta il testo in caratteri con SplitType
        const splitText = new SplitType(elementRef.current, { types: 'chars' });

        gsap.from(splitText.chars, {
            y: 20,      // Partono dal basso
            opacity: 0,
            stagger: 0.07, // Ritardo tra le lettere
            duration: 1, // Durata dell'animazione
            ease: 'power3.out',
        });

        // Cleanup
        return () => {
            splitText.revert();
        };
    } else {
        console.error('SplitType non è disponibile.');
    }
};


// testi generali
export const animateTesti = (containerRef, textRefs) => {
    const container = containerRef.current
    const textElements = textRefs.current

    textElements.forEach((text, index) => {
        gsap.set(text, { opacity: 0, y: 50 })

        ScrollTrigger.create({
            trigger: text,
            start: 'top bottom',
            end: 'bottom+=30px top',
            onEnter: () => {
                gsap.to(text, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                })
            },
            onLeaveBack: () => {
                gsap.to(text, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: 'power2.inOut',
                })
            },
        })
    })

    ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        onLeave: () => {
            gsap.to(textElements, {
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: 'power2.in',
                stagger: 0.1,
            })
        },
        onEnterBack: () => {
            gsap.to(textElements, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.1,
            })
        },
    })

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
}
