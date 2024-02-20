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
            modal.close()
            modal.open("Payment Succesful", `<p class="splash">Payment complete! Reference: ${response.reference}</p>`, () => {})
        }
    });

    handler.openIframe();
}