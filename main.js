//code pour changer le background du header et des liens au scroll grace a la propriété css .active
window.addEventListener('scroll', ()=>{
    //recuperation des elements
    let header = document.querySelector("#header");
    let lien1 = document.querySelector(".lien1");
    let lien2 = document.querySelector(".lien2");
    let lien3 = document.querySelector(".lien3");
    let lien4 = document.querySelector(".lien4");
    let KDA = document.querySelector("#KDA");
    //mise à jour au jour
    header.classList.toggle("active",window.scrollY>0);
    lien1.classList.toggle("active",window.scrollY>0);
    lien2.classList.toggle("active",window.scrollY>0);
    lien3.classList.toggle("active",window.scrollY>0);
    lien4.classList.toggle("active",window.scrollY>0);
    KDA.classList.toggle("activeH1",window.scrollY>0);
})

//code pour animer mon nom
function Animer() {
    document.addEventListener('DOMContentLoaded', function() {
        var animatedText = document.getElementById('ADEK');
        
        function animateText() {
            var originalText = animatedText.innerHTML;
            var newText = originalText.split('').map(function(char) {
                return '<span>' + char + '</span>';
            }).join('');
            animatedText.innerHTML = newText;
            
            var spans = animatedText.querySelectorAll('span');
            spans.forEach(function(span, index) {
                setTimeout(function() {
                    span.style.opacity = '0';
                }, index * 100);
            });
            
            setTimeout(function() {
                spans.forEach(function(span, index) {
                    setTimeout(function() {
                        span.style.opacity = '1';
                    }, index * 100);
                });
            }, 3000);
            
            setTimeout(function() {
                animatedText.innerHTML = originalText;
                setTimeout(animateText, 1000); // Relance l'animation après 1 seconde
            }, 6000);
        }
        
        animateText(); // Lance l'animation la première fois
    });
    
    
}
//code function pour modifier l'affichage du sidebar en fonction du bouton cliqué
function Sidebar() {
    //bouton service 1
    let btnService1 = document.getElementById("btnService1");
    btnService1.addEventListener("click", function(){
        let h5 = document.getElementById("offcanvasWithBothOptionsLabel");
        let SidebarInfo = document.getElementById("SideBarInfo");
        h5.innerText = "Conception de site web";
        SidebarInfo.innerText = "La conception de sites web est un processus créatif et technique visant à créer des expériences en ligne engageantes et fonctionnelles. Elle implique la planification minutieuse de l'architecture et de la disposition visuelle d'un site, ainsi que le développement du code sous-jacent pour assurer son bon fonctionnement. Les concepteurs de sites web doivent considérer l'expérience utilisateur, en veillant à ce que la navigation soit intuitive et que le contenu soit facilement accessible. Ils choisissent des palettes de couleurs, des typographies et des éléments graphiques qui reflètent l'identité de la marque ou du projet. De plus, la conception de sites web nécessite une attention particulière à la compatibilité avec différents appareils et navigateurs, garantissant ainsi une expérience cohérente sur ordinateurs de bureau, tablettes et smartphones. En combinant des compétences artistiques avec une maîtrise technique, les concepteurs de sites web jouent un rôle crucial dans la création de présences en ligne captivantes et mémorables.";
    });

    //bouton service 2
    let btnService2 = document.getElementById("btnService2");
    btnService2.addEventListener("click", function(){
        let h5 = document.getElementById("offcanvasWithBothOptionsLabel");
        let SidebarInfo = document.getElementById("SideBarInfo");
        h5.innerText = "Développement Front-End";
        SidebarInfo.innerText ="Le développement Frontend constitue l'élément visuellement tangible d'un site web. Il se concentre sur la création et la mise en forme de l'interface utilisateur, permettant aux utilisateurs d'interagir de manière fluide avec le contenu. Au cœur du Frontend, on trouve HTML (HyperText Markup Language) et CSS (Cascading Style Sheets). HTML fournit la structure de base de la page, en définissant les éléments tels que les titres, les paragraphes, les listes, et bien plus encore. CSS, quant à lui, est responsable de la mise en page, de la couleur, de la typographie, et des autres aspects visuels du site. Il permet d'apporter une esthétique cohérente et attrayante. En outre, Bootstrap est un framework CSS très répandu qui offre une collection de composants et de styles pré-définis. Il facilite considérablement le processus de création d'interfaces réactives et adaptées aux différents dispositifs. Grâce à ces technologies, un développeur Frontend peut donner vie à des designs créatifs et fonctionnels qui captivent les utilisateurs dès le premier regard.";
    });

    //bouton service 3
    let btnService3 = document.getElementById("btnService3");
    btnService3.addEventListener("click", function(){
        let h5 = document.getElementById("offcanvasWithBothOptionsLabel");
        let SidebarInfo = document.getElementById("SideBarInfo");
        h5.innerText = "Développement Back-End";
        SidebarInfo.innerText = "Le développement backend constitue l'épine dorsale de toute application web, garantissant son bon fonctionnement et sa gestion des données. Parmi les langages et frameworks incontournables, on trouve JavaScript, PHP, Node.js, Python et React. JavaScript, souvent associé au développement front-end, est également utilisé côté serveur grâce à des environnements tels que Node.js. Cette polyvalence en fait un choix puissant pour le développement backend, permettant la création d'applications web dynamiques et réactives. D'autre part, PHP est un langage de script serveur populaire, reconnu pour sa simplicité et sa facilité d'intégration avec des bases de données. Node.js, construit sur le moteur V8 de Google, révolutionne le développement backend en permettant l'exécution de JavaScript côté serveur, favorisant ainsi les applications en temps réel et les API robustes. Python, réputé pour sa simplicité syntaxique, est également largement utilisé en backend, offrant une grande bibliothèque standard et une facilité d'intégration avec divers frameworks. Enfin, React, bien qu'il soit un framework front-end, joue un rôle crucial dans le développement backend grâce à des technologies comme Next.js, facilitant la création de rendus côté serveur et le développement d'applications universelles. En combinant ces outils, les développeurs backend sont en mesure de concevoir des systèmes fiables, sécurisés et performants, capables de gérer des charges de travail importantes."
    });
    
    //bouton service 4
    let btnService4= document.getElementById("btnService4");
    btnService4.addEventListener("click", function(){
        let h5 = document.getElementById("offcanvasWithBothOptionsLabel");
        let SidebarInfo = document.getElementById("SideBarInfo");
        h5.innerText = "Web Design";
        SidebarInfo.innerText = "Le web design est bien plus qu'une simple esthétique visuelle. C'est l'art de créer des expériences en ligne captivantes et fonctionnelles. Il s'agit de combiner harmonieusement la créativité visuelle avec une navigation intuitive, offrant ainsi aux utilisateurs une immersion fluide dans le contenu. Chaque élément, qu'il s'agisse de la disposition, de la typographie, des couleurs ou des images, est soigneusement orchestré pour transmettre un message clair et mémorable. Le web design repose également sur l'adaptabilité, en garantissant que les sites fonctionnent de manière optimale sur une multitude de dispositifs, du bureau au mobile. C'est une fusion d'art et de science, où l'esthétique rencontre la convivialité pour créer des expériences web inoubliables. De la conception d'interfaces épurées à l'optimisation de la performance, le web design façonne la manière dont nous interagissons et nous connectons dans le monde numérique en constante évolution."
    });

    //bouton Service 5
    let btnService5= document.getElementById("btnService5");
    btnService5.addEventListener("click", function(){
        let h5 = document.getElementById("offcanvasWithBothOptionsLabel");
        let SidebarInfo = document.getElementById("SideBarInfo");
        h5.innerText = "Intégration de CMS";
        SidebarInfo.innerText = "L'intégration d'un CMS (Système de Gestion de Contenu) est une étape cruciale dans le processus de création d'un site web dynamique et évolutif. Un CMS offre une plateforme conviviale permettant aux administrateurs de gérer facilement le contenu du site sans nécessiter de connaissances approfondies en programmation. Il simplifie la création, la modification et la publication de contenus tels que textes, images, vidéos et autres médias. Grâce à un CMS bien intégré, les entreprises et les individus peuvent maintenir leur présence en ligne de manière efficace et actualisée, offrant ainsi une expérience utilisateur fluide et attrayante. De plus, l'intégration de plugins et d'extensions permet d'ajouter des fonctionnalités supplémentaires, offrant ainsi une flexibilité inestimable pour répondre aux besoins spécifiques de chaque projet. En somme, l'intégration d'un CMS représente un pilier fondamental pour assurer la gestion et la croissance continues d'un site web moderne."
    });

    // bouton service 6
    let btnService6= document.getElementById("btnService6");
    btnService6.addEventListener("click", function(){
        let h5 = document.getElementById("offcanvasWithBothOptionsLabel");
        let SidebarInfo = document.getElementById("SideBarInfo");
        h5.innerText = "E-commerce";
        SidebarInfo.innerText ="Le développement d'applications web pour le commerce électronique constitue une fusion harmonieuse entre la technologie et le commerce moderne. Ces applications sont conçues pour offrir une expérience d'achat en ligne fluide et intuitive. Le processus de développement implique la création d'une interface utilisateur conviviale, la mise en place de fonctionnalités de navigation aisée, ainsi que l'intégration sécurisée de systèmes de paiement. De plus, les applications e-commerce doivent être hautement évolutives pour répondre à la demande fluctuante, garantissant ainsi une expérience utilisateur optimale, même en période de pics d'activité. L'intégration de fonctionnalités telles que les évaluations et les commentaires des clients, les recommandations de produits et les filtres de recherche avancés, permet d'optimiser la satisfaction client et de favoriser la conversion. En somme, le développement d'applications web pour e-commerce repose sur la création d'une plateforme technologique robuste et innovante qui met en avant les produits ou services, tout en offrant une expérience d'achat en ligne mémorable et sécurisée."
    });
}

//fonctions pour verifier les information saisis

//Nom
function VerifierNom(nom) {
    if(nom.length >= parseInt(3)){
        return true;
    }else{
        //récupération, modification et affichage de PopUp
        const PopUp = document.querySelector(".PopUpContainer");
        const text = document.querySelector(".PopUp p");
        text.innerText = "Le nom est trop court";
        PopUp.classList.add("PopUpActive");
        //pour recharger la page après 3s
        setTimeout(function() {
            location.reload();
          }, 3000);
        return false;
    }
}

//Prénom
function VerifierPrénom(prénom) {
    if(prénom.length >= parseInt(3)){
        return true;
    }else{
        //récupération, modification et affichage de PopUp
        const PopUp = document.querySelector(".PopUpContainer");
        const text = document.querySelector(".PopUp p");
        text.innerText = "Le prénom est trop court";
        PopUp.classList.add("PopUpActive");
        //pour recharger la page après 3s
        setTimeout(function() {
            location.reload();
        }, 3000);
        return false;
    }
}

//Sujet
function VerifierSujet(sujet) {
    if(sujet.length >= parseInt(3)){
        return true;
    }else{
        //récupération, modification et affichage de PopUp
        const PopUp = document.querySelector(".PopUpContainer");
        const text = document.querySelector(".PopUp p");
        text.innerText = "Le Sujet trop court";
        PopUp.classList.add("PopUpActive");
        //pour recharger la page après 3s
        setTimeout(function() {
            location.reload();
        }, 3000);
        return false;
    }
}

//Email
function VerifierEmail(email) {
    let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]");
    if(emailRegex.test(email))
    {
        return true;
    }else{
        //récupération, modification et affichage de PopUp
        const PopUp = document.querySelector(".PopUpContainer");
        const text = document.querySelector(".PopUp p");
        text.innerText = "Format e-mail invalide";
        PopUp.classList.add("PopUpActive");
        //pour recharger la page après 3s
        setTimeout(function() {
            location.reload();
        }, 3000);
        return false;
    }
}

//Message
function VerifierMessage(message) {
    if(message.length >= parseInt(10)){
        return true;
    }else{
        //récupération, modification et affichage de PopUp
        const PopUp = document.querySelector(".PopUpContainer");
        const text = document.querySelector(".PopUp p");
        text.innerText = "Message trop court";
        PopUp.classList.add("PopUpActive");
        //pour recharger la page après 3s
        setTimeout(function() {
            location.reload();
        }, 3000);
        return false;
    }
}
 
//code fonction  pour récupérer les informations du formulaire de contact 
//et envoyer le message
function Contacter() {
    let form = document.querySelector(".formulaire");
    form.addEventListener('submit', function(event){
        event.preventDefault();
        //récupération des informations
        const Nom = document.querySelector("#Input1").value;
        const Prénom = document.querySelector("#Input2").value;
        const Sujet = document.querySelector("#Input3").value;
        const Email = document.querySelector("#Input4").value;
        const Message = document.querySelector("#Textarea1").value;

        //Vérification des informations
        const test1 = VerifierNom(Nom);
        const test2 = VerifierPrénom(Prénom);
        const test3 = VerifierSujet(Sujet);
        const test4 = VerifierEmail(Email);
        const test5 = VerifierMessage(Message);

        //Envoi du mail
        if(test1 && test2 && test3 && test4 && test5){
            const MonEmail = "kosysdevelopmentagency@gmail.com";
            let mailto = `mailto:${MonEmail}?subject=${Sujet} &body=${Message}`
            location.href = mailto
        }
             

    })
}

//fonction pour recharger mon site depuis le serveur si la dernière date de stockage du cache est > 10 min
//fonction que je n'ai jamais appelé mais je le laisse là pour une future mise à jour
function MiseAjourCache() {
    // Vérification du support du stockage local
if (typeof(Storage) !== "undefined") {
    const lastCached = localStorage.getItem('lastCached');
    lastCached.clear();
    localStorage.clear();
}
}

//function pour cacher la vidéo de loading de la page
function CacherLaVideo() {
    // Attendre 5 secondes (5000 millisecondes) après le chargement de la page
    window.addEventListener('DOMContentLoaded', function(){
        setTimeout(function() {
            const VideoContainer = document.querySelector(".laVideoContainer");
            VideoContainer.classList.add("désactiveVideo");
        }, 5000);
    })
}

function ScroolltoTop(){
    window.addEventListener("scroll", function(){
    //afficher le bouton scroll to top lorsque le scroll arrive à un moment
    let btnScrollTop = document.querySelector(".BtnScrollTop");
    btnScrollTop.classList.toggle("btnActive",window.scrollY>400);
    })
}

Animer();
Sidebar();
Contacter();
CacherLaVideo();
ScroolltoTop();




