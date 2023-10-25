let invoice = {
    name: "Marcos",
    age: 33,
    products: {
        0: ["Mouse 2xwm", 29.90],
        1: ["Teclado Mecânico", 129.90],
        2: ["Monitor", "899.70"]
    },
    taxex: "98.90"
}

generateInvoice(invoice);


function generateInvoice (invoice) {
    console.log(`Nome do comprador: ${invoice.name}`),
    console.log(`Idade: ${invoice.age}`),
    console.log("-----------")

    for (let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index];
        console.log(`- ${productName}: R$${productPrice}`)
    }
}