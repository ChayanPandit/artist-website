
import LegendaryCursor from "legendary-cursor";

const artworkImages = JSON.parse(document.querySelector('#gallery').dataset.images);

window.addEventListener("load", () => {

    LegendaryCursor.init({
        lineSize: 0.1,
        texture1: artworkImages[0],
        texture2: artworkImages[1 % artworkImages.length], 
        texture3: artworkImages[2 % artworkImages.length],
    });

});
