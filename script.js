var q=document.getElementById("q");
if(q){q.addEventListener("submit",function(e){e.preventDefault();
var m="Hello PressForward Tech Hub. Name: "+q.n.value+". Service: "+q.s.value+". Details: "+q.d.value;
window.open("https://wa.me/254115694343?text="+encodeURIComponent(m),"_blank")})}
