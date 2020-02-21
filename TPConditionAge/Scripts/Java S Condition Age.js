var age = prompt("Donnez un age");

switch (age) {
	case '18':
		alert('Bravo vous ètes majeur');
		break;

	case '42':
		alert("C'est la reponse universelle");
		break;

	case '100':
		alert('Incroyable, vous ètes centenaire');
		break;

    case 'Harry':
		alert('Retourne a lecole');
		break;

	default:
		alert("oh! Vous avez " +age+ " ans" );
		break;
	}