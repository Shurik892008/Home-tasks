let textarea = document.getElementById("textarea")

let color = document.getElementsByClassName("color")
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", () => {
        textarea.style.color = color[i].style.backgroundColor
    })
}
document.getElementById("bolder").addEventListener("click", ()=>{
    if(textarea.style.fontWeight !== "bold") {
        textarea.style.fontWeight = "bold"
    }else{
        textarea.style.fontWeight = "normal"
    }
})

document.getElementById("italic").addEventListener("click", ()=>{
    if(textarea.style.fontStyle !== "italic") {
        textarea.style.fontStyle = "italic"
    }else{
        textarea.style.fontStyle = "normal"
    }
})

document.getElementById("underline").addEventListener("click", ()=>{
    if(textarea.style.textDecoration !== "underline") {
        textarea.style.textDecoration = "underline"
    }else{
        textarea.style.textDecoration = "none"
    }
})

document.getElementById("fontSize").addEventListener("change", ()=>{
    textarea.style.fontSize = document.getElementById("fontSize").value + "pt"
})

document.getElementById("fontFamaly").addEventListener("change", ()=>{
    let select = document.getElementById("fontFamaly")
    let text = select.options[select.selectedIndex].text
    textarea.style.fontFamily = `${text}, sans-serif`
})