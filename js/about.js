const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false
});

sr.reveal('h3',{delay:200,origin:'left'});
sr.reveal('.about',{delay:400,origin:'right'});

sr.reveal('.main p',{delay:200,origin:'top'});
sr.reveal('h4',{delay:300,origin:'top'});
sr.reveal('.more',{delay:500,origin:'bottom'});

sr.reveal('.caption',{delay:200,origin:'left'});