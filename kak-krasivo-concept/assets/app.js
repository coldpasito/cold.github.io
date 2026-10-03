const services = {
  manicure: {
    title: 'Комбинированный маникюр + гель-лак',
    description: 'Аккуратная обработка ногтей и кутикулы с однотонным покрытием гель-лаком.',
    image: 'assets/manicure.png',
    alt: 'Яркий розовый маникюр с гель-лаком',
    prices: [['Стажёр', '1 100 ₽'], ['Мастер', '1 400 ₽'], ['Топ-мастер', '1 600 ₽']]
  },
  pedicure: {
    title: 'Комбинированный педикюр + гель-лак',
    description: 'Придание формы ногтям, обработка пальцев и покрытие гель-лаком.',
    image: 'assets/pedicure.png',
    alt: 'Педикюр с нежно-розовым покрытием',
    prices: [['Мастер', '1 500 ₽'], ['Топ-мастер', '1 700 ₽']],
    note: 'Обработка ступни полностью: +300 ₽.'
  },
  french: {
    title: 'Французский маникюр',
    description: 'Классический френч с аккуратной линией улыбки.',
    image: 'assets/french.png',
    alt: 'Французский маникюр с тонкой линией улыбки',
    prices: [['Доплата за френч', '+300 ₽']],
    note: 'Дополнение к выбранной процедуре. Стоимость основной процедуры оплачивается отдельно.'
  }
};

const detailsModal = document.querySelector('#details-modal');
const bookingModal = document.querySelector('#booking-modal');
let currentService = null;
let returnFocus = null;

function openDialog(dialog, trigger) {
  returnFocus = trigger;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}

function closeDialog(dialog) {
  dialog.close();
  document.body.classList.remove('dialog-open');
  returnFocus?.focus();
}

document.querySelectorAll('[data-details]').forEach(button => {
  button.addEventListener('click', () => {
    currentService = button.dataset.details;
    const service = services[currentService];
    document.querySelector('#modal-title').textContent = service.title;
    document.querySelector('#modal-description').textContent = service.description;
    const image = document.querySelector('#modal-photo');
    image.src = service.image;
    image.alt = service.alt;
    const prices = document.querySelector('#modal-prices');
    prices.replaceChildren();
    service.prices.forEach(([label, price]) => {
      const row = document.createElement('div');
      row.className = 'price-row';
      const name = document.createElement('span');
      name.textContent = label;
      const amount = document.createElement('strong');
      amount.textContent = price;
      row.append(name, amount);
      prices.append(row);
    });
    if (service.note) {
      const note = document.createElement('p');
      note.className = 'price-note';
      note.textContent = service.note;
      prices.append(note);
    }
    openDialog(detailsModal, button);
  });
});

function openBooking(serviceKey, trigger) {
  const service = services[serviceKey];
  document.querySelector('#booking-service').textContent = service ? service.title : 'Маникюр и педикюр в студии “Как красиво”.';
  currentService = serviceKey;
  const focusTarget = detailsModal.open ? returnFocus : trigger;
  if (detailsModal.open) detailsModal.close();
  openDialog(bookingModal, focusTarget);
}

document.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', () => openBooking(button.dataset.book || null, button));
});
document.querySelector('[data-modal-book]').addEventListener('click', event => openBooking(currentService, event.currentTarget));
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => closeDialog(button.closest('dialog'))));
for (const dialog of [detailsModal, bookingModal]) {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog.addEventListener('close', () => {
    if (!detailsModal.open && !bookingModal.open) {
      document.body.classList.remove('dialog-open');
      returnFocus?.focus();
    }
  });
}
