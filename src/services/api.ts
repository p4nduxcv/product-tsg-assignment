const getAllProducts = async () => {
    try {
        const response = await fetch(`https://dummyjson.com/products`);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};