const changeH1 = () =>{
    const headerOne = document.getElementById("name")
    headerOne.innerText = "New Name"
}

const changeBackground = () =>{
    const background = document.body
    background.style.background = "blue"
}

const changeAddress = () =>{
    const address = document.getElementById("address")
    address.innerHTML = "123 Elf Road <br>North Pole <br>"
}

const addClassToLinks = () =>{
    const links = document.getElementsByClassName("link")
    for (let link of links) link.classList.add("red")
}

const changeVisibility = () =>{
    const productImage = document.getElementsByTagName=("img")
    for (let img of productImage) img.classList.toggle("hidden")
}

// const price = document.querySelectorAll("price") //returns object

const changeColor = () =>{
    const price = document.querySelectorAll(".price") //returns object
    const colorArray = ["green", "red", "blue", "black", "yellow", "coral"]
    const randomIndex = Math.ceil(Math.random() * 6)
    // console.log(randomIndex)
    // console.log(typeof price[0])
    for (let i = 0; i <= price.length - 1; i++) price[i].style.color = colorArray[randomIndex]
}
