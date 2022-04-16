import css from './css/styles.css';

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const message = document.querySelector('.tooltext');

btn.addEventListener('click', () => {
    //Save the hex code
    let hexColorCode = '#';

    //Iterate 6 times for produce 6 digits
    for (let i = 0; i < 6; i++) {
        //Save every random integer that getRandomNumber() produces
        //Every randon number is the index of an element in hex array
        hexColorCode += hex[getRandomNumber()];
    }
    //Update DOM
    //Change color tag number and bg color
    color.textContent = hexColorCode;
    document.body.style.backgroundColor = hexColorCode;
});

//Generate a random integer between 0 and 15
const getRandomNumber = () => Math.round(Math.random() * (hex.length - 1));

color.addEventListener('click', () => {
    //Copy hex code to clipboard
    navigator.clipboard.writeText(color.textContent);

    //Display message
    message.style.visibility = 'visible';
    message.style.opacity = 1;

    //Hidden message after 1seg
    setTimeout(() => {
        message.style.visibility = 'hidden';
        message.style.opacity = 0;
    }, 1000);
    
});
