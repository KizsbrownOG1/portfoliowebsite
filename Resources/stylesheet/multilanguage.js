
 const translations = {
            en: {
                porfolio: "PORFOLIO",
                aboutme: "ABOUT-ME",
                project: "PROJECTS",
                service: "SERVICES",
                
                porfolios: "PORFOLIO",
                aboutmes: "ABOUT-ME",
                projects: "PROJECTS",
                services: "SERVICES",

                greeting: "FULLSTACK DEVELOPER"
                
            },

            fr: {
                porfolio: "PORFOLIO",
                aboutme: "A PROPOS DE MOI",
                project: "PROJETS",
                service: "SERVICES",

                porfolios: "PORFOLIO",
                aboutmes: "A PROPOS DE MOI",
                projects: "PROJETS",
                services: "SERVICES",

                greeting: "DEVELOPPEUR FULLSTACK"
            },
        };



        let currentLanguage = "en";


        function setLanguage(lang){
            currentLanguage = lang;

            document.getElementById("porfolio").textContent = translations[lang].porfolio;
            document.getElementById("about-me").textContent = translations[lang].aboutme;
            document.getElementById("project").textContent = translations[lang].project;
            document.getElementById("service").textContent = translations[lang].service;
            document.getElementById("porfolios").textContent = translations[lang].porfolios;
            document.getElementById("about-mes").textContent = translations[lang].aboutmes;
            document.getElementById("projects").textContent = translations[lang].projects;
            document.getElementById("services").textContent = translations[lang].services;
            // document.getElementById("farewell").textContent = translations[lang].farewell;
            document.getElementById("h2").textContent = translations[lang].greeting;
            
        }