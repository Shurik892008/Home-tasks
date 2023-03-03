$("#bolder").click(text)
function text(){
    if ($("#textarea").css("font-weight")==="700"){
        $("#textarea").css("font-weight", "normal")
    }else{
        $("#textarea").css("font-weight", "bold")
    }
}


$("#italic").click(text1)
function text1(){
    if ($("#textarea").css("font-style")==="italic"){
        $("#textarea").css("font-style", "normal")
    }else{
        $("#textarea").css("font-style", "italic")
    }
}

$("#underline").click(text2)
function text2(){
    if ($("#textarea").css("text-decoration")==="underline solid rgb(0, 0, 0)"){
        $("#textarea").css("text-decoration", "none")
    }else{
        $("#textarea").css("text-decoration", "underline")
    }
}

/* document.getElementById("underline").addEventListener("click", () => {
    if (textarea.style.textDecoration !== "underline") {
      textarea.style.textDecoration = "underline";
    } else {
      textarea.style.textDecoration = "none";
    }
  }); */

  document.getElementById("fontSize").addEventListener("change", () => {
    textarea.style.fontSize = document.getElementById("fontSize").value + "pt";
  });

  document.getElementById("fontFamaly").addEventListener("change", () => {
    let select = document.getElementById("fontFamaly");
    let text = select.options[select.selectedIndex].text;
    textarea.style.fontFamily = `${text}, sans-serif`;
  });

  let color = document.getElementsByClassName("color");
for (let i = 0; i < color.length; i++) {
  color[i].addEventListener("click", () => {
    textarea.style.color = color[i].style.backgroundColor;
  });
}

$("#left").click(text3)
function text3(){
$("#textarea").css("text-align", "left")
}

$("#center").click(text4)
function text4(){
$("#textarea").css("text-align", "center")
}

$("#right").click(text5)
function text5(){
$("#textarea").css("text-align", "right")
}

$("#width").click(text6)
function text6(){
$("#textarea").css("text-align", "justify")
}

/* $("#color").click(text6)
function text6(){
$("#textarea").css("backgroung", "color")
} */

	/* $('#color').change(text6)
    function text6(){
		$('#textarea').css('backgroundColor', '#EEF');
	} */

  function changeBG() {
    var selectedBGColor = document.getElementById("color").value;
    textarea.style.backgroundColor = selectedBGColor;
  }

 

  