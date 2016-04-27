var alien_01;
var gameTimer;
var output;
var numHits = 0;
var numMisses = 0;

function init(){
	alien_01 = document.getElementById('alien_01');
	output = document.getElementById('output');

	placeAlien();
}

function placeAlien(){

	var x = Math.floor(Math.random()*421); // 0 to 420
	alien_01.style.left = x + 'px';
	alien_01.style.top = '350px';

}

function gameloop(){
	var y = parseInt(alien_01.style.top) - 20;
	if(y < -100){
		numMisses++;
		if(numMisses > 5){
			document.getElementById('loseScreen').style.display = 'block';
			clearInterval(gameTimer);
			txtLoseTitle.innerHTML = '';
			txtLoseMessage.innerHTML = 'YOU LOSE';

		}
	placeAlien();
	}

	else alien_01.style.top = y +'px';
}

function hitAlien(){
	//output.innerHTML = 'No animals are harmed in the playing of this game.';
	numHits++;
	//output.innerHTML = numHits;
	if(numHits==3){
		document.getElementById('winScreen').style.display = 'block';
		clearInterval(gameTimer);
		txtWinTitle.innerHTML =  ''; 
		txtWinMessage.innerHTML = 'YOU WIN';
	}

	placeAlien();
}

function startGame(){
	document.getElementById('introScreen').style.display = 'none';
	gameTimer = setInterval(gameloop, 50);
}

function replay(){
	document.getElementById('winScreen').style.display = 'none';
	document.getElementById('loseScreen').style.display = 'none';
	gameTimer = setInterval(gameloop, 50);					
}


