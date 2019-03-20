$(document).ready(function(){


  // $('.owl-carousel').owlCarousel();

  $('.c-service__image--faq').hover(function() {
    $(this).siblings('.c-service__faq').show();
  }, function() {
    $(this).siblings('.c-service__faq').hide();
  });

  $('.c-service__image--top').hover(function() {
    $(this).find('.default-text').hide();
    $(this).find('.hover-text').removeClass('hover-text--hidden');
    $(this).find('.hover-text').show();
  }, function() {
    $(this).find('.hover-text').hide();
    $(this).find('.default-text').show();
  });

  $(".c-form__input--phone").mask("+7 (999) 99-99-99");

  $("#sliderSwitch:checked").data("chk",true);

  $('#sliderSwitch').click(function() {
        $("input[name='"+$(this).attr("name")+"']:radio").not(this).removeData("chk");
        $(this).data("chk",!$(this).data("chk"));
        $(this).prop("checked",$(this).data("chk"));
    });

  $('.c-form__radio-btn--default').click(function(){
    $('.c-form__radio-btn--default').not(this).prop('checked', false);
  });

  if(window.matchMedia('(max-width: 768px)').matches)
  {
    $('.c-form__input--label').attr('for','sliderSwitch');
  } else {
    $('.c-form__input--label').attr('for','c-form__radio-btn--default');
  }

  $( window ).resize(function() {

     if(window.matchMedia('(max-width: 768px)').matches)
     {
       $('.c-form__input--label').attr('for','sliderSwitch');
     } else {
       $('.c-form__input--label').attr('for','c-form__radio-btn--default');
     }

   });

});
