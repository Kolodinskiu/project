
$(document).ready(function(){
    $('.carousel_iner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow : '<button type="button" class="slick-prev"> <img src="icons/chevron-left-solid.png"> </button>',
        nextArrow : '<button type="button" class="slick-next"> <img src="icons/chevron-right-solid.png"> </button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }  
            }
        ]
      });

      $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
          .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
          .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
      });

      

      $(".catalog-item_link").each(function(i){
          $(this).on('click',function(e){
              e.preventDefault()
              $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
              $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
            })
        });
        $(".catalog-item_back").each(function(i){
            $(this).on('click',function(e){
                e.preventDefault()
                $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
                $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
              })
          });

          $('[data-modal="consultation"').on('click',function() {
            $('.overlay, #consultation').fadeIn('slow');

          });
          $('.modal_close').on('click',function(){
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
          });
          
          $('.batton_mini').each(function(i){
            $(this).on('click', function(){
              $('#order .modal_descr').text($('.catalog-item_subtitle').eq(i).text());
              $('.overlay, #order').fadeIn('slow');
            })
          });


    });
