window.addEventListener('DOMContentLoaded', () => {

  $('.variable-width').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  const more = document.querySelector('.internet__more'),
        cards = document.querySelectorAll('.internet__card--none'),
        closeModal = document.querySelector('.quiz__modal-close');

  more.addEventListener('click', () => {
    cards.forEach(card => {
      card.classList.toggle('internet__card--none');
      if (!card.classList.contains('internet__card--none')) {
        more.textContent = 'Скрыть';
      } else {
        more.textContent = 'Показать ещё...';
      }
    });
  });

  closeModal.addEventListener('click', () => {
    closeModal.parentElement.parentElement.classList.toggle('quiz__modal--hidden');
  });

});