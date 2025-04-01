// "use client";
// import { useEffect, useState, useRef } from 'react';
// import { animateTesti } from '@/app/animation/text';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(useGSAP, ScrollTrigger);

// // Funzione per calcolare il tempo rimanente
// const getTimeRemaining = (endDate) => {
//     const now = new Date();
//     const difference = endDate - now;

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     return { days, hours, minutes, seconds };
// };



// export default function Countdown() {
//     const weddingDate = new Date('2025-07-25T00:00:00');
//     const [timeLeft, setTimeLeft] = useState(getTimeRemaining(weddingDate));

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimeLeft(getTimeRemaining(weddingDate));
//         }, 1000); // Aggiorna il countdown ogni secondo

//         return () => clearInterval(interval); // Pulizia dell'intervallo
//     }, [weddingDate]);

//     // animazione di fade per i testi
//     const containerRef = useRef(null)
//     const textRefs = useRef([])
//     useEffect(() => {
//         const cleanup = animateTesti(containerRef, textRefs)
//         return cleanup
//     }, [])

//     // useGSAP(
//     //     () => {
//     //         const timelineCount = gsap.timeline({
//     //             scrollTrigger: {
//     //                 trigger: "#countdown",
//     //                 start: "top center",
//     //                 end: "+=50vh",
//     //                 scrub: 2.5,
//     //             }
//     //         })

//     //         timelineCount
//     //             .from("#testoMain", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             })
//     //             .from("#testoMain2", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             },

//     //             )
//     //             .from("#giorni", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             },

//     //             )
//     //             .from("#testoGiorni", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             },

//     //             )
//     //             .from("#ore", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             },

//     //             )
//     //             .from("#testoOre", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             },

//     //             )
//     //             .from("#minuti", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             },

//     //             )
//     //             .from("#testoMinuti", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             },

//     //             )
//     //             .from("#secondi", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             },

//     //             )
//     //             .from("#testoSecondi", {
//     //                 y: 20,
//     //                 opacity: 0,
//     //             },
//     //             )
//     //     },
//     // );

//     return (
//         <div ref={containerRef} id='countdown' className=" primary  flex flex-col lg:gap-6 justify-center items-center">
//             <h2 className="text-5xl lg:text-7xl text-center primary px-4 flex flex-col uppercase text-secondary"><span id='testoMain'>Ci siamo quasi!</span> <span id='testoMain2' className='normal-case text-3xl'>Mancano solo</span></h2>
//             <div className="flex justify-center text-secondary mt-[15px] gap-4 lg:gap-6">
//                 <div className="">
//                     <span id='giorni' className=" text-3xl lg:text-5xl">{timeLeft.days}</span>
//                     <span id='testoGiorni' className="text-secondaryChiaro"> Giorni</span>
//                 </div>
//                 <div className="">
//                     <span id='ore' className="text-3xl lg:text-5xl">{timeLeft.hours}</span>
//                     <span id='testoOre' className="text-secondaryChiaro"> Ore</span>
//                 </div>
//                 <div className="">
//                     <span id='minuti' className=" text-3xl lg:text-5xl">{timeLeft.minutes}</span>
//                     <span id='testoMinuti' className="text-secondaryChiaro"> Minuti</span>
//                 </div>
//                 <div className="">
//                     <span id='secondi' className=" text-3xl lg:text-5xl">{timeLeft.seconds}</span>
//                     <span id='testoSecondi' className="text-secondaryChiaro"> Secondi</span>
//                 </div>
//             </div>
//         </div>
//     );
// }




"use client";
import { useEffect, useState, useRef } from 'react';
import { animateTesti } from '@/app/animation/text';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Funzione per calcolare il tempo rimanente
const getTimeRemaining = (endDate) => {
    const now = new Date();
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

export default function Countdown() {
    const [isClient, setIsClient] = useState(false); // Flag per il rendering solo lato client
    const weddingDate = new Date('2025-07-25T00:00:00');
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(weddingDate));

    useEffect(() => {
        // Imposta il flag per indicare che il client è pronto
        setIsClient(true);

        // Aggiorna il countdown ogni secondo
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining(weddingDate));
        }, 1000);

        return () => clearInterval(interval); // Pulizia dell'intervallo
    }, [weddingDate]);

    // Animazione di fade per i testi
    const containerRef = useRef(null);
    const textRefs = useRef([]);
    useEffect(() => {
        if (isClient) {
            const cleanup = animateTesti(containerRef, textRefs);
            return cleanup;
        }
    }, [isClient]);

    if (!isClient) {
        // Evita di renderizzare contenuti lato server
        return null;
    }

    return (
        <div ref={containerRef} id="countdown" className="primary flex flex-col lg:gap-6 justify-center items-center mt-[10%]">
            <h2 className="text-5xl lg:text-7xl text-center primary px-4 flex flex-col uppercase gap-[10px] text-zuccheroDark">
                <span id="testoMain">Ci siamo quasi!</span>
                <span id="testoMain2" className="normal-case text-3xl ">Mancano solo</span>
            </h2>
            <div className="flex justify-center text-zuccheroDark mt-[15px] gap-4 lg:gap-6">
                <div>
                    <span id="giorni" className="text-3xl lg:text-5xl">{timeLeft.days}</span>
                    <span id="testoGiorni" className="text-secondaryChiaro"> Giorni</span>
                </div>
                <div>
                    <span id="ore" className="text-3xl lg:text-5xl">{timeLeft.hours}</span>
                    <span id="testoOre" className="text-secondaryChiaro"> Ore</span>
                </div>
                <div>
                    <span id="minuti" className="text-3xl lg:text-5xl">{timeLeft.minutes}</span>
                    <span id="testoMinuti" className="text-secondaryChiaro"> Minuti</span>
                </div>
                <div>
                    <span id="secondi" className="text-3xl lg:text-5xl">{timeLeft.seconds}</span>
                    <span id="testoSecondi" className="text-secondaryChiaro"> Secondi</span>
                </div>
            </div>
        </div>
    );
}
