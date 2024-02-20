import {
    modalClass
} from "/javascripts/components/modal.js"
import {
    processPayment
} from "/javascripts/components/paymentProcessor"
const modal = new modalClass()


let customerForm = function (product) {
    return ` <form class="customer-details-form" product-id="${product_id}">
                        <input type="text" name="fname" id="firstName" placeholder="First Name" required>
                        <input type="text" name="lname" id="lastName" placeholder="Last Name" required>
                        <input type="email" name="email" id="email" placeholder="Email Address">
                        <button class="btn">Proceed to Payment</button>
                    </form>
                    
        `
}

function formEvent() {
    console.log("Processing Payment");

    document.querySelector(".customer-details-form").addEventListener("submit", (e) => {
        e.preventDefault()
        let firstName = document.getElementById("firstName")
        let lastName = document.getElementById("lastName")
        let email = document.getElementById("email")

        processPayment({
            firstName,
            lastName,
            email
        })
    })
}


let buyButtons = document.querySelectorAll(".product-buy-btn")
buyButtons.forEach(btn => {
    btn.addEventListener("click", async () => {
        try {
            btn.innerText = "..."
            let productId = btn.getAttribute("product-id")
            const response = await fetch(`/products/${productId}`)
            const product = await response.json()
            modal.open(product.name, customerForm(product), formEvent)
        } catch (error) {
            console.error(error);
        }
    })
})