import dirtbikes from './dirtbikes.js'
import { renderBikes } from './render-dirtbikes.js'

const bikeUl = document.getElementById('bike-ul');

for (let bike of dirtbikes) {
    const bikeLi = renderBikes(bike)
    bikeUl.appendChild(bikeLi)
}