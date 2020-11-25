$(document).ready(function(){

    $('#categorie').change(function (){
        var numCategorie = this.value;
        /*switch(numCategorie){
            case 0:
                $('bloc1').fadeOut();
            break;
        }*/
        if(numCategorie == 0){
            $('.bloc1').fadeIn(1000);
            $('.bloc2').fadeOut(1000);
            $('.bloc3').fadeOut(1000);
            $('.bloc4').fadeOut(1000);
            $('.bloc5').fadeOut(1000);
            $('.bloc6').fadeOut(1000);
            $('.bloc7').fadeOut(1000);
            $('#txt').val("Lorem, ipsum dolor sit amet consectetur adipisicing elit.");
        }else if(numCategorie == 1){
            $('.bloc1').fadeOut(1000);
            $('.bloc2').fadeIn(1000);
            $('.bloc3').fadeOut(1000);
            $('.bloc4').fadeOut(1000);
            $('.bloc5').fadeOut(1000);
            $('.bloc6').fadeOut(1000);
            $('.bloc7').fadeOut(1000);
            $("#txt").val("Autem excepturi delectus nesciunt, illum eos velit quidem.");
        }else if(numCategorie == 2){
            $('.bloc1').fadeOut(1000);
            $('.bloc2').fadeOut(1000);
            $('.bloc3').fadeIn(1000);
            $('.bloc4').fadeOut(1000);
            $('.bloc5').fadeOut(1000);
            $('.bloc6').fadeOut(1000);
            $('.bloc7').fadeOut(1000);
            $("#txt").val("unde harum modi officiis provident tempora esse consequat.");
        }
        else if(numCategorie == 3){
            $('.bloc1').fadeOut(1000);
            $('.bloc2').fadeOut(1000);
            $('.bloc3').fadeOut(1000);
            $('.bloc4').fadeIn(1000);
            $('.bloc5').fadeOut(1000);
            $('.bloc6').fadeOut(1000);
            $('.bloc7').fadeOut(1000);
            $('#txt').val("Lorem, ipsum dolor sit amet consectetur adipisicing elit.");
        }
        else if(numCategorie == 4){
            $('.bloc1').fadeOut(1000);
            $('.bloc2').fadeOut(1000);
            $('.bloc3').fadeOut(1000);
            $('.bloc4').fadeOut(1000);
            $('.bloc5').fadeIn(1000);
            $('.bloc6').fadeOut(1000);
            $('.bloc7').fadeOut(1000);
            $("#txt").val("Autem excepturi delectus nesciunt, illum eos velit quidem.");
        }else if(numCategorie == 5){
            $('.bloc1').fadeOut(1000);
            $('.bloc2').fadeOut(1000);
            $('.bloc3').fadeOut(1000);
            $('.bloc4').fadeOut(1000);
            $('.bloc5').fadeOut(1000);
            $('.bloc6').fadeIn(1000);
            $('.bloc7').fadeOut(1000);
            $("#txt").val("unde harum modi officiis provident tempora esse consequat.");
        }else if(numCategorie == 6){
            $('.bloc1').fadeOut(1000);
            $('.bloc2').fadeOut(1000);
            $('.bloc3').fadeOut(1000);
            $('.bloc4').fadeOut(1000);
            $('.bloc5').fadeOut(1000);
            $('.bloc6').fadeOut(1000);
            $('.bloc7').fadeIn(1000);
            $('#txt').val("Lorem, ipsum dolor sit amet consectetur adipisicing elit.");
        }
    });
    //affichage d'image en un seul grand plan
  /*  $('a').each(function (){
        this.attr("title", "Afficher l'image");
    });*/
    $('#flip').click(function (){
        $('#panel').slideToggle("slow");
    });
    $('a').each(function(){
        $(this).mouseenter(function(){

                $('img').css({
                    'border':'1px',
                    'border-radius':'10px',
                    'border-shadow':'19px'
                });

        });
        $(this).mouseleave(function(){
            $('img').css({
              'border':'0px',
              'border-shadow':'0px'
            });
        });
    });
    var fond = ["b2.jpg", "b3.jpg", "b4.jpg", "b5.jpg", "b6.jpg"];
    var i = 0;
    $('#bannierre').css("background-image", "url(images/banniere/"+fond[i]+")");
    setInterval(function(){
        i++;
        if (i == fond.length){
            i = 0;
        }
        $('#bannierre').fadeOut("slow", function(){
            $(this).css("background-image", "url(images/banniere/"+fond[i]+")");
            $(this).fadeIn();
        });
    }, 5000);
});
