import { films } from './data/films.js'
let sortfilms = films.sort((a,b) => parseFloat(a.episode_id)-parseFloat(b.episode_id))

console.log (sortfilms)

const mainElement = document.querySelector('#main')

let filmlist = document.getElementById('filmlist')

console.log (filmlist)

for (let i = 0; i < sortfilms.length; i++) {
    
    let container = document.createElement('div')
    container.className = "container"
    let titletext = document.createElement('p')
    titletext.className = "title"
    titletext.innerText = sortfilms[i].title
    let filmid = films[i]['episode_id']
    let image = document.createElement('img')
    image.src = `/data/Images/${filmid}.jpg`
    let figcaption = document.createElement('figcaption')

    container.appendChild(titletext)
    container.appendChild(image)
    filmlist.appendChild(container)
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    return url.charAt(end - 1)
}
