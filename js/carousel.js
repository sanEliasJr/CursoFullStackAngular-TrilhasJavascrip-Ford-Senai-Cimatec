

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    static _sequence
    Image;
    Title;
    Url;
        
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.createDiv();
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
        else{  
            let image = "./img/"+carouselArr[Carousel._sequence].Image;
            let title = carouselArr[Carousel._sequence].Title;
            let urlImage = carouselArr[Carousel._sequence].Url;
            Carousel.CaptureAndSetAtribute(urlImage, title, image)
            Carousel._sequence++
        }
    }

    constructor(img, title, url){
        
        this.Image = img;    
        this.Title = title;
        this.Url = url  
    }

    static CaptureAndSetAtribute(url, title, img){

        let urlCarousel = document.getElementById("carousel").querySelector("a");
        urlCarousel.href = url;
        let slideCarousel = document.getElementById("carousel").querySelector("img")
        let titleCarousel = document.getElementById("carousel-title").querySelector("a");
        slideCarousel.src = img
        slideCarousel.style.height = "46vh";
        slideCarousel.style.display = "block";
        titleCarousel.href = url;
        titleCarousel.innerHTML = title;
        
    }

    static createDiv(){
        let img = document.createElement("img");
        let urlCarousel  = document.createElement("a");
        let urlTitle = document.createElement("a")
        document.getElementById("carousel-title").appendChild(urlTitle);
        urlCarousel.appendChild(img);
        document.getElementById("carousel").appendChild(urlCarousel);
    }   
};



