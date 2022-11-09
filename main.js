//let score=0
//let userClick;
//Made array for storing random words

//random color for text
const rand=()=>{
  return Math.floor(Math.random()*255);
}

$('#first-box').on('click', function(){
  $(this).css('color')
})

$('#start').on('click',()=>{
  $('#first-box').css({
    'color':'rgb(' + rand() + ','+ rand() + ','+ rand()
  })
})

$('#second-box').on('click', function(){
  $(this).css('color') 
})

$('#start').on('click',()=>{
  $('#second-box').css({
    'color':'rgb(' + rand() + ','+ rand() + ','+ rand()
  })
})

$('#third-box').on('click', function(){
  $(this).css('color') 
})

$('#start').on('click',()=>{
  $('#third-box').css({
    'color':'rgb(' + rand() + ','+ rand() + ','+ rand()
  })
})

$('#fourth-box').on('click', function(){
  $(this).css('color') 
})

$('#start').on('click',()=>{
  $('#fourth-box').css({
    'color':'rgb(' + rand() + ','+ rand() + ','+ rand()
  })
})

$('#fifth-box').on('click', function(){
  $(this).css('color') 
})

$('#start').on('click',()=>{
  $('#fifth-box').css({
    'color':'rgb(' + rand() + ','+ rand() + ','+ rand()
  })
})

$('#sixth-box').on('click', function(){
  $(this).css('color') 
})

$('#start').on('click',()=>{
  $('#sixth-box').css({
    'color':'rgb(' + rand() + ','+ rand() + ','+ rand()
  })
})

$('#last-box').on('click', function(){
  $(this).css('color') 
})

$('#start').on('click',()=>{
  $('#last-box').css({
    'color':'rgb(' + rand() + ','+ rand() + ','+ rand()
  })
})

//random color box
let arr=['(255,0,0)','(255,128,0)','(255,255,0)','(128,255,0)','(0,0,255)','(127,0,255)','(255,0,255)']

const rand2=()=>{
  return arr[Math.floor(Math.random()*arr.length)];
}
console.log(rand2())

$('#first-box').on('click', function(){
  $(this).css('background-color')
})

$('#start').on('click',()=>{
  $('#first-box').css({
    'background-color':'rgb' + rand2()
  })
})

$('#second-box').on('click', function(){
  $(this).css('background-color') 
})

$('#start').on('click',()=>{
  $('#second-box').css({
    'background-color':'rgb' + rand2() 
  })
})

$('#third-box').on('click', function(){
  $(this).css('background-color') 
})

$('#start').on('click',()=>{
  $('#third-box').css({
    'background-color':'rgb' + rand2() 
  })
})

$('#fourth-box').on('click', function(){
  $(this).css('background-color') 
})

$('#start').on('click',()=>{
  $('#fourth-box').css({
    'background-color':'rgb' + rand2() 
  })
})

$('#fifth-box').on('click', function(){
  $(this).css('background-color') 
})

$('#start').on('click',()=>{
  $('#fifth-box').css({
    'background-color':'rgb' + rand2() 
  })
})

$('#sixth-box').on('click', function(){
  $(this).css('background-color') 
})

$('#start').on('click',()=>{
  $('#sixth-box').css({
    'background-color':'rgb' + rand2()
  })
})

$('#last-box').on('click', function(){
  $(this).css('background-color') 
})

$('#start').on('click',()=>{
  $('#last-box').css({
    'background-color':'rgb' + rand2() 
  })
})

//start and reset button turn red when mouse hover over them
$('#start').on('mouseenter',()=>{
  $('#start').css('color','red');
}).on('mouseleave',()=>{$('#start').css('color','black')});

/*
$('#generate').on('mouseenter',()=>{
  $('#generate').css('color','red');
}).on('mouseleave',()=>{$('#generate').css('color','black')}); */

$('#reset').on('mouseenter',()=>{
  $('#reset').css('color','red');
}).on('mouseleave',()=>{$('#reset').css('color','black')});

//function for reset button
const reset=()=>{
  $('#reset').on('click',()=>{
    $('.square').empty()
  })
}
reset();

const variables =["Red","Orange","Yellow","Green","Blue","Purple","Pink"]
arr=['#first-box','#second-box','#third-box','#fourth-box','#fifth-box','#sixth-box','#last-box'];

const randomWords=()=>{
  return variables[Math.floor(Math.random()*(variables.length))]
}
console.log(randomWords())


/*
const check =(i)=>{
  if ($(arr[i]).text(randomWords())===variables[i]) {
    $('#condition-box').text("Yes, you scored a point!");
    } else if ($(arr[i]).text(randomWords())!==variables[i]) {
      $('#condition-box').text("Sorry, please try again.");
    }};
    

console.log($(arr[0]).text(randomWords()).get());
console.log(variables[0])

const generateAll=()=>{
  $('#start').on('click',()=>{
    for(let i=0;i<arr.length;i++){
     $(arr[i]).on('click',()=> check(i))
      }
    })
  }
generateAll(); 
*/

/*

let point =0
const $point=$('<div>').addClass("point").text(`Points ${point}`);
*/

const generateFirst=()=>{
  $('#start').on('click',(event)=>{
    $('#first-box').text(randomWords());
    $('#first-box').on('click', ()=>{
      if($('#first-box').text() === "Red"){
       $('#condition-box').text("Yes,that is correct!");
      $('#box').append(num())}
        if($('#first-box').text() !== "Red"){
         $('#condition-box').text("Sorry, please try again.")}
    })
  })
}
generateFirst();




const generateSecond=()=>{
  $('#start').on('click',(event)=>{
    $('#second-box').text(randomWords());
    $('#second-box').on('click',()=>{
      if($('#second-box').text() === "Green"){
        $('#condition-box').text("Yes,that is correct!")}
        if($('#second-box').text() !== "Green"){
         $('#condition-box').text("Sorry, please try again.")}
      })
    })
  }
generateSecond();

const generateThird=()=>{
  $('#start').on('click',(event)=>{
    $('#third-box').text(randomWords());
    $('#third-box').on('click',()=>{
      if($('#third-box').text() === "Yellow"){
        $('#condition-box').text("Yes,that is correct!")}
        if($('#third-box').text() !== "Yellow"){
         $('#condition-box').text("Sorry, please try again.")}
      })
    })
  }
    generateThird();

const generateFourth=()=>{
  $('#start').on('click',(event)=>{
    $('#fourth-box').text(randomWords());
    $('#fourth-box').on('click',()=>{
      if($('#fourth-box').text() === "Orange"){
        $('#condition-box').text("Yes,that is correct!")}
        if($('#fourth-box').text() !== "Orange"){
         $('#condition-box').text("Sorry, please try again.")}
      })
    })
  }
    generateFourth();

const generateFifth=()=>{
  $('#start').on('click',(event)=>{
    $('#fifth-box').text(randomWords());
    $('#fifth-box').on('click',()=>{
      if($('#fifth-box').text() === "Blue"){
        $('#condition-box').text("Yes,that is correct!")}
        if($('#fifth-box').text() !== "Blue"){
         $('#condition-box').text("Sorry, please try again.")}
      })
    })
  }
    generateFifth();

const generateSixth=()=>{
  $('#start').on('click',(event)=>{
    $('#sixth-box').text(randomWords());
    $('#sixth-box').on('click',()=>{
      if($('#sixth-box').text() === "Pink"){
        $('#condition-box').text("Yes,that is correct!")}
        if($('#sixth-box').text() !== "Pink"){
         $('#condition-box').text("Sorry, please try again.")}
      })
    })
  }
    generateSixth();

    const generateLast=()=>{
      $('#start').on('click',(event)=>{
        $('#last-box').text(randomWords());
        $('#last-box').on('click',()=>{
          if($('#last-box').text() === "Purple"){
            $('#condition-box').text("Yes,that is correct!");}
            if($('#last-box').text() !== "Purple"){
             $('#condition-box').text("Sorry, please try again.");}
          })
        })
      }
       generateLast();



/*
const gameOver=()=>{
  $('#start').on('click',()=>{
    $('#condition-box').text("Game Over!")
  })
}
console.log(gameOver());

setTimeout(()=>{
return gameOver;
},2000);
*/


/*
let score=0;

$('.scorewrap').text(`Score:${score++}`)
*/



//make a settimeout function 
//once startgame is clicked, condition-box has game over message in 5 seconds 

/*
const myTimeout=$('#start').on('click',()=>{
  if ($('#first-box').on('click', ()=>{
    if($('#first-box').text() === "Red"){
      $('#condition-box').text("Yes,you scored a point!");}
      if($('#first-box').text() !== "Red"){
       $('#condition-box').text("Sorry, please try again.")}
  })

  setTimeout(myTimeout, 5000);

  const timeOut=()=>{
   $('#condition-box').text("Game Over!");
  }

  clearTimeout(myTimeout)





/*
$('#first-box').on('click',(event)=>{
  console.log('hi');
  if($('#first-box').text() === "Red"){
   $('#condition-box').text("Yes")}
   if($('#first-box').text() !== "Red"){
    $('#condition-box').text("No")}
 }) */

