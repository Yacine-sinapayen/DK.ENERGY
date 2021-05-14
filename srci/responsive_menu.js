(function($){
    $('#header__icon').click(function(e){
        e.preventDefault();
        $('body').toggleClass('with--sidebar')
    });

    $('#site-cache').click(function(e){
        $('body').removeClass('with--sidebar');
    })
})(jQuery);

const redirection ={
    redirection : function() {
      var buttonElem = document.createElement('boutton');
      console.log(buttonElem);
    }
};