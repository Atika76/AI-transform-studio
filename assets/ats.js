
(async function(){
  let cfg = { brand:"AI Transform Studio", gumroad_url:"", basic_path:"", pro_path:"", extra_path:"", form_url:"" };
  try{ const r=await fetch('assets/ats-config.json',{cache:'no-store'}); if(r.ok){ cfg=await r.json(); } }catch(e){}
  const setLink=(id,base,extra)=>{ const el=document.getElementById(id); if(!el) return;
    if(!base){ el.href="#"; el.addEventListener('click',ev=>{ev.preventDefault(); alert('Állítsd be a Gumroad linket az assets/ats-config.json fájlban.');}); return;}
    el.href=base+(extra||""); el.target="_blank"; el.rel="noopener"; };
  ['ats-buy-basic','ats-buy-pro','ats-buy-extra','nav-buy'].forEach(id=>{
    const extra=id==='ats-buy-basic'?cfg.basic_path:id==='ats-buy-pro'?cfg.pro_path:id==='ats-buy-extra'?cfg.extra_path:"";
    setLink(id,cfg.gumroad_url,extra);
  });
  const init=(slider)=>{
    const afterSrc=slider.getAttribute('data-after'); const overlay=slider.querySelector('.ats-overlay');
    const afterImg=new Image(); afterImg.src=afterSrc; afterImg.alt='After'; overlay.insertBefore(afterImg, overlay.firstChild);
    const handle=slider.querySelector('.ats-handle'); let active=false;
    const setPos=(x)=>{ const r=slider.getBoundingClientRect(); let t=(x-r.left)/r.width; t=Math.max(0,Math.min(1,t));
      overlay.style.width=(t*100)+'%'; handle.style.left=(t*100)+'%'; };
    slider.addEventListener('pointerdown',e=>{active=true; setPos(e.clientX);});
    window.addEventListener('pointerup',()=>active=false);
    window.addEventListener('pointermove',e=>{if(active) setPos(e.clientX);});
    const r=slider.getBoundingClientRect(); setPos(r.left+r.width/2);
  };
  document.querySelectorAll('.ats-slider').forEach(init);
})();
