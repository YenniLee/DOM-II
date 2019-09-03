// Your code goes here
const header = document.querySelector('.main-navigation');
const navlinks = document.querySelector('a');
const body = document.querySelector('body');
const footer = document.querySelector('.footer p');
const signMeUp = document.querySelectorAll('.btn');
const funBusBanner = document.querySelector(".intro > img" );


header.addEventListener('mouseover', e => {
    header.style.backgroundColor = '#add8e6';
})

header.addEventListener('mouseleave', e => {
    header.style.backgroundColor = 'white';
})

navlinks.addEventListener('focus', e => {
    navlinks.style.color = 'green';
  })

funBusBanner.addEventListener('drag', e => {      funBusBanner.style.transform = 'scale(0.8)'});

window.addEventListener('load', e => {
alert('Fully Loaded!');
e.preventDefault();
});

window.addEventListener('wheel', e => body.style.backgroundColor = '#FFFFE0')

body.addEventListener('click', e => {
    body.style.backgroundColor = 'pink';
})

window.addEventListener('resize', e => {
    alert('Woah, Woah, Woah!')
    event.stopPropagation();
})

for(let i = 0; i < signMeUp.length; i++)
signMeUp[i].addEventListener('dblclick', e => {
    alert('Vacation Time!')
})

footer.addEventListener('mouseenter', e => {  event.target.style.backgroundColor = '#add8e6'
})
