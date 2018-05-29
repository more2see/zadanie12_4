var prefix = "https://cors-anywhere.herokuapp.com/";
var url = 'http://api.icndb.com/jokes/random';

function getJoke() {
$.ajax({
	method: 'GET',
	url: prefix + url,
	success: function(res) {
		$paragraph.text(res.value.joke);
	}
});	
}

getJoke();

var $button = $('#get-joke').click(function() {
$.ajax({
	method: 'GET',
	url: prefix + url,
	success: function(res) {
		$paragraph.text(res.value.joke);
	}
});
});
var $paragraph = $('#joke');

