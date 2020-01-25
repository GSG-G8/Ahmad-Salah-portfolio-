
var i = 0;
var txt = 'A creative website and digital experience profiles.'
var speed = 20;
typeWriter()
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const left=document.getElementsByClassName(corner);
left.addEventListener("mouseover", function( event ) {   
  
  alert("dfsdf");
  document.getElementsByid('left-nav').style.csstext("display:flex;")
  
})
