const changeH1 = () =>{
    const headerOne = document.getElementById("name")
    headerOne.innerText = "New Name"
}

const changeBackground = () =>{
    const background = document.body
    background.style.background = "hsla(158, 90%, 95%, 0.7)"
}

const changeAddress = () =>{
    const address = document.getElementById("address")
    address.innerHTML = "123 Elf Road <br>North Pole <br>"
    address.classList.add("red")
}

const addClassToLinks = () =>{
    const links = document.getElementsByClassName("link")
    for (let link of links) link.classList.add("red")
}

const changeVisibility = () =>{
    const productImage = document.getElementsByTagName("img")
    for (let img of productImage) img.classList.toggle("hidden")
}

// const price = document.querySelectorAll("price") //returns object
const random255 = () =>{
    return Math.round(Math.random() * 255)
}

const generateRandomColor = () =>{
    const red = random255()
    const green = random255()
    const blue = random255()

    return `rgb(${red}, ${green}, ${blue}`
}

const changeColor = () =>{
//     const price = document.querySelectorAll(".price") //returns object
//     const colorArray = ["green", "red", "lightgreen", "black", "yellow", "coral"]
//     const randomIndex = Math.ceil(Math.random() * 6)
//     // console.log(randomIndex)
//     // console.log(typeof price[0])
//     for (let i = 0; i <= price.length - 1; i++) price[i].style.color = colorArray[randomIndex]
    const priceNodes = document.getElementsByClassName("price")
    const randomColor = generateRandomColor()
    for(priceNode of priceNodes) {
        priceNode.style.color = randomColor
    }
}
