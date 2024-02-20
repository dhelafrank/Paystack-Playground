import {payWithPaystack} from "./paystack.js"
export async function processPayment(paymentDetails) {
    const customerDetails = {
        firstName: paymentDetails.firstName,
        lastName: paymentDetails.lastName,
        email: paymentDetails.email
    }
    const {
        productId
    } = paymentDetails

    const {
        btn
    } = paymentDetails

    try {
        btn.innerText = "Processing..."

        const response = await fetch("/payment/pay", {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({
                customerDetails,
                productId
            })
        })
        const data = await response.json()
        
        await(payWithPaystack(data, btn))
    } catch (error) {
        console.log(error)
        btn.innerText = "Proceed to Payment"
    }
}
