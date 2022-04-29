/*toTop*/

  const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll",() => {

    if (window.pageYOffset > 100) {      
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
     }
    });

  // $(document).ready(function(){

  //   $search = $('.fa-search');
  //   $searchInput = $('#search-input');
  //   $searchClose = $('.fa-close');

   
  //   $search.click(function (){
    
  //     $searchInput.show();

  //   })

  //   $searchClose.click(function (){
  //     $searchInput.hide();
  //   })

  // })

  /*mixitup js*/
  var mixer = mixitup('.works', {
        selectors: {
            target: '.col-md-4'
        },
        animation: {
            duration: 450
        }
    });