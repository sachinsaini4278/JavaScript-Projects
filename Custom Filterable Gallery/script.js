//All images in a 2D array
let image = [ 
              ["img1.jpg","img2.jpg","img3.jpg"], 
              ["img4.jpg","img5.jpg","img6.jpg"],  
              ["img7.jpg","img8.jpg"],   
              ["img9.jpg","img10.jpg","img11.jpg"] 
            ];

// Get Filter Value
document.querySelectorAll(".filter-item").forEach((element, elementIndex) => {
    element.addEventListener("click", () => {      
        //console.log(elementIndex)
        if(elementIndex!=0)
            showImagesFiltered(elementIndex);
        else
            showAllImages();
    });
  });

// Function to show images according to filter selected
function showImagesFiltered(index){
    document.getElementById("gallery-image-container").innerHTML="";
    removeOtherFilterSelectedCSS();
    document.getElementsByClassName("filter-item")[index].classList.add("filter-selected");
    for (let i = 0; i < image[index-1].length; i++) {
        let newElement = document.createElement("div");
        newElement.className = "gallery-item";        
        let imageElement = document.createElement("img");
        imageElement.src="images/" + image[index-1][i];
        newElement.appendChild(imageElement);
        document.getElementById("gallery-image-container").appendChild(newElement);
    }
}

//Function to show all images
function showAllImages(){
    document.getElementById("gallery-image-container").innerHTML="";
    removeOtherFilterSelectedCSS();
    document.getElementsByClassName("filter-item")[0].classList.add("filter-selected");
    
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {                                
            let newElement = document.createElement("div");
            newElement.className = "gallery-item";        
            let imageElement = document.createElement("img");
            imageElement.src="images/" + image[i][j];
            newElement.appendChild(imageElement);
            document.getElementById("gallery-image-container").appendChild(newElement);
        }
    }
}
function removeOtherFilterSelectedCSS(){
    let allFilters = document.getElementsByClassName("filter-item");
    for(let i=0;i<allFilters.length;i++){
        allFilters[i].classList.remove('filter-selected');
    }
    
}
window.onload = showAllImages();