// Оберігаємо функціональність до завантаження DOM
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.modal-close');
  const anchors = document.querySelectorAll('.serv-nav-item-anchor');

  // Відкриття модального вікна
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const imgSrc = anchor.getAttribute('data-img');
      modal.style.display = 'flex';
      modalImg.src = imgSrc;
    });
  });

  // Закриття модального вікна
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Закриття модального вікна при натисканні поза межами зображення
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
