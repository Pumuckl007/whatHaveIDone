var index = 0;
var text = ["You", "Ready", "To", "Get", "Physical?"];
var increment = 0;
var nextSpeed = 1;
var init = function(){
  if(index < text.length){
    document.getElementById("text").innerHTML = text[index];
    index ++;
    setTimeout(init, 500);
  } else {
    window.video = document.getElementById("video");
    document.getElementById("text").hidden = true;
    video.style.display = "block";
    video.width = window.innerHeight*(480/360);
    video.style.marginLeft=(window.innerWidth-window.innerHeight*(480/360))/2 + "px";
    video.play();
    video.loop = true;
    nextSpeed = Math.random()*2.5+0.5;
    increment = (nextSpeed-video.playbackRate)/100;
    setTimeout(update, 10);
  }
};
var update = function(){
  if(video.playbackRate > nextSpeed-0.2 && video.playbackRate < nextSpeed+0.2){
    nextSpeed = Math.floor(Math.random()*3)/2+0.5;
    increment = (nextSpeed-video.playbackRate)/100;
  } else {
    video.playbackRate += increment;
  }
  setTimeout(update, 10);
}
setTimeout(init, 1000);
