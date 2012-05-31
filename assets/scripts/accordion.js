/*!
     * Peixe Urbano Bootstrap v0.1.0
     * Sistema de Accrodion
     * Copyright 2012 Peixe Urbano
     * Date: 10-05-2012
 */

(function( $ ){
    //FUNÇÃO PARA ACCORDION    
    $.fn.AccordionSystem = function(optionsAccordion){

        var defaultsAccordion = {
            'idAccorion': '',
            'slideUp': true,
            'semantic': '',
        }

        var settingsAccordion = $.extend( {}, defaultsAccordion, optionsAccordion);

        return this.each(function(){
            $(settingsAccordion.idAccorion + settingsAccordion.semantic + ":not(:first)").hide();
            $(settingsAccordion.idAccorion+" h3 a:first").addClass('active');
            $(settingsAccordion.idAccorion+" h3 a").click(function () {
                if ( settingsAccordion.slideUp == true) { $(settingsAccordion.semantic + ":visible").slideUp("slow") } else { $(settingsAccordion.semantic + ":visible").hide("") } ;
                $(settingsAccordion.idAccorion+" h3 a").removeClass("active12");
                if ( settingsAccordion.slideUp == true) { $(this).parent().next().slideDown("slow") } else { $(this).parent().next().show("") };
                $(this).addClass('active12');
                return false;
            });
        });

    }
})( jQuery );