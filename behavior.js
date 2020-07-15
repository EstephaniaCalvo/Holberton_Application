document.addEventListener("DOMContentLoaded", function(event) {

    // Conditional hight content
    var viewportWidth = window.innerWidth;

    if (viewportWidth > 800) {
        //Article hight
        var article=document.getElementById("article");
        var heightArticle=article.offsetHeight + 120;

        //Main hight
        var mainContent=document.getElementById("main");
        mainContent.style.height=heightArticle+"px";
     };

});