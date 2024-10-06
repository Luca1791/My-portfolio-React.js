import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const abautAnimations = () => {
    
        // gsap.fromTo('.AbautAnimate', 
        //     { opacity: 0, y: 50 }, 
        //     {
        //         opacity: 1,
        //         y: 0,
        //         duration: 5,
        //         ease: "power1.inOut",
        //         scrollTrigger: {
        //             trigger: '.AbautAnimate',
        //             start: 'top 80%',
        //             end: 'top 50%',
        //             scrub: 3
        //         }
        //     }
        // );

        // gsap.fromTo('.introduction', 
        //     { opacity: 0, x: -200 }, // Inizia fuori dallo schermo a sinistra
        //     {
        //         opacity: 1,
        //         x: 0, // Torna alla posizione normale
        //         duration: 5,
        //         ease: "power2.out",
        //         scrollTrigger: {
        //             trigger: '.introduction',
        //             start: 'top 90%',
        //             end: 'top 60%',
        //             scrub: 3
        //         }
        //     }
        // );

        // Creazione della timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.AbautAnimate', // Trigger comune per tutte le animazioni
                start: 'top 80%',
                end: 'top 50%',
                scrub: 2,
                toggleActions: "play reverse play reverse"
            }
        });
        // Animazione per il titolo (titleAbaut)
        tl.fromTo('.AbautAnimate',
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 3, ease: "power1.inOut" }
        );
    
        // Animazione per la descrizione (descriptionAbaut) che entra da sinistra
        tl.fromTo('.introduction',
            { opacity: 0, x: -200 },  // Inizia fuori dallo schermo a sinistra
            { opacity: 1, x: 0, duration: 4, ease: "power2.out" },
            '+=3' // Inizia 2 secondi prima che la prima animazione finisca
        );

};


// Funzione per l'effetto di reveal del testo
// export const textReveal = (element) => {
//     gsap.fromTo(element, 
//         { y: '100%' },  // Il testo inizia nascosto fuori dall'area visibile
//         { y: '0%', duration: 1.5, ease: 'power4.out' }  // Scorre verso la posizione finale
//     );
// };