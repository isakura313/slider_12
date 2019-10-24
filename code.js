let root = document.getElementById('root');
let arrow_left = document.querySelector('.arrow-left');
let arrow_right = document.querySelector('.arrow-right');



let i = 1;
root.style.backgroundImage = `url('img/${i}.jpeg')`;
function changePhoto(){
    ++i;
    root.style.backgroundImage = `url('img/${i}.jpeg')`;
    if(i == 3){
        i = 0;
    }
}

arrow_right.addEventListener('click', changePhoto);
