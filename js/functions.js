$(function(){

    $('form#form1').submit(function(){

        var email = $('input[name=email]').val();

        if (verificarEmail(email) == false) {
            aplicarCampoInvalido($('input[name=email]'));
            $('p.format-p').show();
            return false;
        } else {
            $('.container').css('display', 'none');
            $('.container2').css('display', 'flex');
            resetarCampoInvalido($('input[name=email]'));
            return false;
        }

    });

    $('input[name=email]').focus(function(){
        resetarCampoInvalido($(this));
    });

    $('.container2 input[type=submit]').click(function(){
        $('.container').css('display', 'flex');
        $('.container2').css('display', 'none');
    });

    function verificarEmail(email){
            
        if (email == ''){
            return false;
        }
    
        if (email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) == null){
            return false;
        }

    }

    function aplicarCampoInvalido(el){
        el.css('background-color', '#ffe8e6');
        el.css('color', '#d27e7e');
        el.css('border', '1px solid #c8918b')
    }

    function resetarCampoInvalido(el){
        el.css('color', 'var(--grey)');
        el.css('border', '1px solid  var(--grey)');
        el.css('background-color', 'var(--white)')
        el.val('');
        $('p.format-p').hide();
    }

});