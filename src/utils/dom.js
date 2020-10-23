import Axios from "axios";

const drawEpisode = (data, name) => {
    const character = document.getElementById(name);
    const span = document.createElement('span');
    span.style.fontSize = '1.2em';
    character.appendChild(span);
    span.innerHTML = data;
};

const getEpisode = (data, name) => {
    Axios.get(data.episode[0]).then((response) => {
        drawEpisode(response.data.name, name)})
};

const createDataElement = (data) => {
    getEpisode(data, data.name);

    return `<div class="container">
    <div id="image">
        <img id="img" src="${data.image}"></img>
    </div>
    
    <div id="${data.name}" class="charInfo">
        <h1>${data.name}</h1>
        <h3><span>${data.status}</span><span> - ${data.species}</span></h3><br>
        <span class="info">Last known location:</span><br>
        <h3><span>${data.location.name}</span></h3><br>
        <span class="info">First seen in:</span><br>
        </div>
    </div>`;
};

export const drawData = (data, wrapper = document.body) => {
    const div = document.createElement('div');
    wrapper.appendChild(div);
    div.innerHTML = createDataElement(data);  
};