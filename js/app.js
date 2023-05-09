

$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");

        let counter = 0;
        
        let butNext = $('.nextBtn')
        let butPrev = $('.prevBtn')
        butNext.click(function(){
            counter++
            $('#counter').text(counter)
            console.log('hola', counter)
            if (counter>0){
                $('#counter').addClass('positivo')
            } else if(counter <0){
                $('#counter').addClass('negativo')
            } else{
                $('#counter').removeClass('positivo negativo')
            }
        })
        butPrev.click(function(){
            counter--
            $('#counter').text(counter)
            console.log('hola', counter)
            if (counter>0){
                $('#counter').addClass('positivo')
            } else if(counter <0){
                $('#counter').addClass('negativo')
            } else{
                $('#counter').removeClass('positivo negativo')
            }
        })

});

