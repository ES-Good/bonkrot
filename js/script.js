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
        cards = document.querySelectorAll('.internet__card--none');

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

});