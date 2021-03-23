const IMAGE = document.querySelectorAll("img");
const SIZES = {
    showcase: "100vw",  //img datatype showcase is 100% of viewwidth
    reason: "(max-width: 799px) 100vw, 372px", //if viewport is under 800px then it is 100% of viewwidth, else it is 372px
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
}
//an object to hold the different image sizes

//have it loop through the images and set the iamge sizes and will generate the correct URLs for the images and pass it back down to the loop
function makeSrcSet(imgSrc){
    let markup = [];
    let width = 400;
    //loop will run 5 times for the number image sizes we are creating
    for (let i = 0; i < 5; i++){
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width+=400; //each new picture size increases by 400; adding 400 to width
    }
    return markup.join();
}


for (let i=0; i < IMAGE.length; i++){
    let imgSrc = IMAGE[i].getAttribute("src");
    imgSrc = imgSrc.slice(0,-8); //this will take off the last 8 digits from the imgSrc--for these images because they were all marked up the same that is the added -800.jpg; look up .slice at https://goo.gl/wcgjZ3; this means that I can write a script that adds on the correct size later
    let srcset = makeSrcSet(imgSrc);
    IMAGE[i].setAttribute("srcset", srcset); //populate the images with the srcset values, grabs the current image and gives it the attribute srcset with the current srcset value
    console.log(srcset);

    //another bit of information that we need for the image
    let type = IMAGE[i].getAttribute("data-type");
    //grabbing type data type to pull out the correct property for sizes
    let sizes = SIZES[type];
        //cannot use the . notation, it would look for type in sizes, so need to use the bracket notation to pass type to sizes
    IMAGE[i].setAttribute("sizes", sizes);  //populate Images with the sizes
    console.log(sizes);
}

