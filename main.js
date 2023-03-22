$(document).ready(function() {
    $('#botao-adicionar').click(function(e) {
        e.preventDefault();

        const textoTarefa = $('#tarefa-adicionar').val();
        $('#lista').append('<li>' + textoTarefa + '<style>.remover {margin: 0 auto; margin-left: 50px; border:none; cursor:pointer; font-style: italic; text-decoration-line: underline; font-size: 70%; color: red;}</style><button class="remover">Deletar</button></li>');
        $('#tarefa-adicionar').val('');
    });

    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });

    $('#lista').on('click', 'li button.remover', function() {
        $(this).parent().remove();
    });

    $('#botao-limpar-tudo').click(function() {
        $('#lista').empty();
    });
});



