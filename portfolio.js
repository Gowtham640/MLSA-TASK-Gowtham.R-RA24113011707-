document.addEventListener('DOMContentLoaded', () => {
    const about = document.getElementById('about');
    const targetElement1 = document.getElementById('div3');
    const education = document.getElementById('education');
    const targetElement2 = document.getElementById('div6');
    const skills = document.getElementById('skills');
    const targetElement3 = document.getElementById('div4');
    const experience = document.getElementById('experience');
    const targetElement4 = document.getElementById('div5');
    const contact = document.getElementById('contact');
    const targetElement5 = document.getElementById('div8');
    const extracurricular = document.getElementById('extracurricular');
    const targetElement6 = document.getElementById('div8');

    // Add event listeners for smooth scrolling
    about.addEventListener('click', () => {
        targetElement1.scrollIntoView({ behavior: 'smooth' });
    });
    education.addEventListener('click', () => {
        targetElement2.scrollIntoView({ behavior: 'smooth' });
    });
    skills.addEventListener('click', () => {
        targetElement3.scrollIntoView({ behavior: 'smooth' });
    });
    experience.addEventListener('click', () => {
        targetElement4.scrollIntoView({ behavior: 'smooth' });
    });
    contact.addEventListener('click', () => {
        targetElement5.scrollIntoView({ behavior: 'smooth' });
    });
    extracurricular.addEventListener('click', () => {
        targetElement6.scrollIntoView({ behavior: 'smooth' });
    });
});
