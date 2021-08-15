let skills = [...document.getElementsByClassName('skill')];

skills.forEach(skill => {

    let skillBar = skill.querySelector('.skill-bar');

    let skillLevel = skill.getAttribute('level');

    skillBar.style.background = `linear-gradient(90deg, rgba(67, 180, 54, 0.6) ${skillLevel}%, rgba(121, 132, 144, 0.13) 0%)`;
});