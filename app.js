function changeColor(color){
    document.body.style.backgroundColor= color
    let src= './images/'

    const img= document.getElementById("img")
    img.src= src + color + '.png'

    document.body.classList = ""
    if(color == 'blue'){
        document.body.classList.add("blue")
        document.body.style.background= '#7C93C3'
    }
    else if(color == 'black'){
        document.body.classList.add("black")
    }else{
        document.body.classList.add("white")
    }

}