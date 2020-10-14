const $ = document;

const themeSwitch = $.querySelector('input[type="checkbox"]');
const nav = $.getElementById('nav');
const toggleIcon = $.getElementById('toggle-icon');
const image1 = $.getElementById('image1');
const image2 = $.getElementById('image2');
const image3 = $.getElementById('image3');
const textBox = $.getElementById('text-box');

// Dark or Light  Mode
function darkLightMode(type ,lightBg ,darkBg, icon){
    nav.style.backgroundColor = darkBg
    textBox.style.backgroundColor = lightBg
    image1.src = `img/undraw_proud_coder_${type}.svg`
    image2.src = `img/undraw_feeling_proud_${type}.svg `
    image3.src = `img/undraw_conceptual_idea_${type}.svg`
    toggleIcon.children[0].textContent = type === 'light'? 'Light Mode' : 'Dark Mode'
    toggleIcon.children[1].classList.replace(`fa-${icon}` , `fa-${icon === 'sun' ? 'moon' : 'sun'}` )
};
 

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme' , 'dark')
        darkLightMode('dark' ,'rgb(255 255 255 / 50%)' , 'rgb(0 0 0 / 50%)' , 'sun')
    }else{
        document.documentElement.setAttribute('data-theme','light')
        localStorage.setItem('theme' , 'light')
        darkLightMode('light' , 'rgb(0 0 0 / 50%)' ,'rgb(255 255 255 / 50%)' , 'moon')
    }
}
// event listener
themeSwitch.addEventListener('change',switchTheme);

// check local Storagr for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        themeSwitch.checked = true;
        darkLightMode('dark' ,'rgb(255 255 255 / 50%)' , 'rgb(0 0 0 / 50%)' , 'sun')
    }
}

