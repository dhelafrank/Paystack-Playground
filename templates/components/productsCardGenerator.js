module.exports = async (productArray) => {
    let html = ``
    for (const product of productArray) {
        let cardElement = `<div class="product-card">
                    <h3>${product.name}</h3>
                    <div>
                        <p>${product.currencySymbol}${product.price}</p>

                        <button class="btn product-buy-btn" product-id="${product._id}">Buy</button>
                    </div>
                </div>`

        html += cardElement
    }

    return html

}