$(document).ready(function() {
    $('#btn-codigo').click(function() {
        let valor = $('input[name=desconto]').val()
        if (valor == 'CFICO' || valor == 'squad55') {
            $('.precoantigo').css({
                color: 'red',
                'text-decoration-line': 'line-through'
            })
            $('.novopreco').show()
        } else {
            alert('Codigo Invalido!')
        }
        console.log(valor)
    })
})