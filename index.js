var scrollToSection = function navigateToSection(id) {
    var section = document.getElementById(id)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            //拿到指定元素的class，并修改class
            document.querySelector('.page-nav-space-holder').setAttribute('class', 'page-nav-space-holder');
        } else {
            document.querySelector('.page-nav-space-holder').setAttribute('class', 'page-nav-space-holder hidden');
        }
    });
}, { threshold: 0 });

const myElement = document.querySelector('.header');
observer.observe(myElement);