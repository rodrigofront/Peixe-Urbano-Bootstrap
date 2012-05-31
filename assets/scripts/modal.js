/*!
     * Peixe Urbano Bootstrap v0.1.0
     * Modal - Lightbox
     * Copyright 2012 Peixe Urbano
     * Date: 25-05-2012
 */

(function( $ ){   
    $.fn.ModalSystem = function(options){

        var defaults = {
            'idModal': '',
            'contentModal': '',
            'titleModal': '',
            'MaskModal': ''
        }

        var settings = $.extend( {}, defaults, options);

        return this.each(function(){
            //Conteudo da Div
            var coont = '<div class="ModalPu"><a href="#" class="pu-fechar" title="fechar">Fechar Box</a><div class="contentModal"><h2 class="titleModal">'+ settings.titleModal +'</h2>'+ settings.contentModal  +'</div></div>';

			var winH = $(window).height();
			var winW = $(window).width();

			$(settings.MaskModal).css({'position' : 'absolute','top' : '0','left' : '0', 'background' : '#000', 'z-index' : '9999', 'width' : '100%', 'height' : '100%', 'display' : 'none', 'opacity' : '0.8'});
			

            //Destroy
            $(".pu-fechar").live("click", function(){
            	console.log('fechar modal');
            	$(".ModalPu").remove();
            	$(settings.MaskModal).css('display', 'none')
            })


            //Exibe o modal
        	$(settings.idModal).live("click", function(){
			  	$(settings.MaskModal).css('display','block')
			  	$(settings.MaskModal).before(coont);

			  	$('.ModalPu').css('top', winH/2-$('.ModalPu').height()/1.8);
				$('.ModalPu').css('left', winW/2-$('.ModalPu').width()/2);
			});



        });

    }
})( jQuery );