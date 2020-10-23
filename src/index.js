import Axios from "axios";
import { drawData } from "./utils/dom";

const render = (url, wrapper) => {
    Axios.get(url).then((response) => {
        drawData(response.data, wrapper)
    });
};
const wrapper = document.getElementById('data');

render('https://rickandmortyapi.com/api/character/365', wrapper);
render('https://rickandmortyapi.com/api/character/429', wrapper);
render('https://rickandmortyapi.com/api/character/513', wrapper);
render('https://rickandmortyapi.com/api/character/664', wrapper);
render('https://rickandmortyapi.com/api/character/615', wrapper);
render('https://rickandmortyapi.com/api/character/329', wrapper);