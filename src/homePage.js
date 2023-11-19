import entrance from './dingdong_entrance.jpg';

const homePage = function() {
    let img = new Image();
    img.src = entrance;
    return [img];
};

export {homePage};