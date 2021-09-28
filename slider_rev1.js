//target slider-holder 

var sliderHolder = document.getElementById('slider-holder');

//Declare Array
var slides = [
    {
        title: "Jamaica", //h1
        sub: "Text 1", //subtext (h3)
        para: "para 1", //p
        bgColor: "red", //bgColor 
    },

    {
        title: "New York",
        sub: "Text 2",
        para: "para 2",
        bgColor: "green",
    },

    {
        title: "Kuala Lumpur",
        sub: "Text 3",
        para: "para 3",
        bgColor: "blue",
    },

    {
        title: "Otawa",
        sub: "Text 4",
        para: "para 4",
        bgColor: "yellow",
    },
]

sliderHolder.style.width = slides.length *100 +'vw'; //slides.length multiply at 100vw at all. 

for (i==0; i < slides.length; i++) {
    
    var sliderEle = document.createElement('div'); //create div in body

    var sliderTitle = document.createElement('h1'); //create h1 in body
    sliderTitle.innerHTML = sliderItem[i].title; //put title inside html

    var sliderSubTitle = document.createElement('h3'); //create h3
    sliderSubTitle = sliderSubTitle[i].sub; //put subtitle inside html



}