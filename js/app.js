function startGame() { 
    $('#click').hide();
    $('#reset').hide();
    $('#starfish').hide();
    $('#crab').hide();
    $('#jumpingFish').hide();
    $('#seaweed').hide();
    $('#seaweed2').hide();
    $('#seaweed3').hide();
    $('#schoolOfFish').hide();
    $('#seashell').hide();
    $('#purpleShell').hide();
    $('#dolphin').hide();
    $('#gamesound')[0].play();
    console.log($('#gamesound'));
    $('#song')[0].pause();
    
    let pirate1Distance = 50;
    let pirate2Distance = 50;
    const finished = 1000;

    let isPlaying = false;

    const bodyWidth = $(window).width() - 150; 
    console.log('bodyWidth=', bodyWidth);

    $(window).on("keypress", function (event) {
        console.log(event.which);
        if (isPlaying === false) {
            isPlaying = true;
            $('#song')[0].currentTime=0;
            $('#song')[0].volume=.2;
            $('#song')[0].play();
        }
        if (event.which === 97) {  
            $('#pirate1').animate({left: pirate1Distance}, 300, function (){
                pirate1Distance += 30;
                $('#keyA').hide("keypress");
            }) 
        }   else if (event.which === 108) {
              $('#pirate2').animate({left: pirate2Distance}, 300, function () {
                pirate2Distance += 30;
                $('#keyL').hide("keypress");
            })
        }
        if (pirate1Distance > bodyWidth) {
            console.log('Pirate 1 came in ' + place);
            const pirate1Result = $(`<h2 class='result'>Pirate 1 ${place}! The loser must walk the plank!</h2>`); 
            $('.victory-container').append(pirate1Result);
            $(window).off("keypress");
            $('#reset').show();
            $('#starfish').show();
            $('#crab').show();
            $('#jumpingFish').show();
            $('#seaweed').show();
            $('#seaweed2').show();
            $('#schoolOfFish').show();
            $('#seashell').show();
            $('#seaweed3').show();
            $('#purpleShell').show();
            $('#dolphin').show();
        }   else if (pirate2Distance > bodyWidth) {
            console.log('Pirate 2 came in ' + place);
            const pirate2Result = $(`<h2 class='result'>Pirate 2 ${place}! The loser must walk the plank!</h2>`);
            $('.victory-container').append(pirate2Result);
            $(window).off("keypress");
            $('#reset').show();
            $('#starfish').show();
            $('#crab').show();
            $('#jumpingFish').show();
            $('#seaweed').show();
            $('#seaweed2').show();
            $('#schoolOfFish').show();
            $('#seashell').show();
            $('#seaweed3').show();
            $('#purpleShell').show();
            $('#dolphin').show();
        }

        console.log(pirate1Distance);
        console.log(pirate2Distance);
        
    });
    
        let place = 'WON';

        $('#reset').on('click', function () {
        console.log('reset');
        $('#pirate1').animate({left: 0}, 500, function (){
            console.log('finished');
            
        })
        $('#pirate2').animate({left: 0}, 500, function (){
            console.log('finished');
            })
        
            $('h2').remove();
     
    });
}

$('#click').on('click', startGame);
$('#reset').on('click', startGame);
$('#starfish').hide();
$('#crab').hide();
$('#jumpingFish').hide();
$('#seaweed').hide();
$('#seaweed2').hide();
$('#schoolOfFish').hide();
$('#seashell').hide();
$('#seaweed3').hide();
$('#purpleShell').hide();
$('#dolphin').hide();
  








  