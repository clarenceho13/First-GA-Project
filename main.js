//let score=0
//let userClick;
//Made array for storing random words
const variables =["Red","Orange","Yellow","Green","Blue","Purple","Pink"]
const randomWords=()=>{
  return variables[Math.floor(Math.random()*(variables.length))]
}
let score=0;
$('.scorewrap').text(`Score:${score}`)

//Global variables
//let score = 0;
//let userInput="";



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



//Generate words before the game
//note to self:use text and not append
//how to loop?
//$('<div>').text to get the string and not generate etc 



const generateFirst=()=>{
  $('#start').on('click',(event)=>{
    $('#first-box').text(randomWords());
    $('#first-box').on('click', ()=>{
      if($('#first-box').text() === "Red"){
        $('#condition-box').text("Yes");}
        if($('#first-box').text() !== "Red"){
         $('#condition-box').text("No")}
    })
  })
}
generateFirst();

const generateSecond=()=>{
  $('#start').on('click',(event)=>{
    $('#second-box').text(randomWords());
    $('#second-box').on('click',()=>{
      if($('#second-box').text() === "Green"){
        $('#condition-box').text("Yes")}
        if($('#first-box').text() !== "Green"){
         $('#condition-box').text("No")}
      })
    })
  }
    generateSecond();

const generateThird=()=>{
  $('#start').on('click',(event)=>{
    $('#third-box').text(randomWords());
    $('#third-box').on('click',()=>{
      if($('#third-box').text() === "Yellow"){
        $('#condition-box').text("Yes")}
        if($('#third-box').text() !== "Yellow"){
         $('#condition-box').text("No")}
      })
    })
  }
    generateThird();

const generateFourth=()=>{
  $('#start').on('click',(event)=>{
    $('#fourth-box').text(randomWords());
    $('#fourth-box').on('click',()=>{
      if($('#fourth-box').text() === "Orange"){
        $('#condition-box').text("Yes")}
        if($('#fourth-box').text() !== "Orange"){
         $('#condition-box').text("No")}
      })
    })
  }
    generateFourth();

const generateFifth=()=>{
  $('#start').on('click',(event)=>{
    $('#fifth-box').text(randomWords());
    $('#fifth-box').on('click',()=>{
      if($('#fifth-box').text() === "Blue"){
        $('#condition-box').text("Yes")}
        if($('#fifth-box').text() !== "Blue"){
         $('#condition-box').text("No")}
      })
    })
  }
    generateFifth();

const generateSixth=()=>{
  $('#start').on('click',(event)=>{
    $('#sixth-box').text(randomWords());
    $('#sixth-box').on('click',()=>{
      if($('#sixth-box').text() === "Pink"){
        $('#condition-box').text("Yes")}
        if($('#sixth-box').text() !== "Pink"){
         $('#condition-box').text("No")}
      })
    })
  }
    generateSixth();

const generateLast=()=>{
  $('#start').on('click',(event)=>{
    $('#last-box').text(randomWords());
    $('#last-box').on('click',()=>{
      if($('#last-box').text() === "Purple"){
        $('#condition-box').text("Yes")}
        if($('#last-box').text() !== "Purple"){
         $('#condition-box').text("No")}
      })
    })
  }
    generateLast();


//make a settimeout function 
//once startgame is clicked, condition-box has game over message in 5 seconds 

const timeOut=()=>{
  setTimeout(this, 5000);
  $('#start').on('click',()=>{
    $('#condition-box').text("Game Over!");
  })
} 
timeOut();





/*
$('#first-box').on('click',(event)=>{
  console.log('hi');
  if($('#first-box').text() === "Red"){
   $('#condition-box').text("Yes")}
   if($('#first-box').text() !== "Red"){
    $('#condition-box').text("No")}
 }) */








//can i get this to loop?

