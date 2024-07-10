
const parrafo = document.getElementById("text");

parrafo.addEventListener('click', changeColor);

function changeColor(){
    parrafo.style.fontFamily = 'Verdana'
    parrafo.style.color = '#707070';
    parrafo.style.textAlign = 'justify';
}

// const tag_btn = document.getElementById('btn');

// tag_btn.addEventListener('click', function(){
//     console.log('Click')
// });

// // console.log(tag_btn);