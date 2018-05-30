var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
getJoke();
button.addEventListener('click', getJoke);
var paragraph = document.getElementById('joke');

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function() {
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}
var paragraph = document.getElementById('joke');
var paragraph = document.getElementById('joke');