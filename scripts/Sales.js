import { getPurchases, getEntrees, getSides, getVeggies } from "./database.js"


export const Sales = () => {
    const sales = getPurchases()
    return `
    <ul>
    ${sales.map(
        (sale) => {
            // Reflect: What is the scope of this `return` keyword?
            return buildOrderListItem(sale)
        }
        ).join("")}
        </ul>
        `
    }
    
    const buildOrderListItem = (order) => { 
        const entrees = getEntrees()
        const sides = getSides()
        const veggies = getVeggies()
        const foundEntree = entrees.find(entree => entree.id === order.entreeId)   
        const foundSide = sides.find(side => side.id === order.sideId)    
        const foundVeggie = veggies.find(veggie => veggie.id === order.veggieId) 
        const total = foundEntree.price + foundSide.price + foundVeggie.price
    
        return `<li>
            Receipt #${order.id} = ${total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}
        </li>`
    }