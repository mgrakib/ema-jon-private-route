const addToDB = (id) => {
    
    let storedProduct = getDataFromLocalSotre();
    const quantity = storedProduct[id];
    if (!quantity) {
        storedProduct[id] = 1;
    } else {
        const newQuantity = quantity + 1;
        storedProduct[id] = newQuantity
    }
    localStorage.setItem("product-id", JSON.stringify(storedProduct));
}

const getDataFromLocalSotre = () => {
    let productCart = {};

    const storedProductId = localStorage.getItem('product-id');
    if (storedProductId) {
        productCart = JSON.parse(storedProductId)
    }

    return productCart;
}

export { addToDB, getDataFromLocalSotre };