//Set variables
var startButton = document.getElementById("start-button");
var name;

//Get user's name
startButton.addEventListener("click", function(){
  //Get the value of name or set default
  name = document.getElementById("name").value || "no-name";
  //Show the name in a message on the next slide
  o1.innerHTML = "Hello, " + name + "!"
  //Hide this slide
  document.getElementById("slide-1").style.display = "none";
  //Show the next slide
  document.getElementById("slide-2").style.display = "block";
});


//Slide 2 reasoning
b1.addEventListener("click", function(){
  //Hide this slide
  document.getElementById("slide-2").style.display = "none";
  //Show the next slide
  document.getElementById("slide-3").style.display = "block";
  //Show the name in the final message
  o2.innerHTML = "You've made the right choice for our community and our planet, " + name + "!"
});

b2.addEventListener("click", function(){
  //Hide this slide
  document.getElementById("slide-2").style.display = "none";
  //Show the next slide
  document.getElementById("slide-4").style.display = "block";
});


//Slide 3 reasoning (final slide)
reload.addEventListener("click", function(){
  window.location.reload();
});


//Slide 4 reasoning
b3.addEventListener("click", function(){
  //Hide this slide
  document.getElementById("slide-4").style.display = "none";
  //Show the next slide
  document.getElementById("slide-3").style.display = "block";
  //Show the name in the final message
  o2.innerHTML = "You've made the right choice for our community and our planet, " + name + "!"
});

b4.addEventListener("click", function(){
  //Hide this slide
  document.getElementById("slide-4").style.display = "none";
  //Show the next slide
  document.getElementById("slide-5").style.display = "block";
});
