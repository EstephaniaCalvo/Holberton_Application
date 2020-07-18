document.addEventListener("DOMContentLoaded", function(event) {
    //Adjust content height to article height if window width is greater than 800px

    var viewportWidth;
    var heightArticle;
    var mainContent;

    function heightContent() {
        // Conditional hight content
        viewportWidth = window.innerWidth;
        mainContent=document.getElementById("main");

        if (viewportWidth > 800) {
            //Article hight
            var article=document.getElementById("article");
            heightArticle=article.offsetHeight + 120;

            //Main hight
            mainContent.style.height=heightArticle+"px";
        } else{
            mainContent.style.height="fit-content"
        };
    };

    heightContent();
    
    window.addEventListener("resize", function (){
        heightContent();
    });   



    // // Slideshow
    // var slideIndex = 0;
    // // showSlides();
    // function showSlides() {
    //     var i;
    //     var slides = document.getElementsByClassName("image_holder");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";  
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {slideIndex = 1}    
    //     slides[slideIndex-1].style.display = "block";  
    //     setTimeout(showSlides, 3000);
    // };

    // var tabs=document.getElementsByClassName("tab")
    // var tab1=tabs[0]
    // tab1.addEventListener("mouseover", function(){
    //     showSlides();
    // });

    

    // var slideIndex = 0;
    // showSlides();

    // function showSlides() {
    //     var i;
    //     var slides = document.getElementsByClassName("image_holder");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";  
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {slideIndex = 1}    
    //     slides[slideIndex-1].style.display = "block";  
    //     setTimeout(showSlides, 3000);
    // }

});