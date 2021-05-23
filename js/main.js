// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
        
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";};

  // show and hidden menue
function myMenue(){
  var menue = document.getElementById("show");
  if(menue.style.display === "none"){
    menue.style.display = "block";
  } else{
    menue.style.display = "none";
  }
}

//button open
function show(){
  var showLayer = document.getElementById("overlay").style.display = "block";
  var showConnect= document.getElementById("connect").style.display = "block";
}
// button exit
  function exit(){
    var exitLayer = document.getElementById("overlay").style.display = "none";
    var exitConnect = document.getElementById("connect").style.display = "none";
  }
function showBlog(){
   document.getElementById("bloger").style.display = "block";
    document.getElementById("overlay").style.display = "block";

}
  function exitBlog(){
    document.getElementById("bloger").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
 