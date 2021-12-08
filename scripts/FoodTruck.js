import { addPurchase } from "./database.js"
import { Sales } from "./Sales.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { Entrees } from "./Entrees.js"

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <section>
            <article class="options">
            <h2>Base Dish</h2>
            ${Entrees()}
            </article>
            <article class="options">
            <h2>Vegetables</h2>
            ${Veggies()}
            </article>
            <article class="options">
            <h2>Sides</h2>
            ${Sides()}
            </article>
        </section>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        addPurchase()
    }
})