(()=>{
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const hdr=$('#hdr'), burger=$('#burger'); let last=0, tick=false;
const closeMenu=()=>{hdr.classList.remove('open');burger.setAttribute('aria-expanded','false');document.body.style.overflow=''};
burger.addEventListener('click',()=>{const o=hdr.classList.toggle('open');burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
$$('#links a').forEach(a=>a.addEventListener('click',closeMenu));
addEventListener('keydown',e=>{if(e.key==='Escape'&&hdr.classList.contains('open')){closeMenu();burger.focus()}});
addEventListener('scroll',()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{const y=scrollY;
  if(!hdr.classList.contains('open')&&!hdr.contains(document.activeElement))hdr.classList.toggle('hide',y>last&&y>500);
  last=y;tick=false})},{passive:true});
hdr.addEventListener('focusin',()=>hdr.classList.remove('hide'));
})();
