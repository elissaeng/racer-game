$('#click').on('click', function () { 
    
    let blueDistance = 50
    let redDistance = 50

       //get width of boxes
    const boxWidth = $('.box').width();
    
    //get width of 'ocean'/body?
    const bodyWidth = $(window).width() - boxWidth; 

    $(window).on("keypress", function (event) {
        console.log(event.which)
        if (event.which === 97) {  
            $('#pirate1').animate({left: blueDistance}, 300, function (){
                blueDistance += 30;
            }) 
        }   else if (event.which === 108) {
              $('#red').animate({left: redDistance}, 300, function () {
                redDistance += 30
            })
        }
        if (blueDistance > bodyWidth) {
            console.log('Blue came in ' + place)
            const blueResult = $(`<h2 class='result'>Blue came in ${place}</h2>`) 
            $('body').append(blueResult);
            $(window).off("keypress")
        } 
        if (redDistance > bodyWidth) {
            console.log('Red came in ' + place)
            const redResult = $(`<h2 class='result'>Red came in ${place}</h2>`)
            $('body').append(redResult);
            $(window).off("keypress")
        }

        console.log(blueDistance)
        console.log(redDistance)
        
    })
    
        let place = 'first';

        $('#reset').on('click', function () {
        console.log('reset');
        $('#blue').animate({left: 0}, 500, function (){
            console.log('finished');
            
        })
        $('#red').animate({left: 0}, 500, function (){
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

  