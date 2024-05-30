let products = {

    data: [
        {
            productName: "regular white T-shirt",
            category: "Topwear",
            price: "30",
            image: "img/white t-shirt.jpeg"
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "img/short-skirt.jpeg"
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "img/smart-watch.jpeg"
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "img/knitted-top.jpeg"
        },

        {
            productName: "Black Leather jacket",
            category: "Jacket",
            price: "129",
            image: "img/jacket.jpeg"
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "129",
            image: "img/pink-trouser.jpeg"
        },
        {
            productName: "Brown Men's jacket",
            category: "Jacket",
            price: "189",
            image: "img/brown-jacket.jpeg"
        },
        {
            productName: "compfy Gray pants",
            category: "Bottomwear",
            price: "49",
            image: "img/comfy-pants.jpeg"
        },
    ]
}


for (let i of products.data) {
    // create card

    let card = document.createElement("div");
    //card should have category
    card.classList.add("card", "i.category");
    //image div

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("product").appendChild(card)

    let cont = document.createElement("div");
    cont.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    cont.appendChild(name);
    //price
    let price = document.createElement()

}