
(() => {
 const toggle=document.querySelector('.nav__toggle'), menu=document.querySelector('.nav__menu');
 if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
 const search=document.querySelector('#projectSearch'), industry=document.querySelector('#industryFilter'), rows=[...document.querySelectorAll('[data-project-row]')];
 const filter=()=>{const q=(search?.value||'').toLowerCase(), i=industry?.value||'';rows.forEach(r=>{r.hidden=!(r.innerText.toLowerCase().includes(q)&&(!i||r.dataset.industry===i));});};
 search?.addEventListener('input',filter);industry?.addEventListener('change',filter);
 document.querySelectorAll('[data-download-placeholder]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();alert('File PDF belum disertakan pada materi website sumber. Tambahkan URL file Company Profile/Brochure pada atribut href setelah file tersedia.');}));
 const form=document.querySelector('#contactForm');form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const body=`${d.get('message')}%0D%0A%0D%0A${d.get('name')} (${d.get('email')})`;location.href=`mailto:marketing@nbn.co.id?subject=${encodeURIComponent('Website inquiry - NBN')}&body=${encodeURIComponent(decodeURIComponent(body))}`;});
})();
