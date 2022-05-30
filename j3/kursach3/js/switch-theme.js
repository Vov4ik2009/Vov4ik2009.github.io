function navbarDark(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('navbar-light');
    navbar.classList.remove('bg-light');
    navbar.classList.add('navbar-dark');
    navbar.classList.add('bg-dark');

    document.getElementById("swith-theme").innerText = "Light";
}

function navbarLight(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('navbar-light');
    navbar.classList.add('bg-light');
    navbar.classList.remove('navbar-dark');
    navbar.classList.remove('bg-dark');

    document.getElementById("swith-theme").innerText = "Dark";
}

function switchStyleDark(){
    const navbar = document.querySelector('.container');
    navbar.classList.add('theme-dark');
}

function switchStyleLight(){
    const navbar = document.querySelector('.container');
    navbar.classList.remove('theme-dark');
}

function switchToDark(){
    navbarDark();
    switchStyleDark();
}

function switchToLight(){
    navbarLight();
    switchStyleLight();
}

function switchTheme(){
    const navbar = document.querySelector('.container');
    if(navbar.classList.contains('theme-dark')){
        switchToLight()
    }
    else{
        switchToDark()
    }
}