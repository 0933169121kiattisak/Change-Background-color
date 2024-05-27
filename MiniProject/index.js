let colors = ["red", "blue", "green", "orange", "purple", "black","yellow"];
let btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function () {
        let index = parseInt(Math.random() * colors.length);
        // let index = parseInt(Math.random() * colors.length);
        let boxes = document.getElementsByClassName("box");
        for(let j = 0; j < boxes.length; j++) {
            boxes[j].style.background = colors[index];
            // boxes[j].style.background = colors[index];
        }
    });
}