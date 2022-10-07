// Chef specified max price (budget) able to spend per fish
// TODO for of loop to iterate through sortedFish
// TODO if statement to check price of fish

// Chef buys 50% of monger's inventory that is below budget price point
//? how to check? Maybe in if statement or as an else statement

// ? How to find out which fish meets criteria in order to make meals for menu?

// Chef then creates 3 different meals per fish 
// TODO Will need an array for created meals

//! HTML Structure should look like this
/* <h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article> */




const { mongerInventory } = require("./fishMonger.js")
const sortedFish = mongerInventory(8.00)

const fishOnMenuArray = []

const fishMenu = (budget) => {
    let HTMLMenu = ""
// console.log(sortedFish)
    for (const fish of sortedFish) {
        if (fish.price <= budget) {
            fish.amount / 2

            fishOnMenuArray.push(fish)

            // TODO string interpolation, but not sure how or where
            // TODO give budget an amount
        }
    }
    for (const fish of fishOnMenuArray) {
        HTMLMenu += ` <h1>Menu</h1>
            <article class="menu">
                <h2>${fish.species}</h2>
                <section class="menu__item">${fish.species} Soup</section>
                <section class="menu__item">${fish.species} Sandwich</section>
                <section class="menu__item">Grilled ${fish.species}</section>
            </article>`
    }
    // return fishOnMenuArray



    return HTMLMenu
}
module.exports = { fishMenu }