/* Code for to change the umbrella color */

$(document).ready(function(){

    $('.color-choose input').on('click',function(){
        var umbrellaColor = $(this).attr('data-image');

        $('.active').removeClass('active');
        $('.umbrella img[data-image = '+umbrellaColor+ ']').addClass('active');
        $(this).addClass('active');

        $('.umbrella img[id = '+"logo"+']').addClass('active');
    });
});


/* Adding custom logo */
function filePreview(){
    var preview = document.getElementById('logo');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();


    reader.onloadend = function (){
        preview.src = reader.result;
    }

    if(file)
    {
        reader.readAsDataURL(file);
    }
    else{
        preview.src=" ";
    }

    $('.umbrella img[id= '+"logo"+']').addClass('active')
}