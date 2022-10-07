// using a for of loop, iterate through the array of fish
// show that maximum budget (.price) is $5.00  or less per fish
// Quantity (.amount) should be exactly 10

//
const { boatInventory } =require("./fishingBoat.js")
const fishArray = boatInventory()

let mongerBudget = 7.50

const mongerInventory = (mongerBudget) => {
    const sortedFish = []

    for (const fish of fishArray) {
        fish.amount = 10

        if (fish.price <= mongerBudget) {

            sortedFish.push(fish)
            

        }
    }
    return sortedFish
}



module.exports = { mongerInventory }