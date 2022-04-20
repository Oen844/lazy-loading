import { registerImage } from "./lazy";

const maximun = 122;
const minimun = 1;

const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun;


const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement('img');
    image.className = 'mx-auto';
    image.width = '320';
    image.src = `https://randomfox.ca/images/${random()}.jpg`;
    
    container.appendChild(image);

    return container;
};



const mountNode = document.getElementById('images');



const addButton = document.getElementById('add');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

addButton.addEventListener('click', addImage);



