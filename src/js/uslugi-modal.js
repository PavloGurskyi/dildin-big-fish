const anchors = document.querySelectorAll('.serv-nav-item-anchor');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.modal-close');

anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Зупинити перехід по посиланню
    const imgSrc = this.getAttribute('data-img'); // Беремо адресу картинки

    // Створюємо новий об'єкт Image
    const img = new Image();

    // Додаємо обробник події завантаження
    img.onload = function () {
      modalImg.src = imgSrc; // Встановлюємо src зображення для модалки
      modal.style.display = 'block'; // Відкриваємо модалку після завантаження картинки
    };

    img.onerror = function () {
      console.error('Помилка завантаження зображення');
    };

    // Встановлюємо шлях до картинки в src об'єкта Image для її завантаження
    img.src = imgSrc;
  });
});

closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Закривати модалку при кліку поза картинкою
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
