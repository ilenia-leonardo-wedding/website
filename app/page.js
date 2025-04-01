"use client";
import FormProva from '../components/FormProva';
import Countdown from '@/components/Countdown';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { fadeBottomAnimation, animateTesti } from './animation/text';
import { backgroundColorChange } from './animation/bg-changeColor';
import { circleAnimation, frecciaAnimation } from './animation/svg';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


export default function Home() {
  const textRef = useRef([]);

  // animazione di fade per il titolo hero
  useEffect(() => {
      // Richiama l'animazione del fadeBottom
      if (textRef.current) {
          fadeBottomAnimation(textRef);
      }
  }, []);

   // animazione di fade per i testi
   const containerRef = useRef(null)
   const textRefs = useRef([])
   useEffect(() => {
     const cleanup = animateTesti(containerRef, textRefs)
     return cleanup
   }, [])


  // animazione colore sfondo 
  useEffect(() => {
    backgroundColorChange();
  }, []);


  const circleRefPresentazione = useRef(null);
  const circleRefCerimonia = useRef(null);
  const circleRefSala = useRef(null);
  const circleRefSala2 = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    circleAnimation(circleRefPresentazione, 'section-presentazione');
    circleAnimation(circleRefCerimonia, 'section-cerimonia');
    circleAnimation(circleRefSala, 'section-sala');
    circleAnimation(circleRefSala2, 'section-sala');
    circleAnimation(circleRef, 'fotoFinale');
  }, []);


  const frecciaRefProgramma = useRef(null);
  const freccia2RefProgramma = useRef(null);
  const frecciaLetter = useRef(null);
  useEffect(()=>{
    frecciaAnimation(frecciaRefProgramma, 'section-infoGeneral');
    frecciaAnimation(freccia2RefProgramma, 'section-infoGeneral');
    frecciaAnimation(frecciaLetter,
      'rsvp');
  }, []);


  // link con smooth allo scroll 
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(`#${targetId}`);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};


// timeline per avere animazioni di più elementi collegati tra di loro con il giusto ritardo (SEZIONE PROGRAMMA)
useGSAP(
  () => {
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#programma",
        start: "top top",
        end : "+=50vh",
        scrub: 2.5,
      }
    })

    scrollTL
    .from("#orarioCerimonia", { 
      y:20,
      opacity: 0,
    })
    .from("#testoCerimonia", { 
      y:20,
      opacity: 0,
    },
    "+=1"
    )
    .from("#orarioFesteggiamenti", {
      y: 20, 
      opacity: 0,
    },
    "+=0.3"
    )
    .from("#testoFesteggiamenti", { 
      y:20,
      opacity: 0,
    },
    "+=0.3"
    )
  },

); 


  return (
    <main className="flex w-full overflow-hidden flex-col items-center">
      
      {/* HERO */}
      <div ref={containerRef} id='hero' className='h-[100vh] pt-[5%] bg-Hero bg-center bg-cover bg-no-repeat w-full section-hero flex flex-col  items-center justify-start rounded-b-3xl'>
      
        {/* overlay */}
        <div className="absolute  bg-black bg-opacity-25 z-10 rounded-b-3xl"></div> 

        <p ref={textRef} className='primary uppercase text-3xl mt-[10%] lg:text-5xl text-zuccheroDark z-50'>25/07/2025</p>
        <h1 ref={el => (textRefs.current[0] = el)} className="text-7xl lg:text-9xl text-center font-bold mb-8 primary text-zuccheroDark  text-wrap fadeBottom z-20">Ilenia e Leonardo</h1>
      </div> 

      {/* Presentazione sposi  */}
      <div className=' flex flex-col justify-center items-center section-presentazione relative px-6' ref={containerRef} >
        <h3 ref={el => (textRefs.current[1] = el)} className='text-5xl lg:text-8xl text-center primary uppercase text-verdeSalviaDark mt-[40px]'>Stiamo per dire <span className='primary font-medium text-7xl  text-salvia lg:text-9xl'>'SI'!</span></h3>
        <p   ref={el => (textRefs.current[2] = el)}  className='text-center secondary text-md lg:text-lg px-2 lg:w-[50vw] text-verdeSalviaDark'>Finalmente il grande giorno è in arrivo e siamo qui per darvi tutte le informazioni utili… e per assicurarci che non vi perdiate per strada (sappiamo che può succedere!).
        Segnate la data, preparate i vostri passi di danza migliori e fate spazio nei telefoni per mille foto: sarà una festa indimenticabile e non vediamo l'ora di avervi con noi!"</p>
        
        <div  ref={el => (textRefs.current[3] = el)}  className=' w-[300px] bg-Presentazione bg-cover h-[300px] lg:h-[500px] lg:w-[500px] relative rounded-full mt-[40px] mb-[20px]'>
          <svg stroke='#819671' ref={circleRefPresentazione} id="Livello_1" xmlns="http://www.w3.org/2000/svg" className='svgCerchio absolute -left-6 -bottom-6'  version="1.1" viewBox="0 0 420 427">
            <circle cx="212.6" cy="217" r="200"/>
          </svg>
      </div>
      </div>


      {/* PROGRAMMA */}
      <div id='programma' ref={containerRef} className='mt-[100px] h-[100vh] flex items-center justify-center flex-col gap-[50px] section-infoGeneral relative'>
        <h2  ref={el => (textRefs.current[4] = el)} className='primary uppercase text-5xl lg:text-8xl text-center z-10 text-bianco'>Programma</h2>
       
        <Image ref={el => (textRefs.current[5] = el)} alt='rosa' width={200} height={200} src="/rosa.webp" className='w-[100px] absolute -top-2  -right-2 rotate-[45deg]'/>
        <Image ref={el => (textRefs.current[6] = el)} alt='rosa' width={200} height={200} src="/rosa.webp" className='w-[100px] absolute -bottom-2  left-2 rotate-[90deg]'/>
        
        <Link href="#cerimonia"  onClick={(e) => handleSmoothScroll(e, "cerimonia")}>
          <div className='flex  w-full items-center justify-center'>
          <svg ref={frecciaRefProgramma}  xmlns="http://www.w3.org/2000/svg" className='svgFreccia w-[200px]' version="1.1" viewBox="0 0 1300 1300">
            <path d="M469.9,458c29.3,147.4,130.4,297.5,288.8,317l-10.5-46.1,90.8,59.6-99.7,47.6,19.3-47.6c-160.1-23.3-278.9-174.9-294.7-330.4h6Z"/>
          </svg>
          <p  className='secondary flex flex-col  items-center justify-center text-xl lg:text-3xl z-20 w-full svgFreccia text-bianco'><span id='orarioCerimonia' className='primary text-secondary text-8xl lg:text-8xl mr-6 text-zuccheroDark'>15:00</span> <span id='testoCerimonia'>Cerimonia</span></p>
          </div>
        </Link>

      <Link href="#festeggiamenti"  onClick={(e) => handleSmoothScroll(e, "festeggiamenti")}>
          <div className='flex w-full section-programma items-center justify-center relative '>
            <p className='secondary flex flex-col  items-center justify-center text-xl lg:text-3xl z-20 w-full ml-6 text-bianco'><span id='orarioFesteggiamenti' className='primary text-secondary text-8xl lg:text-8xl text-zuccheroDark'>20:30</span><span id="testoFesteggiamenti">Festeggiamenti</span></p>
            <svg ref={freccia2RefProgramma} id="Livello_1" xmlns="http://www.w3.org/2000/svg" className='svgFreccia w-[200px] rotate-180' version="1.1" viewBox="0 0 1300 1300">
              <path d="M469.9,458c29.3,147.4,130.4,297.5,288.8,317l-10.5-46.1,90.8,59.6-99.7,47.6,19.3-47.6c-160.1-23.3-278.9-174.9-294.7-330.4h6Z"/>
            </svg>
          </div>
      </Link>
       
       
        <Image ref={el => (textRefs.current[7] = el)} alt='petalo' width={200} height={200} src="/petaloBianco.webp" className='absolute -right-[3%] w-[200px] -bottom-[1%] rotate-30'/>
        
        <Image ref={el => (textRefs.current[8] = el)} alt='petalo' width={200} height={200} src="/petaloBianco.webp" className='absolute left-[35%] w-[200px] top-[8%] rotate-180'/>
        <Image ref={el => (textRefs.current[9] = el)} alt='petalo' width={200} height={200} src="/petaloBianco.webp" className='absolute -left-[5%] w-[200px] top-[30%] -rotate-90'/>
        <Image ref={el => (textRefs.current[10] = el)} alt='petaloprova' width={200} height={200} src="/petaloBianco.webp" className='absolute left-[45%] w-[200px] top-[65%] rotate-180'/>
        <Image ref={el => (textRefs.current[11] = el)} alt='petaloprova' width={200} height={200} src="/petaloBianco.webp" className='absolute left-[5%] w-[200px] -top-[3%] -rotate-45'/>
        {/* <Image ref={el => (textRefs.current[12] = el)} alt='petaloprova' width={200} height={200} src="/petaloBianco.webp" className='absolute -right-[5%] w-[200px] top-[10%] -rotate-60'/> */}
        <Image ref={el => (textRefs.current[13] = el)} alt='petaloprova' width={200} height={200} src="/petaloBianco.webp" className='absolute left-[25%] w-[200px] bottom-[7%]'/>
      </div>
      

      {/* CERIMONIA */}
      <div ref={containerRef} id='cerimonia' className='mt-[100px] flex flex-col justify-center relative items-center gap-[15px] section-cerimonia px-4 mb-[20%]'>
        <h2 ref={el => (textRefs.current[14] = el)} className='primary uppercase text-5xl lg:text-8xl text-center box text-zucchero'>La cerimonia</h2>
        <p ref={el => (textRefs.current[15] = el)} className='secondary text-md lg:text-lg text-center px-8 -mt-[2%] text-zuccheroDark lg:w-[50vw]'>Il nostro matrimonio si celebrerà nella <span className='text-zucchero primary text-3xl'>Basilica di Santa Maria Assunta</span> di Alcamo, un monumento storico che incanta con la sua maestosa architettura e un’atmosfera ricca di spiritualità. La sua bellezza e il suo calore contribuiranno a rendere il nostro giorno indimenticabile.</p>

        <button ref={el => (textRefs.current[16] = el)} className='bg-zucchero text-bianco px-4 py-2 uppercase primary w-[40vw] lg:w-[20vw] text-lg rounded-full  hover:bg-secondaryChiaro hover:text-secondary'><a target='_blank' href='https://www.google.com/maps?sca_esv=a22d93479fb8aa44&rlz=1C5MACD_enIT1063IT1063&sxsrf=ADLYWIIOCo1yKlVa-qW3wHemInrN196UUA:1735808477350&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JyJJclJuzBPl12qJyPx7ESI3cvVcqCdLSFFSD0xy83MxBKgRWp-QNbGOEJPj7KkhLFMEycCP3ucoZkzf37hnZiRi7MS0AVAkGDnD8ZYKPxkWW3q_7zV6cxlDfpl81enAMN3OV04&biw=1762&bih=1167&dpr=1.6&um=1&ie=UTF-8&fb=1&gl=it&sa=X&geocode=KaGuTBJ2jxkTMW-CsFIaRcsv&daddr=Piazza+IV+Novembre,+4,+91011+Alcamo+TP'>Indicazioni</a></button>

        <div ref={el => (textRefs.current[17] = el)} className=' w-[300px] lg:w-[500px] bg-Chiesa bg-center bg-cover h-[300px] lg:h-[500px] relative rounded-full mt-[10px] -ml-[15%] mb-[20px]'>
          <svg ref={circleRefCerimonia} 
           xmlns="http://www.w3.org/2000/svg" className='svgCerchio grandeChiesa absolute -left-6 -bottom-6'  version="1.1" viewBox="0 0 420 427">
          <circle cx="212.6" cy="217" r="200"/>
          </svg>
      </div>

      <div ref={el => (textRefs.current[18] = el)} className='w-[200px] lg:w-[300px] bg-Chiesa2 bg-cover h-[200px] lg:h-[300px] absolute bottom-[4%] right-[20px] rounded-full mt-[10px] -mb-[25%] shadow-xl'>
      <svg  xmlns="http://www.w3.org/2000/svg" className='svgCerchio active absolute -right-4 -bottom-4 piccoloChiesa'  version="1.1" viewBox="0 0 420 427">
        <circle cx="212.6" cy="217" r="200"/>
      </svg>
      </div>
    
      </div>
      

      {/* SALA */}
      <div ref={containerRef} id="festeggiamenti" className='section-sala mt-[20%] flex flex-col gap-[15px] items-center justify-center relative'>
      <h2 ref={el => (textRefs.current[19] = el)} className='primary text-5xl text-center uppercase lg:text-8xl text-salvia'>La sala</h2>
      <p ref={el => (textRefs.current[20] = el)} className='secondary text-md lg:text-lg px-8 text-center text-verdeSalviaDark -mt-[2%] lg:w-[50vw]'>L'evento si terrà presso il <span className='text-salvia primary text-3xl'>Baglio Santa Lucia</span> di Alcamo, location unica, circondata dalla bellezza della natura e dall'atmosfera romantica. Con il suo charme rustico e l’eleganza senza tempo, sarà lo sfondo perfetto per celebrare il nostro amore insieme a voi.</p>

      <button ref={el => (textRefs.current[21] = el)} className='bg-salvia text-bianco px-4 py-2 uppercase primary w-[40vw] lg:w-[20vw] text-lg rounded-full  hover:bg-bianco hover:text-salvia mb-[45%]'><a target='_blank' href='https://www.google.com/maps?rlz=1C5MACD_enIT1063IT1063&gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyBggAEEUYOTINCAEQLhivARjHARiABDIQCAIQLhivARjHARiABBiYBTITCAMQLhivARjHARiABBiYBRiZBTIQCAQQLhivARjHARiABBiYBTITCAUQLhivARjHARiABBiYBRiZBTIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHtIBCDMxNjFqMGo5qAIAsAIB&um=1&ie=UTF-8&fb=1&gl=it&sa=X&geocode=KekC6QpGhxkTMWtzklKhfylV&daddr=Via+Pier+Maria+Rosso,+41,+91011+Alcamo+TP'>Indicazioni</a></button>

      <div>
            <div ref={el => (textRefs.current[22] = el)} className='w-[300px] lg:w-[500px] bg-Baglio bg-cover h-[300px] lg:h-[500px] relative rounded-full ml-[8%] mb-[40px]'>
            <svg ref={circleRefSala} id="Livello_1" xmlns="http://www.w3.org/2000/svg" className='svgCerchio piccoloSala active absolute -left-8 -bottom-8' version="1.1" viewBox="0 0 420 427">
              <circle cx="212.6" cy="217" r="200"/>
            </svg>
            </div>
      </div>
      

      <div ref={el => (textRefs.current[23] = el)} className='w-[200px] lg:w-[300px] bg-Baglio2 bg-cover h-[200px] lg:h-[300px] absolute bottom-[24%] left-[20px] rounded-full mb-[20%] shadow-xl'>
      <svg  id="Livello_1" xmlns="http://www.w3.org/2000/svg" className='svgCerchio grandeSala active absolute -right-2 -top-2'  version="1.1" viewBox="0 0 420 427">
        <circle cx="212.6" cy="217" r="200"/>
      </svg>
      </div>
      </div>
      

      {/* FORM */}
      <div ref={containerRef} id="rsvp" className='flex items-center flex-col gap-[30px] fotoFinale section-form  mt-[20%] relative'>
        <h2 ref={el => (textRefs.current[24] = el)} className='text-5xl lg:text-7xl text-center mb-10 primary px-6 flex text-verdeSalviaDark flex-col gap-[10px] lg:w-[50vw] z-10'>Non mancare! <span ref={el => (textRefs.current[25] = el)} className='text-lg lg:text-3xl uppercase secondary'>Apri l'invito e conferma la tua presenza.</span></h2>

          <div className='relative h-[10vh] flex items-center justify-center w-full'>
        <Image className='svgFrecciaLetter' src='/frecciaForm.svg' width={100} height={300} alt='freccia'/>

</div>
       

        <FormProva/>
      </div>


      {/* COUNTDOWN */}
      <div id='countdown' className=' lg:h-[130vh] flex flex-col items-center justify-center section-countdown'>
         
      <div ref={containerRef} className='flex items-center justify-center'>
      <div  className=' w-[300px] lg:w-[500px] bg-Countdown bg-cover h-[300px] lg:h-[500px] relative rounded-full mt-[20%] '>
      <svg ref={circleRef}  xmlns="http://www.w3.org/2000/svg" className='svgCerchio countdown absolute -left-6 -bottom-6'  version="1.1" viewBox="0 0 420 427">
        <circle cx="212.6" cy="217" r="200"/>
      </svg>
      </div>
      </div>

      
      <h2  className='primary text-3xl p-[5%] mt-[30%] text-center  lg:text-8xl text-zuccheroDark'>Ma nel frattempo... </h2>
     
      </div>





      {/* VISITE */}
      <div  id="visite" className='section-visite   flex flex-col gap-[15px] items-center justify-end relative'>
     
      <div className='h-[40vh] flex justify-center items-center w-full'>
      <Image className='svgFrecciaVisite h-[70%] md:h-[30%] w-[50%]' src='/frecciavisite.svg' width={100} height={300} alt='freccia'/>
      </div>

        <h2  className='primary text-3xl p-[5%] md:w-[70%] text-center  lg:text-5xl text-verdeSalviaDark'>...perché non approfittare di <span className='uppercase text-4xl md:text-8xl'>qualche momento in più insieme?</span></h2>
        <p  className='secondary text-md lg:text-lg px-8 text-center text-verdeSalviaDark -mt-[2%] lg:w-[50vw]'> Niente panico, il conto alla rovescia è appena iniziato. Il <span className='primary text-verdeSalviaDark text-3xl'>13 luglio</span> dalle ore <span className='primary text-verdeSalviaDark text-3xl'>16:00</span> vieni a trovarci in modalità pre-matrimonio: sarà l'occasione perfetta per condividere un brindisi anticipato e per darci quell'ultima dose di affetto prima del grande giorno! </p>

        <button  className='text-bianco bg-salvia px-4 py-2 uppercase primary w-[40vw] lg:w-[20vw] text-lg rounded-full  hover:bg-verdeSalviaDark'><a target='_blank' 
        href="https://www.google.com/maps/place/37%C2%B059'20.0%22N+12%C2%B059'52.6%22E/@37.988892,12.9953621,17z/data=!3m1!4b1!4m4!3m3!8m2!3d37.988892!4d12.997937?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D"
        >Indicazioni</a></button>
       
        {/* <svg className='brindisiIcon' xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 100 125">
  
                <path d="M36,46.4c.1,0,.2,0,.3,0,.6,0,1.2-.4,1.3-1,.2-.7-.3-1.5-1-1.6-.7-.2-1.5.3-1.6,1-.2.7.3,1.5,1,1.6ZM35.8,44.9c0-.3.3-.5.6-.5s.1,0,.2,0c.3,0,.5.4.5.8,0,.3-.4.5-.8.5-.3,0-.5-.4-.5-.8Z"/>
                <path d="M36.6,40.1c.1,0,.2,0,.3,0,.6,0,1.2-.4,1.3-1,.2-.7-.3-1.5-1-1.6-.7-.2-1.5.3-1.6,1,0,.3,0,.7.1,1,.2.3.5.5.8.6ZM36.4,38.7c0-.3.3-.5.6-.5s.1,0,.2,0c.3,0,.5.4.5.8,0,.3-.4.5-.8.5-.2,0-.3-.1-.4-.3,0-.1-.1-.3,0-.5Z"/>
                <path d="M42.9,39.3c.1,0,.2,0,.3,0,.6,0,1.2-.4,1.3-1,0-.3,0-.7-.2-1-.2-.3-.5-.5-.8-.6-.7-.2-1.5.3-1.6,1,0,.3,0,.7.1,1,.2.3.5.5.8.6ZM42.6,37.8c0-.3.3-.5.6-.5s.1,0,.2,0c.2,0,.3.1.4.3s.1.3,0,.5c0,.3-.4.5-.8.5-.2,0-.3-.1-.4-.3,0-.1-.1-.3,0-.5Z"/>
                <path d="M46.4,40.4s0,0,.1,0c.2,0,.3,0,.3-.3l.2-.5c0-.2,0-.4-.2-.4-.2,0-.4,0-.4.2l-.2.5c0,.2,0,.4.2.4Z"/>
                <path d="M35.5,51.5c1.2,0,2.1-.3,2.1-.3,3.6-1.2,6.3-4,8.3-8.3,0-.2,0-.4-.2-.5-.2,0-.4,0-.5.2-1.8,4.2-4.5,6.8-7.8,7.9,0,0-1.7.5-3.4,0-1.7-.4-2.8-1.6-2.8-1.6-.1-.1-.4-.2-.5,0-.1.1-.2.4,0,.5,0,0,1.3,1.4,3.1,1.8.6.1,1.1.2,1.7.2Z"/>
                <path d="M14.8,76.7v.6c-.9,3.1,8.1,5.6,10.9,6.3,3.3.8,6.5,1.3,8.7,1.3s3.5-.2,3.9-1.6l.2-.6-.5-.4c-1.5-1.5-4.7-3.9-9.1-7.2l5-19.9c.4,0,.8,0,1.3,0h0c1.5,0,2.6-.3,2.7-.3,17.5-5.1,14.2-36.2,14.1-37.6v-.7c0,0-17.8-4.4-17.8-4.4l-.4.6c-.8,1.1-18.3,27-5.3,39.8,0,0,1.3,1.4,3.4,2.1l-5,19.9c-5,.7-9.6,1.4-11.5,2.1l-.5.2ZM35.1,14.5l14.8,3.7c.1,1.8.4,6.7,0,12.3-2.1-.9-5.2.6-7,1.6h0c-2.9,1.6-7.7,2.1-11.3-.7-3.2-2.5-2.5-5.2-2.5-5.3,0,0,0,0,0,0,2.2-5.5,5-9.9,6-11.5ZM27.6,30c.5,1,1.3,2,2.6,3,2.2,1.8,4.9,2.5,7.4,2.5s4.6-.6,6.3-1.6c0,0,0,0,0,0,0,0,0,0,0,0,2.6-1.5,4.6-1.9,5.2-1.4.3.2.3.7.3,1.2-1.2,8.1-4.4,16.8-12.2,19,0,0-.9.2-2.1.2s-1.3,0-1.9-.2c-2-.5-3.3-1.8-3.3-1.9-5.4-5.3-4.7-13.5-2.3-20.9ZM27.4,76.5c3.1,2.3,6,4.6,7.9,6.1-.2,0-.6,0-.9,0-2.1,0-5.1-.4-8.2-1.2-4.5-1.1-7.4-2.4-8.7-3.3,2.3-.5,6.3-1.1,9.9-1.7Z"/>
                <path d="M30.8,81.3c0,0,.1,0,.2,0s.2,0,.3-.1c.1-.2,0-.4,0-.5l-3.5-2.7c-.2-.1-.4,0-.5,0-.1.2,0,.4,0,.5l3.5,2.7Z"/>
                <path d="M34.5,18.7s0,0,.1,0c.1,0,.3,0,.3-.2,0-.3.7-1.4,1.1-2,.1-.2,0-.4-.1-.5-.2-.1-.4,0-.5.1-.1.2-1,1.7-1.2,2.1,0,.2,0,.4.2.5Z"/>
                <path d="M67.5,54c0-.7-.8-1.3-1.5-1.2-.7,0-1.3.8-1.2,1.5,0,.7.7,1.2,1.3,1.2s.1,0,.2,0c.4,0,.7-.2.9-.5.2-.3.3-.6.3-1ZM66.7,54.5c-.1.1-.2.2-.4.2-.4,0-.7-.2-.7-.5,0-.3.2-.7.6-.7.3,0,.6.2.6.5,0,.2,0,.3-.1.5Z"/>
                <path d="M66.3,49.2h0c0,0,.1,0,.2,0,.7,0,1.3-.8,1.2-1.5,0-.7-.8-1.3-1.5-1.2-.7,0-1.3.8-1.2,1.5,0,.7.7,1.2,1.3,1.2ZM66.3,47.2c.3,0,.6.2.6.5,0,.3-.2.7-.5.7-.4,0-.7-.2-.7-.5,0-.3.2-.7.6-.7Z"/>
                <path d="M60,45c-.4,0-.7.2-.9.5-.2.3-.3.6-.3,1,0,.7.7,1.2,1.3,1.2s.1,0,.2,0c.7,0,1.3-.8,1.2-1.5,0-.7-.8-1.3-1.5-1.2ZM60.3,46.9s0,0,0,0c-.3,0-.6-.2-.6-.5,0-.2,0-.3.1-.5.1-.1.2-.2.5-.2.3,0,.6.2.6.5,0,.3-.2.7-.5.7Z"/>
                <path d="M65.5,62.3c0,0,1.7.7,3.8.7s.1,0,.2,0l2.7,20.3c-4.2,2.4-8.4,4.8-9.9,6.2l-.4.4v.6c.2,1,1,2.2,6.6,2.2s3.9-.1,6-.4c3-.4,5.8-1,7.9-1.8,1.7-.6,3.9-1.6,3.7-3.2v-.6c0,0-.7-.2-.7-.2-2.1-.8-6.5-2.1-11.1-3.4l-2.7-20.4c2.1-.5,3.5-1.6,3.6-1.7,14.4-11.2,0-38.9-.7-40.1l-.3-.7-18.1,2.4-.2.7c-.3,1.3-7.1,31.9,9.7,38.9ZM74.1,90.2c-2,.3-4,.4-5.8.4s-2.8-.1-3.5-.3c2-1.4,5.4-3.3,8.6-5.2,3.7,1,7.3,2,9.6,2.8-1.4.7-4.4,1.7-8.9,2.2ZM73.8,59.4s-1.6,1.2-3.7,1.5c-.3,0-.6,0-.9,0-1.6,0-2.9-.5-2.9-.6-6.8-2.9-9.2-10.5-9.8-18,0-.9.1-1.6.5-1.7.7-.3,2.6.3,5.1,2.2,0,0,0,0,0,0,0,0,0,0,0,0,2,1.5,4.8,2.6,7.8,2.6s4.2-.5,6.1-1.8c1.3-.8,2.2-1.8,2.8-2.7,1.1,7,.4,14.2-5.1,18.5ZM57.7,24.6l15.1-2c.9,1.9,3.5,7.4,5.1,13.8,0,0,0,0,0,0,0,.1.5,3-3.1,5.3-3.9,2.5-8.7,1.4-11.4-.7t0,0c-1.7-1.3-4.8-3.3-7-2.5,0-6.3,1-12,1.4-14Z"/>
                <path d="M77.8,44.6s0,0,0,0c.2,0,.3-.2.3-.4v-.5c0-.2-.2-.3-.4-.3-.2,0-.3.2-.3.4v.5c0,.2.2.3.4.3Z"/>
                <path d="M77.9,46.7c-.2,0-.4.1-.4.3-.2,4.5-1.6,8-4.4,10.2,0,0-1.3,1.1-3.1,1.3-1.7.2-3.2-.5-3.2-.5-.2,0-.4,0-.5.2s0,.4.2.5c0,0,1.2.6,2.8.6s.5,0,.8,0c2-.3,3.4-1.4,3.5-1.5,2.9-2.4,4.4-6,4.6-10.8,0-.2-.1-.4-.3-.4Z"/>
                <path d="M74,87.1l4.3,1.2s0,0,0,0c.2,0,.3-.1.3-.3,0-.2,0-.4-.2-.4l-4.3-1.2c-.2,0-.4,0-.4.2,0,.2,0,.4.2.4Z"/>
                <path d="M58.7,28.7h0c.2,0,.4-.2.3-.4,0-.3.2-1.5.3-2.3,0-.2,0-.4-.3-.4-.2,0-.4,0-.4.3,0,.2-.3,2-.3,2.4,0,.2.2.4.4.4Z"/>
                <path d="M55.4,16.9c.2,0,.3-.1.3-.3l1.2-4.1c0-.2,0-.4-.2-.4-.2,0-.4,0-.4.2l-1.2,4.1c0,.2,0,.4.2.4,0,0,0,0,0,0Z"/>
                <path d="M58.6,19.7s0,0,.1,0l4.7-2.1c.2,0,.3-.3.2-.5,0-.2-.3-.3-.5-.2l-4.7,2.1c-.2,0-.3.3-.2.5,0,.1.2.2.3.2Z"/>
                <path d="M51.3,13.8v-2.7c0-.2-.2-.4-.4-.4s-.4.2-.4.4v2.7c0,.2.2.4.4.4.2,0,.4-.2.4-.4Z"/>
        </svg> */}

        <Image alt='bridnisi icon' width={200} height={300} src="/brindisiIcon.svg" className='brindisiIcon'/>

          <h2 className='text-verdeSalviaDark uppercase text-5xl primary'>Ti aspettiamo!</h2>

      </div>

     
      
      {/* FOOTER */}
      <div className='bg-secondary rounded-t-xl mt-[30px] h-[5vh] w-full flex items-center justify-center'>
      <p className='uppercase text-xs text-verdeSalviaDark secondary'>© 2025 | All Rights Reserved</p>
      </div>
    </main>
  );
}

