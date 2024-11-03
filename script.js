
let maxrandy =630;
let maxrandx =1363;
let randtext;

function Rand() {
	 var xrand = Math.floor(Math.random() * maxrandy) + 1;
	 console.log("X - ", xrand);
	 var yrand = Math.floor(Math.random() * maxrandx) + 1;
	console.log("Y - ", yrand);
	var randtextid = Math.floor(Math.random() * 21) + 1;

	const nbutton = document.querySelector('.nbutton');
	const ybutton = document.querySelector('.ybutton');

	ybutton.style.left = 683 + 'px';

	nbutton.style.top = xrand + 'px';
	nbutton.style.left = yrand + 'px';

	 switch (randtextid) {
      case 0:
	    randtext = "А может все-таки да?";
	    break;
	  case 1:
	    randtext = "Почему бы и нет?";
	    break;
	  case 2:
	    randtext = "Так мы едем катать?";
	    break;
	  case 3:
	    randtext = "Да ну, серьезно?";
	    break;
	  case 4:
	    randtext = "Ну давай же!";
	    break;
	  case 5:
	    randtext = "Точно нет?";
	    break;
	  case 6:
	    randtext = "Сомневаешься?";
	    break;
	  case 7:
	    randtext = "Неужели нет?";
	    break;
	  case 8:
	    randtext = "А вдруг?";
	    break;
	  case 9:
	    randtext = "Подумай еще раз!";
	    break;
	  case 10:
	    randtext = "Точно-так-то?";
	    break;
	  case 11:
	    randtext = "Может передумаешь?";
	    break;
	  case 12:
	    randtext = "Уверен?";
	    break;
	  case 13:
	    randtext = "Ну пожалуйста!";
	    break;
	  case 14:
	    randtext = "Последний шанс!";
	    break;
	  case 15:
	    randtext = "На самом деле хочешь нет?";
	    break;
	  case 16:
	    randtext = "Неужели нет?";
	    break;
	  case 17:
	    randtext = "Ой, ну давай!";
	    break;
	  case 18:
	    randtext = "А если да?";
	    break;
	  case 19:
	    randtext = "Ну же, давай!";
	    break;
	  case 20:
	  	randtext = "Пидора ответ!"
	  	break;
	  case 21:
	  	randtext = "Что? Не слышу"
	  	break;
     }
     var text = document.getElementById('Text');
 	 text.innerHTML = randtext;
}
function Yes(){
	var text = document.getElementById('Text');
 	text.innerHTML = "Ура, поехали!)";

 	const nbutton = document.querySelector('.nbutton');
 	const ybutton = document.querySelector('.ybutton');

	nbutton.style.display = "none";

	ybutton.addEventListener('click', () => {
		text.innerHTML = "Я уже понял, подожди собираюсь!";
	});
 }