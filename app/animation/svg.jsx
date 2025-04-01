import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Funzione per configurare ScrollTrigger su cerchi con un nome dinamico
export const circleAnimation = (circleRef, name) => {
    if (!circleRef?.current) {
        console.warn('circleRef non è definito o non è associato a un elemento valido.');
        return;
    }

    ScrollTrigger.create({
        trigger: `.${name}`, // Nome dinamico delle sezioni
        start: 'top top',
        onEnter: () => {
            if (circleRef.current) {
                circleRef.current.classList.add('active');
            }
        },
        onLeaveBack: () => {
            if (circleRef.current) {
                circleRef.current.classList.remove('active');
            }
        },
    });
};

// Funzione per configurare ScrollTrigger su frecce con un nome dinamico
export const frecciaAnimation = (frecciaRef, name) => {
    if (!frecciaRef?.current) {
        console.warn('frecciaRef non è definito o non è associato a un elemento valido.');
        return;
    }

    ScrollTrigger.create({
        trigger: `.${name}`, // Nome dinamico delle sezioni
        start: 'top top',
        onEnter: () => {
            if (frecciaRef.current) {
                frecciaRef.current.classList.add('activeFreccia');
            }
        },
        onLeaveBack: () => {
            if (frecciaRef.current) {
                frecciaRef.current.classList.remove('activeFreccia');
            }
        },
    });
};
