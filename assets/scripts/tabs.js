/*!
	 * Peixe Urbano Bootstrap v0.1.0
	 * Sistema de Abas
	 * Copyright 2012 Peixe Urbano
	 * Date: 10-05-2012
 */

(function( $ ){
	//FUNÇÃO PARA SISTEMA DE ABAS
    $.fn.tabsSystem = function(options) {

        var defaults = {
          'IdTabsSystem' : '',
          'ContTabsSystem' : '.tab-pane',
          'TabActive': ''
        };

        var settings = $.extend( {}, defaults, options );

        return this.each(function() {
        	//Fazemos com que a primeira class com o nome abas que demos fica visivel
            $(settings.ContTabsSystem+':not(:first)').hide();
            //Fazemos com que o primeiro elemento na "nav" fique com a class de ativado
            $(settings.IdTabsSystem+" a:first").parent().addClass( settings.TabActive );
            //Falamos que quando clicar no id nos mande para div que correspondende
			$(settings.IdTabsSystem+" a").click(function(){ 
				//somir as div que nao foram clicadas
				$(settings.ContTabsSystem).hide();				
				// variavel para pegar o atributo href para saber em qual id o usuario clicou
				var tabs = $(this).attr('href');				
				// faz a div correspondente clicada ficar visivel
				$(tabs).fadeIn("slow");
				// remove a class no link clicado para que nao fica marcado
				$(settings.IdTabsSystem+" a").parent().removeClass( settings.TabActive );				
				// adiciona a classe no link clicado para que o usuario saiba em qual link ele esta
				$(this).parent().addClass( settings.TabActive );				
				//bloquear o href do link
				return false;
			});
        });

    }
})( jQuery );