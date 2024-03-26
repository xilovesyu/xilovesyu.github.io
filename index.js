var scrollToSection = function navigateToSection(id) {
    var section = document.getElementById(id)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
}
