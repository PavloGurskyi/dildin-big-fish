const anchors = document.querySelectorAll('.serv-nav-item-anchor'); const modal
= document.getElementById('modal'); const modalImg =
document.getElementById('modal-img'); const closeModal =
document.querySelector('.modal-close');

anchors.forEach(anchor => { anchor.addEventListener('click', function(e) {
e.preventDefault(); // зупинити перехід по посиланню const imgSrc =
this.getAttribute('data-img'); // беремо адресу картинки modal.style.display =
'block'; modalImg.src = imgSrc; }); });

closeModal.addEventListener('click', function() { modal.style.display = 'none';
});

// закривати модалку при кліку поза картинкою modal.addEventListener('click',
function(e) { if (e.target === modal) { modal.style.display = 'none'; } });
