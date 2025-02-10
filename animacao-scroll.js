const observerH1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observerCertificados = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-dois');
        } else {
            entry.target.classList.remove('show-dois');
        }
    });
});

const observerSkills = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-tres');
        } else {
            entry.target.classList.remove('show-tres');
        }
    });
});

const observerProje = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-quatro');
        } else {
            entry.target.classList.remove('show-quatro');
        }
    });
});

const proje = document.querySelectorAll('.proje');
const h1 = document.querySelectorAll('h1');
const certificados = document.querySelectorAll('.img-certificado');
const skills = document.querySelectorAll('.skills');

h1.forEach((element) => observerH1.observe(element));
certificados.forEach((element) => observerCertificados.observe(element));
skills.forEach((element) => observerSkills.observe(element));
proje.forEach((element) => observerProje.observe(element));
