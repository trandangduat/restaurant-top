import comsuat from './comsuat1.png';
import pepsi from './pepsichanh.png'

const titles = [];
const sections = [];
const titlesName = ['foods', 'drinks'];

const foodsName = ['Com suat', 'Com rang', 'Spaghetti', 'Bun dau', 'Bun cha'];
const foodsPrice = ['30.000', '25.000', '30.000', '35.000', '25.000'];
const foodsImage = [comsuat, ];

const drinksName = ['Tra chanh', 'Tra dao', 'Pepsi', 'Coca', 'Tra thai xanh', 'Tra thai do', 'Milo'];
const drinksPrice = ['10.000', '15.000', '10.000', '10.000', '15.000', '15.000', '10.000'];
const drinksImage = [pepsi,];


const numberOfFoods = foodsName.length;
const numberOfDrinks = drinksName.length;

const menuPage = function () {
    for (let i = 0; i < titlesName.length; i++) {
        let Section = document.createElement('div');
        Section.setAttribute("id", "section");
        let Title = document.createElement('h1');
        Title.textContent = titlesName[i]; 
        sections.push(Section);
        titles.push(Title);
    }
    sections[0].appendChild(titles[0]);
    for (let i = 0; i < numberOfFoods; i++) {
        sections[0].insertAdjacentHTML("beforeend", `
            <div id = "food-card">
                <div id = "image"><img src = "${foodsImage}" title = "${foodsImage[i]}"></div>
                <div id = "info">
                    <div id = "name">${foodsName[i]}</div>
                    <div id = "price">${foodsPrice[i]}</div>
                </div>
            </div>
        `);
    }
    sections[1].appendChild(titles[1]);
    for (let i = 0; i < numberOfDrinks; i++) {
        sections[1].insertAdjacentHTML("beforeend", `
            <div id = "drink-card">
                <div id = "image"><img src = "${drinksImage}" title = "${drinksImage[i]}"></div>
                <div id = "info">
                    <div id = "name">${drinksName[i]}</div>
                    <div id = "price">${drinksPrice[i]}</div>
                </div>
            </div>
        `);
    }
    return Array.from(sections);
};

export { menuPage };