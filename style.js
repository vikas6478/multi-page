function zoomin(a){
    let image = document.querySelector(`#image${a}`);
    console.log(image);
    image.style.scale = "1.2";
    image.style.transition = "scale 0.5s";
    console.log(image);
}
function initial(a){
    let image = document.querySelector(`#image${a}`);
    image.style.scale = "1";
    image.style.transition = "scale 0.5s";
    // console.log(image);
}