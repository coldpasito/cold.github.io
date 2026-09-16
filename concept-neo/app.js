const services = [
  { id:'sculptural', image:'assets/service-sculptural.jpg', title:'Скульптурный массаж лица', category:'Массаж лица', shortDescription:'Деликатная комплексная проработка лица, шеи и зоны декольте.', fullDescription:'Проработка зоны декольте, шеи, головы и лица, детальная проработка зоны по запросу, очищение кожи до и после сеанса, увлажнение кожи в конце процедуры.', suitableFor:['для знакомства со скульптурным массажем лица','когда хочется уделить внимание лицу, шее и декольте','для спокойного персонального сеанса','для тех, кто ценит деликатный уход'], duration:'55 минут', price:'от 3 490 ₽', includes:['Проработка декольте, шеи, головы и лица','Детальная работа с зоной по запросу','Очищение кожи до и после сеанса','Увлажнение кожи в конце процедуры'] },
  { id:'sculptural-buccal', image:'assets/service-buccal.jpg', title:'Скульптурный + Буккальный массаж лица', category:'Массаж лица', shortDescription:'Комплексная работа с лицом и особым вниманием к нижней трети.', fullDescription:'Проработка зоны декольте, шеи, проработка буккально нижней трети лица, детальная работа с зажимами нижней трети лица, очищение кожи до и после сеанса, увлажнение кожи в конце процедуры.', suitableFor:['для тех, кому интересна буккальная техника','когда хочется сфокусироваться на нижней трети лица','для ценителей детальной проработки','для комфортного ритуала ухода за лицом'], duration:'55 минут', price:'от 3 490 ₽', includes:['Проработка зоны декольте и шеи','Буккальная проработка нижней трети лица','Детальная работа с зажимами нижней трети','Очищение и увлажнение кожи'] },
  { id:'intro', image:'assets/service-intro.jpg', title:'Скульптурный массаж лица, знакомство со студией', category:'Массаж лица', shortDescription:'Первое знакомство с атмосферой NEO и комплексным массажем лица.', fullDescription:'Проработка зоны декольте, шеи, головы и лица, детальная проработка зоны по запросу, очищение кожи до и после сеанса, увлажнение кожи в конце процедуры.', suitableFor:['для первого визита в NEO','для знакомства с форматом скульптурного массажа','когда хочется выбрать процедуру без спешки','для тех, кому важен индивидуальный подход'], duration:'55 минут', price:'2 690 ₽', includes:['Проработка декольте, шеи, головы и лица','Детальная работа с зоной по запросу','Очищение кожи до и после сеанса','Увлажнение кожи в конце процедуры'] },
  { id:'sculptural-buccal-extended', image:'assets/service-buccal-plus.jpg', title:'Скульптурный + буккальный массаж лица', category:'Массаж лица', shortDescription:'Расширенный формат скульптурной и буккальной работы для лица.', fullDescription:'Проработка зоны декольте, шеи, головы и лица, детальная проработка зоны по запросу, проработка буккально нижней трети лица, очищение кожи до и после сеанса, увлажнение кожи в конце процедуры.', suitableFor:['для тех, кто выбирает расширенный формат сеанса','когда хочется совместить скульптурную и буккальную техники','для внимательной работы с лицом, шеей и декольте','для неторопливого ритуала ухода'], duration:'1 час 25 минут', price:'от 4 790 ₽', includes:['Проработка декольте, шеи, головы и лица','Работа с зоной по запросу','Буккальная проработка нижней трети','Очищение и увлажнение кожи'] },
  { id:'guasha', image:'assets/service-guasha.jpg', title:'Гуаша массаж лица', category:'Массаж лица', shortDescription:'Массаж лица с использованием специального скребка гуаша.', fullDescription:'Китайская техника массажа, которая предполагает использование специального скребка для воздействия на кожу и подкожные ткани. Техника направлена на улучшение кровообращения, лимфодренажа, стимуляцию обменных процессов и омоложение кожи. Очищение кожи до и после сеанса, увлажнение кожи в конце процедуры.', suitableFor:['для тех, кому интересна техника гуаша','когда хочется попробовать массаж со специальным скребком','для включения в персональный ритуал ухода','для спокойного сеанса с вниманием к лицу'], duration:'55 минут', price:'3 490 ₽', includes:['Массаж с использованием скребка гуаша','Проработка лица в технике гуаша','Очищение кожи до и после сеанса','Увлажнение кожи в конце процедуры'] },
  { id:'shreksi', image:'assets/service-shreksi.jpg', title:'«Как стать шрекси?»', category:'Комбо', shortDescription:'Комбо-процедура с массажем лица, альгинатной маской и уходом.', fullDescription:'Программа посещения: скульптурный + буккальный массаж лица — 55 минут; альгинатная маска по типу кожи — 25 минут; дополнительный уход по типу кожи.', suitableFor:['для тех, кто хочет выделить время на комплексный уход','когда хочется объединить массаж и уходовые этапы','для неторопливого формата посещения','для знакомства с комбо-программой NEO'], duration:'1 час 20 минут', price:'от 4 290 ₽', includes:['Скульптурный + буккальный массаж лица — 55 минут','Альгинатная маска по типу кожи — 25 минут','Дополнительный уход по типу кожи'] }
];

const grid = document.querySelector('#servicesGrid');
grid.innerHTML = services.map((service, index) => `
  <article class="service-card reveal" aria-labelledby="service-${service.id}">
    <div class="service-card__image"><img src="${service.image}" alt="${service.title}" width="1600" height="1600" loading="lazy" /><span class="service-card__index">0${index + 1}</span></div>
    <div class="service-card__body">
      <p class="service-card__category">${service.category}</p>
      <h3 id="service-${service.id}">${service.title}</h3>
      <p class="service-card__description">${service.shortDescription}</p>
      <div class="service-card__meta"><span>${service.duration}</span><strong>${service.price}</strong></div>
      <div class="service-card__actions"><button type="button" class="card-button" data-detail="${service.id}">Подробнее</button><button type="button" class="card-button card-button--book">Записаться</button></div>
    </div>
  </article>`).join('');

const modal = document.querySelector('#serviceModal');
const panel = modal.querySelector('.detail-panel');
const modalContent = document.querySelector('#modalContent');
const modalCta = document.querySelector('#modalCta');
const closeModal = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
const openModal = (service) => {
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
  modalContent.scrollTop=0;
  void panel.offsetWidth;
  modalContent.innerHTML = `
    <div class="detail-hero"><img src="${service.image}" alt="${service.title}" width="1600" height="1600" decoding="async" /><div class="detail-hero__copy"><p class="detail-category">${service.category}</p><h2 id="modalTitle">${service.title}</h2></div></div>
    <div class="detail-body"><p class="detail-intro">${service.shortDescription}</p>
      <section class="detail-section"><h3>Для кого подходит</h3><ul>${service.suitableFor.map(point=>`<li>${point}</li>`).join('')}</ul></section>
      <section class="detail-section"><h3>Как проходит сеанс</h3><p>${service.fullDescription}</p></section>
      <section class="detail-section"><h3>Что входит</h3><ul>${service.includes.map(item=>`<li>${item}</li>`).join('')}</ul></section>
      <div class="detail-facts"><div><span>Продолжительность</span><strong>${service.duration}</strong></div><div><span>Стоимость</span><strong>${service.price}</strong></div></div>
    </div>`;
  modalCta.innerHTML = `<p><strong>${service.duration}</strong>${service.price}</p><button class="button button--solid" type="button" aria-label="Концептуальная кнопка записи">Записаться на массаж <span aria-hidden="true">↗</span></button>`;
  requestAnimationFrame(()=>{ modalContent.scrollTop=0; panel.focus(); });
};
document.addEventListener('click', event => { const button=event.target.closest('[data-detail]'); if(button) openModal(services.find(item=>item.id===button.dataset.detail)); });
modal.querySelector('.modal__backdrop').addEventListener('click',closeModal); modal.querySelector('.detail-panel__close').addEventListener('click',closeModal);
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&modal.classList.contains('is-open'))closeModal();});
const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('scroll',()=>document.querySelector('.site-header').classList.toggle('is-scrolled',scrollY>24),{passive:true});
