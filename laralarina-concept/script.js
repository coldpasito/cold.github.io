'use strict';
// Здесь можно поменять тексты и позднее добавить реальные фотографии, цены и описания.
const services = [
  { id: '01', title: 'Название услуги', price: 'Цена услуги', description: 'Место для описания услуги', duration: 'Продолжительность процедуры', audience: 'Место для информации о том, кому подходит процедура' },
  { id: '02', title: 'Название услуги', price: 'Цена услуги', description: 'Место для описания услуги', duration: 'Продолжительность процедуры', audience: 'Место для информации о том, кому подходит процедура' },
  { id: '03', title: 'Название услуги', price: 'Цена услуги', description: 'Место для описания услуги', duration: 'Продолжительность процедуры', audience: 'Место для информации о том, кому подходит процедура' }
];
const grid = document.querySelector('#services-grid');
grid.innerHTML = services.map((service, index) => `
  <article class="service-card">
    <div class="service-image placeholder"><span class="placeholder-index">${service.id} / ФОТО</span><span class="placeholder-center">Место для<br>фотографии</span><span class="placeholder-corner">STUDIO / BEAUTY</span></div>
    <div class="service-info"><span class="service-number">УСЛУГА / ${service.id}</span><h3 class="service-title">${service.title}</h3><div class="service-price">${service.price}</div>
    <div class="service-actions"><button type="button" class="primary-btn" data-book>Записаться <span aria-hidden="true">↗</span></button><button type="button" class="more-btn" data-details="${index}">Подробнее ↗</button></div></div>
  </article>`).join('');
const detailsLayer = document.querySelector('#details-layer');
const bookingLayer = document.querySelector('#booking-layer');
let lastFocused = null;
function openLayer(layer){lastFocused=document.activeElement;layer.classList.add('open');layer.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');(layer.querySelector('.modal-close') || layer.querySelector('[data-book-close]')).focus();}
function closeLayer(layer){layer.classList.remove('open');layer.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');lastFocused?.focus?.();}
function openDetails(index){const service=services[index];if(!service)return;document.querySelector('#modal-index').textContent=`${service.id} / ФОТО`;document.querySelector('#modal-title').textContent=service.title;document.querySelector('.modal-description').textContent=service.description;const specs=document.querySelectorAll('.modal-spec p');specs[0].textContent=service.duration;specs[1].textContent=service.audience;document.querySelector('.modal-bottom strong').textContent=service.price;openLayer(detailsLayer);}
document.addEventListener('click',event=>{
 const details=event.target.closest('[data-details]');if(details){openDetails(Number(details.dataset.details));return;}
 if(event.target.closest('[data-book]')){if(detailsLayer.classList.contains('open'))closeLayer(detailsLayer);openLayer(bookingLayer);return;}
 if(event.target.closest('[data-close]')){closeLayer(detailsLayer);return;}
 if(event.target.closest('[data-book-close]')){closeLayer(bookingLayer);return;}
});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'){if(bookingLayer.classList.contains('open'))closeLayer(bookingLayer);else if(detailsLayer.classList.contains('open'))closeLayer(detailsLayer);}
 if(event.key==='Tab'){
   const layer=bookingLayer.classList.contains('open')?bookingLayer:detailsLayer.classList.contains('open')?detailsLayer:null;
   if(!layer)return;
   const nodes=Array.from(layer.querySelectorAll('button:not([disabled]),a[href]')).filter(el=>el.getClientRects().length);
   if(!nodes.length)return;
   const first=nodes[0],last=nodes[nodes.length-1];
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
 }
});
