document.addEventListener('DOMContentLoaded', () => {
  

    // Mobile menu toggle
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('menu');
    toggle?.addEventListener('click',()=>{
      menu.classList.toggle('open');
    });

    // Intersection Observer reveal
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target);} });
    },{threshold:.15});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

    // Filters
    const filters = document.querySelectorAll('.filter');
    const projects = document.querySelectorAll('.project');
    filters.forEach(btn=>{
      btn.addEventListener('click',()=>{
        filters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
        const f = btn.dataset.filter;
        projects.forEach(p=>{
          const tags = p.dataset.tags.split(' ');
          const show = f === 'all' || tags.includes(f);
          p.style.display = show ? 'flex' : 'none';
        });
      })
    })

    // Back to top
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll',()=>{
      toTop.style.display = window.scrollY > 500 ? 'inline-flex' : 'none';
    });
    toTop.addEventListener('click',()=>window.scrollTo({top:0, behavior:'smooth'}));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();


// testing animation
const skillCards = document.querySelectorAll('.skill-card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // run once per card
      }
    });
  }, {
    threshold: 0.5 
  });

  skillCards.forEach(card => observer.observe(card));


});