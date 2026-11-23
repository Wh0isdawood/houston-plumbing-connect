
(function(){
 const cfg=window.SITE_CONFIG||{};
 const phoneLinks=document.querySelectorAll('[data-phone-link]');
 phoneLinks.forEach(a=>{if(cfg.phoneLink){a.href='tel:'+cfg.phoneLink;}else{a.href='contact.html';a.textContent=cfg.phoneDisplay||'Request service';}});
 const form=document.getElementById('leadForm');
 if(form){
  const params=new URLSearchParams(location.search);
  const service=params.get('service');
  const city=params.get('city');
  if(service){const sel=document.getElementById('service');const map={'emergency-plumbing':'Emergency plumbing','drain-cleaning':'Drain cleaning','water-heater-repair':'Water heater repair','leak-detection':'Leak detection','pipe-repair':'Pipe repair','toilet-faucet-repair':'Toilet and faucet repair'};if(map[service])sel.value=map[service];}
  if(city){const field=document.getElementById('city');field.value=city.replaceAll('-',' ').replace(/\b\w/g,c=>c.toUpperCase())+', TX';}
  form.addEventListener('submit',function(e){
   e.preventDefault();
   const status=document.getElementById('formStatus');
   if(!cfg.formEndpoint){status.textContent='Form delivery is not configured yet. Follow SETUP.md to connect a form endpoint before publishing.';status.style.color='#a05a00';return;}
   const data=new FormData(form);
   fetch(cfg.formEndpoint,{method:'POST',body:data,headers:{'Accept':'application/json'}})
    .then(r=>{if(!r.ok)throw new Error('Request failed');return r;})
    .then(()=>{status.textContent='Thanks. Your request has been submitted.';status.style.color='#087d50';form.reset();})
    .catch(()=>{status.textContent='Sorry, the request could not be sent. Please try again later.';status.style.color='#a02020';});
  });
 }
})();
