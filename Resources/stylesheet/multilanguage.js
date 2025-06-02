
 const translations = {
            en: {
                topic: "FULLSTACK DEVELOPER",

                porfolio: "PORFOLIO",
                aboutme: "ABOUT-ME",
                project: "PROJECTS",
                service: "SERVICES",
                
                porfolios: "PORFOLIO",
                aboutmes: "ABOUT-ME",
                projects: "PROJECTS",
                services: "SERVICES",

                s: "Hello, I`m  Okafor Goodluck Chibuike",
                h: "Software developer with a passion of creating",
                o: "interactive and user-friendly Website/Application,",
                r: "to bring your design to life and making them functional",
                t: "and make solutions to your problems.",

                abtme: "About Me"
                
            },

            fr: {
                topic: "DEVELOPPEUR FULLSTACK",

                porfolio: "PORFOLIO",
                aboutme: "A PROPOS DE MOI",
                project: "PROJETS",
                service: "SERVICES",

                porfolios: "PORFOLIO",
                aboutmes: "A PROPOS DE MOI",
                projects: "PROJETS",
                services: "SERVICES",

                s: "Salut, je suis Okafor Chibuike Goodluck",
                h: "Developpeur logiciel passionne par creation",
                o: "Site Web/Application interactif(ve) et facile a utiliser,",
                r: "Donner vie a vos designs et les rendre fonctionnels",
                t: "Et creer des solutions a vos problemes",

                abtme: "A propos de me"
                
            }
        };



        let currentLanguage = "en";


        function setLanguage(lang){
            currentLanguage = lang;

            document.getElementById("h2").textContent = translations[lang].topic;

            document.getElementById("porfolio").textContent = translations[lang].porfolio;
            document.getElementById("about-me").textContent = translations[lang].aboutme;
            document.getElementById("project").textContent = translations[lang].project;
            document.getElementById("service").textContent = translations[lang].service;

            document.getElementById("porfolios").textContent = translations[lang].porfolios;
            document.getElementById("about-mes").textContent = translations[lang].aboutmes;
            document.getElementById("projects").textContent = translations[lang].projects;
            document.getElementById("services").textContent = translations[lang].services;

            document.getElementById("s").textContent = translations[lang].s;
            document.getElementById("h").textContent = translations[lang].h;
            document.getElementById("o").textContent = translations[lang].o;
            document.getElementById("r").textContent = translations[lang].r;
            document.getElementById("t").textContent = translations[lang].t;

            document.getElementById("abtme").textContent = translations[lang].abtme;
            
            
            
            
        }