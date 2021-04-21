$('#click').on('click', function () {
    alert('Ready To Play!');

    function ifCompleted() {
        if (isComplete === false) {
            isComplete = true
        }   else {
            place = 'second'
        }
        console.log('ifCompleted function has been executed')
    }

    //get width of boxes
    const boxWidth = $('.box').width();
    
    // get width of 'ocean'/body?
    const bodyWidth = $(window).width() - boxWidth;

    //get random race times
    const boxTime1 = Math.floor( (Math.random() * 3000) + 1 );
    const boxTime2 = Math.floor( (Math.random() * 3000) + 1 );

    let isComplete = false;
    let place = 'first';

    $('#blue').animate({left: bodyWidth}, boxTime1, function (){
        console.log('finished');
        ifCompleted()
        console.log('Blue came in ' + place)
        const blueResult = $(`<h2>Blue came in ${place}</h2>`) 
        $('body').append(blueResult);
    })

    $('#red').animate({left: bodyWidth}, boxTime2, function () {
        console.log('hooray')
        ifCompleted()
        console.log('Red came in ' + place)
        const redResult = $(`<h2>Red came in ${place}</h2>`)
        $('body').append(redResult);
    })


});  