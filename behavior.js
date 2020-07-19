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
            heightArticle=article.offsetHeight+150;

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


    // Expand image

    // var imageList;
    // var imageContainer;
    // var gallery;
    // var button;
    // var image;

    // imageList=document.getElementsByClassName("small");
    // imageContainer=document.getElementsByClassName("image_container")
    // gallery=document.getElementsByClassName("gallery")
    
    // var index;

    // var i;
    // for (i = 0; i < imageList.length; i++) {

    //     imageList[i].addEventListener("mouseover", function(){
    //         index=i;
    //         console.log(index)
    //     });
        
    // };

    

    // var i;
    // for (i = 0; i < imageList.length; i++) {
    //     button=imageContainer[i].getElementsByTagName("i");
    //     image=imageList[i];

    //     button[0].addEventListener("click", function(){
    //         if (image.className == "") {
    //             image.className = "small";
    //         } else{
    //             image.className = "";
    //         };
    //         console.log(image.className)
    //     });
    // };
    
    
    
    // var i;
    // for (i = 0; i < imageList.length; i++) {
    //     imageList[i].addEventListener("mouseover", function(){
    //         imageList[i].id="smart_thumbnail"
    //         thumbnailElement = document.getElementById("smart_thumbnail");
    //         thumbnailElement.addEventListener("click", function() {
    //             if (thumbnailElement.className == "") {
    //                 thumbnailElement.className = "small";
    //             } else{
    //                 thumbnailElement.className = "";
    //             };
    //         });
    //     });
    // };

    

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