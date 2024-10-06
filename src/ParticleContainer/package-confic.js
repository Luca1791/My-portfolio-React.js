

const particleConfig = {
    fullScreen: { enable: false, zIndex: 0 },
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "character", // Usa le icone come caratteri
            character: [
                {
                    value: ["\uf3b9"], // Unicode per l'icona di JavaScript (faJs)
                    font: "Font Awesome 5 Brands", // Usa FontAwesome
                    style: "",
                    weight: "400",
                    fill: true,
                },
                {
                    value: ["\uf09b"], // Unicode per l'icona di github
                    font: "Font Awesome 5 Brands", // Usa FontAwesome
                    style: "",
                    weight: "400",
                    fill: true,
                },
                {
                    value: ["\uf13b"], // Unicode per React (faReact)
                    font: "Font Awesome 5 Brands",
                    style: "",
                    weight: "400",
                    fill: true,
                },
                {
                    value: ["\uf41b"], // Unicode per HTML5 (faHtml5)
                    font: "Font Awesome 5 Brands",
                    style: "",
                    weight: "400",
                    fill: true,
                },
                {
                    value: ["\uf38b"], // Unicode per CSS3 (faCss3)
                    font: "Font Awesome 5 Brands",
                    style: "",
                    weight: "400",
                    fill: true,
                },
            ]
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 30,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#95C11F",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: true,
                    force: 60, // Aggiungi un effetto di parallasse alle particelle
                    smooth: 10,
                }
            },
            onclick: {
                enable: true,
                mode: "push" // L'effetto 'repulse' quando clicchi
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 350,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
                color: "#95c11f",
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    retina_detect: true
};

export default particleConfig;
