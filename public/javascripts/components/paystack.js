import {
    modalClass
} from "./modal.js";
const modal = new modalClass


export async function payWithPaystack(paymentInformation, btn) {
    const {
        key,
        email,
        amount,
        ref,
        label,
        currency
    } = paymentInformation
    let handler = PaystackPop.setup({
        key,
        email,
        amount,
        ref,
        label,
        currency,
        onClose: function () {
            btn.innerText = "Payment Cancelled"
            modal.close()
            setTimeout(() => {
                modal.open("Payment Cancelled", `<p class="splash">Go back to pay again</p>`, () => {})
            }, 1000)

        },
        callback: function (response) {
            btn.innerText = "Proceed to Payment"
            decideVerification(response.reference)
        }
    });

    handler.openIframe();
}

async function decideVerification(ref) {
    try {
        const response = await fetch("/payment/verify", {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({
                ref
            })
        })
        const data = await response.json()
        console.log(data);

        
        modal.close()
        if (data.status == true) {
            setTimeout(() => {
                modal.open("Payment Succesful", `<p class="splash">Payment complete!</p>`, () => {})
            }, 500)
        } else {
            setTimeout(() => {
                modal.open("Verification Error", `<p class="splash">Payment could not be verified</p>`, () => {})
            }, 500)
        }
    } catch (error) {
        console.error(error)
    }
}