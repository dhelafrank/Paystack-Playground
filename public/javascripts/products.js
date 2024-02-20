import {
    modalClass
} from "/javascripts/components/modal.js"
const modal = new modalClass()

let customerForm = ` <form class="customer-details-form">
                        <input type="text" name="fname" id="firstName" placeholder="First Name" required>
                        <input type="text" name="lname" id="lastName" placeholder="Last Name" required>
                        <input type="email" name="email" id="email" placeholder="Email Address">
                        <button class="btn">Proceed to Payment</button>
                    </form>`


let buyButtons = document.querySelectorAll(".product-buy-btn")
buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.open(btn.getAttribute("product-name"), customerForm, () => {})
    })
})