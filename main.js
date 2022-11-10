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


//start and reset button turn red when mouse hover over them
$('#start').on('mouseenter',()=>{
  $('#start').css('color','red');
}).on('mouseleave',()=>{$('#start').css('color','black')});


const variables =["Red","Orange","Yellow","Green","Blue","Purple","Pink"]
arr=['#first-box','#second-box','#third-box','#fourth-box','#fifth-box','#sixth-box','#last-box'];

const randomWords=()=>{
  return variables[Math.floor(Math.random()*(variables.length))]
}
console.log(randomWords())


const showAlert1=()=> {
  alert("You Win!");
}

const showAlert2=()=> {
  alert("Game Over!");
}
//showAlert();

let winLose=()=>{
let newVal=($('#box').text());
if(newVal>= 20){
  showAlert1();
}else if(newVal<-20){
  showAlert2();
}
}
winLose();
////timer!!!
var timeLeft = 45;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        showAlert2();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
////
const gamePlay=()=>{
const generateFirst=()=>{
  $('#start').on('click',(event)=>{
    $('#first-box').text(randomWords());
    countdown();
    $('#first-box').on('click',()=>{
      if($('#first-box').text() === "Red"){
        $('#condition-box').text("Yes,that is correct!")
        let oldVal =parseInt($('#box').text());
        $('#box').text(oldVal +1);
      winLose(); };
        if($('#first-box').text() !== "Red"){
         $('#condition-box').text("Sorry, please try again.");
         let oldVal =parseInt($('#box').text());
         $('#box').text(oldVal -1);
        winLose();}
      })
    })
  }
generateFirst();

const generateSecond=()=>{
  $('#start').on('click',(event)=>{
    $('#second-box').text(randomWords());
    
    $('#second-box').on('click',()=>{
      if($('#second-box').text() === "Green"){
        $('#condition-box').text("Yes,that is correct!")
        let oldVal =parseInt($('#box').text());
        $('#box').text(oldVal +1);
      winLose();};
        if($('#second-box').text() !== "Green"){
         $('#condition-box').text("Sorry, please try again.");
         let oldVal =parseInt($('#box').text());
         $('#box').text(oldVal -1);
        winLose();}
      })
    })
  }
generateSecond();

const generateThird=()=>{
  $('#start').on('click',(event)=>{
    $('#third-box').text(randomWords());
    $('#third-box').on('click',()=>{
      if($('#third-box').text() === "Yellow"){
        $('#condition-box').text("Yes,that is correct!")
        let oldVal =parseInt($('#box').text());
        $('#box').text(oldVal +1);
      winLose();}
        if($('#third-box').text() !== "Yellow"){
         $('#condition-box').text("Sorry, please try again.");
         let oldVal =parseInt($('#box').text());
         $('#box').text(oldVal -1)
        winLose();}
      })
    })
  }
    generateThird();

const generateFourth=()=>{
  $('#start').on('click',(event)=>{
    $('#fourth-box').text(randomWords());
    $('#fourth-box').on('click',()=>{
      if($('#fourth-box').text() === "Orange"){
        $('#condition-box').text("Yes,that is correct!")
        let oldVal =parseInt($('#box').text());
        $('#box').text(oldVal +1);
      winLose();}
        if($('#fourth-box').text() !== "Orange"){
         $('#condition-box').text("Sorry, please try again.");
         let oldVal =parseInt($('#box').text());
         $('#box').text(oldVal -1);
        winLose();}
      })
    })
  }
    generateFourth();

const generateFifth=()=>{
  $('#start').on('click',(event)=>{
    $('#fifth-box').text(randomWords());
    $('#fifth-box').on('click',()=>{
      if($('#fifth-box').text() === "Blue"){
        $('#condition-box').text("Yes,that is correct!")
        let oldVal =parseInt($('#box').text());
        $('#box').text(oldVal +1);
      winLose();}
        if($('#fifth-box').text() !== "Blue"){
         $('#condition-box').text("Sorry, please try again.");
         let oldVal =parseInt($('#box').text());
         $('#box').text(oldVal -1);
        winLose();}
      })
    })
  }
    generateFifth();

const generateSixth=()=>{
  $('#start').on('click',(event)=>{
    $('#sixth-box').text(randomWords());
    $('#sixth-box').on('click',()=>{
      if($('#sixth-box').text() === "Pink"){
        $('#condition-box').text("Yes,that is correct!")
        let oldVal =parseInt($('#box').text());
        $('#box').text(oldVal +1);
      winLose();}
        if($('#sixth-box').text() !== "Pink"){
         $('#condition-box').text("Sorry, please try again.");
         let oldVal =parseInt($('#box').text());
         $('#box').text(oldVal -1);
        winLose();}
      })
    })
  }
    generateSixth();

    const generateLast=()=>{
      $('#start').on('click',(event)=>{
        $('#last-box').text(randomWords());
        $('#last-box').on('click',()=>{
          if($('#last-box').text() === "Purple"){
            $('#condition-box').text("Yes,that is correct!")
            let oldVal =parseInt($('#box').text());
            $('#box').text(oldVal +1);
          winLose();}
            if($('#last-box').text() !== "Purple"){
             $('#condition-box').text("Sorry, please try again.");
             let oldVal =parseInt($('#box').text());
         $('#box').text(oldVal -1);
        winLose();};
         
          })
        })
      }
      generateLast();
    }
    gamePlay();

 