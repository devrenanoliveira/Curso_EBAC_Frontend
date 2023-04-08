$(document).ready(function() {
    
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(); /* como o "nav" está ocultado no css pelo "display none", esse slideToggle faz o efeito de aparecer e ocultar quando o menu hamburguer é clicado */
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })

    $('#CEP').mask('00000-000',{
        placeholder: '00000-000'
    })

    $('#CPF').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
            required: true,
            email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            CEP: {
                required: true,
            },
            CPF: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            telefone: 'Por favor, insira um telefone válido.',
            email: 'Por favor, insira um e-mail válido.',
            CEP: 'Por favor, insira um CEP válido.',
            mensagem: 'Por favor, digite sua mensagem.',
            CPF: 'Por favor, digite seu CPF.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})