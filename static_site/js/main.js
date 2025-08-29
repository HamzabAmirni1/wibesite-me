// Minimal JS for sidebar toggle and simple client-side navigation
document.addEventListener('DOMContentLoaded',function(){
  const btn=document.querySelector('.mobile-btn');
  const sidebar=document.querySelector('.sidebar');
  if(btn && sidebar){
    btn.addEventListener('click',()=>sidebar.classList.toggle('open'));
  }
  // simple anchor highlighting
  document.querySelectorAll('.sidebar a').forEach(a=>{
    if(location.pathname.endsWith(a.getAttribute('href'))||location.pathname.endsWith('index.html')&&a.getAttribute('href')==='index.html'){
      a.classList.add('active');
    }
  });
});
