import { dirtbikes } from './dirtbikes.js';

export function renderBikes(bike) {
    const bikeLi = document.createElement('li');
    const bikeh3 = document.createElement('h3');
    bikeh3.textContent = dirtbikes.name;

    const bikeImg = document.createElement('img');
    bikeImg.src = './assets/${dirtbikes.name}';
    bikeImg.alt = dirtbikes.name;

    const bikeSpan = docuument.createElement('span');
    bikeSpan.textContent = dirtbikes.price;

    const button = document.createElement('button');
    button.textContent = 'Buy now';

    bikeLi.appendChild(bikeh3);
    bikeLi.appendChild(bikeImg);
    bikeLi.appendChild(bikeSpan);
    bikeLi.appendChild(button);
    return bikeLi

}