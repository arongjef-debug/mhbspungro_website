
// Mobile nav toggle
(function(){
  const hamb = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  if(hamb && nav){
    hamb.addEventListener('click', ()=> nav.classList.toggle('show'));
  }
})();

// Slider
(function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let idx = 0, timer = null;
  function show(i){
    slides.forEach(s=> s.classList.remove('active'));
    slides[i].classList.add('active');
  }
  function nextSlide(){ idx = (idx+1) % slides.length; show(idx); }
  function prevSlide(){ idx = (idx-1 + slides.length) % slides.length; show(idx); }
  if(next) next.addEventListener('click', ()=>{ nextSlide(); reset(); });
  if(prev) prev.addEventListener('click', ()=>{ prevSlide(); reset(); });
  function start(){ timer = setInterval(nextSlide, 4500); }
  function reset(){ clearInterval(timer); start(); }
  if(slides.length){ show(0); start(); }
})();

// Reveal on scroll
(function(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }})
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();

// Smooth scroll for anchors
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=> a.addEventListener('click', function(e){
    e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if(target) target.scrollIntoView({behavior:'smooth'});
  }));
})();
