$('#click').on('click', function () {
    // alert('Ready To Play!');

    // function ifCompleted(distance) {
    //     if (isComplete === false) {
    //         isComplete = true
    //     }   else {
    //         place = 'second'
    //     }
    //     console.log('ifCompleted function has been executed')
    // }

    //get width of boxes
    //const boxWidth = $('.box').width();
    
    // get width of 'ocean'/body?
    //const bodyWidth = $(window).width() - boxWidth; 

    // blueDistance = 500
    // console.log
    
    
    
    let blueDistance = 10
    let redDistance = 10

    window.addEventListener("keypress", function (event) {
        console.log(event.which)
        if (event.which === 97) {  
            
            $('#blue').animate({left: blueDistance}, 200, function (){
                
                // ifCompleted(blueDistance)
                blueDistance += 5;
            }) 
        }   else if (event.which === 108) {
              $('#red').animate({left: redDistance}, 200, function () {
                
                // ifCompleted(redDistance)
                
                redDistance += 5
            })
            
            
        }
        if (blueDistance > 100) {
            console.log('Blue came in ' + place)
            const blueResult = $(`<h2>Blue came in ${place}</h2>`) 
            $('body').append(blueResult);
            window.removeEventListener("keypress", function (event) {
                
            })
        } 
        if (redDistance > 100) {
            console.log('Red came in ' + place)
            const redResult = $(`<h2>Red came in ${place}</h2>`)
            $('body').append(redResult);
            

        }

        console.log(blueDistance)
        console.log(redDistance)
        
    })
    
    // A key, L key //

    
    
    
    
    
    //get random race times
    //const boxTime1 = Math.floor( (Math.random() * 3000) + 1 );
    //const boxTime2 = Math.floor( (Math.random() * 3000) + 1 );

    let isComplete = false;
    let place = 'first';

    // $('#blue').animate({left: bodyWidth}, boxTime1, function (){
    //     console.log('finished');
    //     ifCompleted()
    //     console.log('Blue came in ' + place)
    //     const blueResult = $(`<h2>Blue came in ${place}</h2>`) 
    //     $('body').append(blueResult);
    // })

  

    



    // $('#red').animate({left: bodyWidth}, 200, function () {
    //     console.log('hooray')
    //     ifCompleted()
    //     console.log('Red came in ' + place)
    //     const redResult = $(`<h2>Red came in ${place}</h2>`)
    //     $('body').append(redResult);
    // })

    // $('#red').animate({left: bodyWidth}, boxTime2, function () {
    //     console.log('hooray')
    //     ifCompleted()
    //     console.log('Red came in ' + place)
    //     const redResult = $(`<h2>Red came in ${place}</h2>`)
    //     $('body').append(redResult);
    // })
   

    // Play again //
    // $('#reset').on(function() {
    //     $('.box').css('left','0');
        
    // })

    $('#reset').on('click', function () {
        console.log('reset');
        $('#blue').animate({left: 0}, 500, function (){
            console.log('finished');
            
            
        })
        $('#red').animate({left: 0}, 500, function (){
            console.log('finished');
            
            
        })
    })
})