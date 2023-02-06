setTimeout(function () {
    $('.loader_bg').fadeToggle();
}, 1800);

$(document).ready(function () {
    $('.body').hide().delay(1800).fadeIn('slow');
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('loaderOwl'),
    path: './Assets/loader.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('logo'),
    path: './Assets/logo.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('character'),
    path: './Assets/character.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('hello'),
    path: './Assets/hello.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});


