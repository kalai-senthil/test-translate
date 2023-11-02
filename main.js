const btn = document.querySelector("button")
const inp = document.querySelector("input")
const card = document.querySelector(".card")
btn.addEventListener("click", (e) => {
    const newNode = document.createElement("p")
    newNode.append(document.createTextNode(inp.value))
    card.append(newNode)
})