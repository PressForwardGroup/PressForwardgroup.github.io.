var q=document.getElementById("q");
if(q){q.addEventListener("submit",function(e){e.preventDefault();
var m="Hello PressForward Tech Hub. Name: "+q.n.value+". Service: "+q.s.value+". Details: "+q.d.value;
window.open("https://wa.me/254115694343?text="+encodeURIComponent(m),"_blank")})}
var mb=document.querySelector(".menu"),nv=document.getElementById("nv");
if(mb&&nv){mb.addEventListener("click",function(){var o=nv.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
nv.addEventListener("click",function(e){if(e.target.closest("a")){nv.classList.remove("open");mb.setAttribute("aria-expanded","false")}})}
(function(){var r=document.documentElement,K="pf-theme",w=document.querySelector(".nav .wrap");
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function save(v){try{localStorage.setItem(K,v)}catch(e){}}
var sun='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
var moon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
var b=document.createElement("button");b.className="theme";b.type="button";
function apply(t){r.setAttribute("data-theme",t);b.innerHTML=t==="light"?moon:sun;
b.setAttribute("aria-label",t==="light"?"Switch to dark mode":"Switch to light mode")}
apply(get()==="light"?"light":"dark");
b.addEventListener("click",function(){var t=r.getAttribute("data-theme")==="light"?"dark":"light";apply(t);save(t)});
if(w)w.appendChild(b)})();
(function(){
var a=document.createElement("a");a.className="wa-float";a.href="https://wa.me/254115694343?text=Hello%20PressForward%20Tech%20Hub";a.target="_blank";a.rel="noopener";a.setAttribute("aria-label","Chat on WhatsApp");
a.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1.5-4.5A8 8 0 1 1 8.5 18.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .7a4 4 0 0 1-1.7-1.7l.7-1-1-2z" fill="#fff" stroke="none"/></svg>';
document.body.appendChild(a);
if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".card,.steps>div,.proof>div,.two>*,.ph1 h1").forEach(function(el){if(el.getBoundingClientRect().top<innerHeight)return;el.classList.add("reveal");io.observe(el)});
})();
