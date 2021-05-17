let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".codegram-logos img")
    max = images.length; 
  


function nextImage(){ //função que chama a próxima imagem
    images[currentImageIndex].classList.remove('selected')    
    currentImageIndex++  
    if(currentImageIndex >= max)
        currentImageIndex = 0
        images[currentImageIndex].classList.add('selected')   
}  

function start(){ 
    setInterval(()=>{
        nextImage()
    }, time)
}

window.addEventListener("load", start)