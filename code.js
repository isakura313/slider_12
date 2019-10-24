let root = document.getElementById('root');
let arrow_left = document.querySelector('.arrow-left');
let arrow_right = document.querySelector('.arrow-right');

let arr = [1,2,3];

let i = 1;
root.style.backgroundImage = `url('img/${i}.jpeg')`;
function changePhotoRight(){
    ++i;
    root.style.backgroundImage = `url('img/${i}.jpeg')`;
    if(i == 3){
        i = 0;
    }
}
function changePhotoLeft(){
    if(i == 1 ){
        i = 4;
    }
    --i;
    root.style.backgroundImage = `url('img/${i}.jpeg')`;
}




arrow_right.addEventListener('click', changePhotoRight);
arrow_left.addEventListener('click', changePhotoLeft);
