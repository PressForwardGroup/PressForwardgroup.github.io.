var q=document.getElementById("q");
if(q){q.addEventListener("submit",function(e){e.preventDefault();
var m="Hello PressForward Tech Hub. Name: "+q.n.value+". Service: "+q.s.value+". Details: "+q.d.value;
window.open("https://wa.me/254115694343?text="+encodeURIComponent(m),"_blank")})}
var mb=document.querySelector(".menu"),nv=document.getElementById("nv");
if(mb&&nv){mb.addEventListener("click",function(){var o=nv.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
nv.addEventListener("click",function(e){if(e.target.closest("a")){nv.classList.remove("open");mb.setAttribute("aria-expanded","false")}})}
