import {
    modalClass
} from "/javascripts/components/modal.js"
import {
    processPayment
} from "/javascripts/components/paymentProcessor.js"
const modal = new modalClass()


let customerForm = function (product) {
    return ` <form class="customer-details-form" product-id="${product._id}">
                        <input type="text" name="fname" id="firstName" placeholder="First Name" required>
                        <input type="text" name="lname" id="lastName" placeholder="Last Name" required>
                        <input type="email" name="email" id="email" placeholder="Email Address">
                        <button class="btn payment-process-btn">Proceed to Payment</button>
                    </form>
                    
        `
}

function formEvent() {
    document.querySelector(".customer-details-form").addEventListener("submit", (e) => {
        e.preventDefault()
        let firstName = document.getElementById("firstName").value
        let lastName = document.getElementById("lastName").value
        let email = document.getElementById("email").value

        processPayment({
            firstName,
            lastName,
            email,
            productId: e.target.getAttribute("product-id"),
            btn:document.querySelector(".payment-process-btn")
        })
    })
}


let buyButtons = document.querySelectorAll(".product-buy-btn")
buyButtons.forEach(btn => {
    btn.addEventListener("click", async () => {
        try {
            btn.innerText = "..." //TODO: Replace with animation in the future
            let productId = btn.getAttribute("product-id")
            const response = await fetch(`/products/${productId}`)
            const product = await response.json()
            modal.open(product.name, customerForm(product), formEvent)
            btn.innerText = "Buy"
        } catch (error) {
            console.error(error);
            btn.innerText = "Buy"
        }
    })
})