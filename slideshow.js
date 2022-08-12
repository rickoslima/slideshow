'use strict';

const images = [
    { 'id': '1', 'url':'./img/TEAMOMENSAGEM.gif' },
    { 'id': '2', 'url':'./img/efdc0883-4e60-4d0f-bfb0-a118fe3078ff.jpg' },
    { 'id': '3', 'url':'./img/WhatsApp Image 2020-03-10 at 13.59.43 (1).jpeg' },
    { 'id': '4', 'url':'./img/WhatsApp Image 2020-03-10 at 13.59.43 (2).jpeg' },
    { 'id': '5', 'url':'./img/WhatsApp Image 2020-03-10 at 13.59.43 (3).jpeg' },
    { 'id': '6', 'url':'./img/WhatsApp Image 2020-03-10 at 13.59.43.jpeg' },
    { 'id': '7', 'url':'./img/WhatsApp Image 2020-03-10 at 13.59.44 (3).jpeg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);