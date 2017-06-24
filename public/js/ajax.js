

$wordplace= $('#wordplace')
$box= $('#box')
var input=""
var $test= $('#test')
var arrayword=[]
var $answer= $('#answer')
var $gotit= $('#gotit')
var $right= $('#right')
var wordlength= '?len=5'
var $youloose= $('#youloose')
var $youwin= $('#youwin')

var responses = ["You actually thought, you could cheat...I'm offended",
 "Boi, answers don't come that quickly", "You must be joshing me", "The hang man should slap you","Your mama would be ashamed",
 "Answer, hah you aint getting it that easily", "Life doesn't just hand you a cookie", "Your mama lied to you"];

$youloose.hide()
$youwin.hide()
$(document).ready(function(){

	$.ajax({

		type: 'GET',
		url: ' http://setgetgo.com/randomword/get.php' + wordlength,
		 dataType: "jsonp",
		}) 
		.done(function(words){
			console.log(words.Word)
			input= words.Word
			arrayword.push(words.Word)
			
	})	
		.fail(function(err){
			console.log("error getting to the api")
		})
})




// console.log(arrayc)




function show(){
	$wordplace.append("<p id='funny'>" + responses[Math.floor(Math.random() *responses.length)] + "</p>")
	$('#funny').fadeOut(2500, function() { $(this).remove(); })
}
function buttoninput(){
	for(var i in arrayword[0]){
		// if($box.val() != arrayword[0][i]){
		// 	console.log("you didnt get any letter")
		
	if($box.val() == arrayword[0][i]) {
		console.log($box.val())
		$answer.append($box.val())
	}else{
		console.log('wrong')
		$answer.append("*")
		}
	}
	$answer.append("<br style='width: 100px;'>")
}

e=0

function gotitright(){
  if ($right.val() == arrayword[0]) {
    $gotit.append( "congratulations!! You got it right, the word is " + arrayword[0])
    $youwin.show(1000)
   
  } else{ 
    $gotit.append("<p id='sorry'>WRONG</p>")
    e++
  }
  console.log(e)
  $('#sorry').fadeOut(1000, function() { $(this).remove(); })

  if(e===1){
    $('#head').fadeOut(400) 

  } else if(e===2){

    $('#waist').fadeOut(400)

  }else if(e===3){

    $('#butt').fadeOut(400)

  }else if(e===4){

    $('#leftarm').fadeOut(400)

  }else if(e===5){

    $('#rightarm').fadeOut(400)

  }else if(e===6){

    $('#leftleg').fadeOut(400)

  }else if(e===7){

    $('#rightleg').fadeOut(400)
    $youloose.show(1000)
  }

}

