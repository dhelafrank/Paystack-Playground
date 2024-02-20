export async function payWithPaystack(paymentInformation, btn) {
    const {
        key,
        email,
        amount,
        ref,
        label
    } = paymentInformation
    let handler = PaystackPop.setup({
        key,
        email,
        amount,
        ref,
        label,
        onClose: function () {
            alert('Window closed.');
            btn.innerText = "Proceed to Payment"
        },
        callback: function (response) {
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            btn.innerText = "Proceed to Payment"
        }
    });

    handler.openIframe();
}