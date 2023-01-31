let a = document.getElementsByTagName("label")
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", () => {
    if (a[i].style.textDecoration !== "line-through") {
      a[i].style.textDecoration = "line-through"
    } else {
      a[i].style.textDecoration = "none"
    }
  })

}