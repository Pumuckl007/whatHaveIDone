var index = 0;
var text = ["You", "Ready", "To", "Get", "Physical?"];
var init = function(){
  if(index < text.length){
    document.getElementById("text").innerHTML = text[index];
    index ++;
    setTimeout(init, 500);
  } else {
    window.location = "https://youtu.be/vWz9VN40nCA";
  }
};
setTimeout(init, 1000);
