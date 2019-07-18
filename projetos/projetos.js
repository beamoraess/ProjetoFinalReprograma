$('.btn-cards').on('click', function(){
    var categoria = $(this).attr('data-categoria')
    console.log(categoria)
    if(categoria == 'todos'){
        $('#cursos div').show()
    }else{
        $('#cursos div').each(function(){
            if(!$(this).hasClass(categoria)){
                $(this).hide()
            }else{
                $(this).show()
            }
        })
    }
})