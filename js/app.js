$('#click').on('click', function () { 
    
    let pirate1Distance = 50
    let pirate2Distance = 50
    const finished = 1000

       //get width of boxes
    //const boxWidth = $('.box').width();
    
    //get width of 'ocean'/body
    const bodyWidth = $(window).width() - 50; 
    console.log('bodyWidth=', bodyWidth)

    $(window).on("keypress", function (event) {
        console.log(event.which)
        if (event.which === 97) {  
            $('#pirate1').animate({left: pirate1Distance}, 300, function (){
                pirate1Distance += 30;
            }) 
        }   else if (event.which === 108) {
              $('#pirate2').animate({left: pirate2Distance}, 300, function () {
                pirate2Distance += 30
            })
        }
        if (pirate1Distance > bodyWidth) {
            console.log('Pirate 1 came in ' + place)
            const pirate1Result = $(`<h2 class='result'>Pirate 1 came in ${place}</h2>`) 
            $('body').append(pirate1Result);
            $(window).off("keypress")
        } 
        if (pirate2Distance > bodyWidth) {
            console.log('Pirate 2 came in ' + place)
            const pirate2Result = $(`<h2 class='result'>Pirate 2 came in ${place}</h2>`)
            $('body').append(pirate2Result);
            $(window).off("keypress")
        }

        console.log(pirate1Distance)
        console.log(pirate2Distance)
        
    })
    
        let place = 'first';

        $('#reset').on('click', function () {
        console.log('reset');
        $('#pirate1').animate({left: 0}, 500, function (){
            console.log('finished');
            
        })
        $('#pirate2').animate({left: 0}, 500, function (){
            console.log('finished');
            
            
        })
        $('h2').remove()
    })
})


  //get random race times
    //const boxTime1 = Math.floor( (Math.random() * 3000) + 1 );
    //const boxTime2 = Math.floor( (Math.random() * 3000) + 1 );

  // $('#blue').animate({left: bodyWidth}, boxTime1, function (){
    //     console.log('finished');
    //     ifCompleted()
    //     console.log('Blue came in ' + place)
    //     const blueResult = $(`<h2>Blue came in ${place}</h2>`) 
    //     $('body').append(blueResult);
    // })xs

    // $('#red').animate({left: bodyWidth}, 200, function () {
    //     console.log('hooray')
    //     ifCompleted()
    //     console.log('Red came in ' + place)
    //     const redResult = $(`<h2>Red came in ${place}</h2>`)
    //     $('body').append(redResult);
    // })

  