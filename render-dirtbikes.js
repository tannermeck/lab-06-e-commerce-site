export function renderBikes(bike) {
    const bikeLi = document.createElement('li');
    const bikeh3 = document.createElement('h3');
    bikeh3.textContent = bike.name;

    const bikeImg = document.createElement('img');
    bikeImg.src = `./assets/${bike.name}.jpeg`;
    bikeImg.alt = bike.name;

    const bikeSpan = document.createElement('span');
    bikeSpan.textContent = bike.price;

    const button = document.createElement('button');
    button.textContent = 'Buy now';

    bikeLi.appendChild(bikeh3);
    bikeLi.appendChild(bikeImg);
    bikeLi.appendChild(bikeSpan);
    bikeLi.appendChild(button);
    
    return bikeLi
}