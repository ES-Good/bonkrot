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
        closeModal = document.querySelector('.quiz__modal-close'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('.modal__close'),
        triggers = document.querySelectorAll('.button__trigger'),
        checkbox = document.querySelector('.modal__checkbox'),
        policy = document.querySelector('.modal__policy-label'),
        marker = document.querySelector('.modal__marker');

  policy.addEventListener('click', () => {
    if (checkbox.classList.contains('invalid')) {
      marker.classList.add('modal__true');
    } else {
      marker.classList.remove('modal__true');
    }
  });
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      modal.classList.toggle('modal--visible');
    });
  });
  close.addEventListener('click', () => {
    modal.classList.remove('modal--visible');
  });
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      modal.classList.remove('modal--visible');
    }
  });

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

  // Валидация форм, маски

  $(".formblock__form").validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      formblockName: "required",
      // compound rule
      formblockTel: "required"
    },
    messages: {
      formblockName: "Введите своё имя",
      formblockTel: "Введите телефон"
    }
  });

  $(".footerForm").validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      footerName: "required",
      // compound rule
      footerTel: "required"
    },
    messages: {
      footerName: "Введите своё имя",
      footerTel: "Введите телефон"
    }
  });

  $(".modal__form").validate({
    errorPlacement:function(e,t){"policyCheckbox"==t.attr("name")?e.insertAfter(t.next()):e.insertAfter(t)},
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      modalName: "required",
      policyCheckbox: "required",
      // compound rule
      modalTel: "required"
    },
    messages: {
      policyCheckbox: "Согласитесь с обработкой данных",
      modalName: "Введите своё имя",
      modalTel: "Введите телефон"
    }
  });

  $(".quiz__form--last").validate({
    errorClass: "invalid",
    rules: {
      quizTel: "required"
    },
    messages: {
      quizTel: "Введите телефон"
    }
  });

  $('[type="tel"]').mask('+7 (000) 000-00-00');

});