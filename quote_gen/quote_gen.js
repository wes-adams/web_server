

$(document).ready(function() {
	grab_quote();
	$('#get_quote').on('click', grab_quote);
});

function grab_quote(){

	var randColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16); 
	var quote_text = $("#quote_text");
	var get_quote = $("#get_quote");
	var quote_author = $("#quote_author");

	$.getJSON(
			"https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",
			function(data){

				quote_text.animate({opacity: '0'},500,function() {
					quote_text.animate({opacity: 1},500);
					quote_text.text(data.quoteText);
					$(".quote_border").css("border-color", randColor);
				});  

				quote_author.animate({opacity: 0 }, 500, function() {
					quote_author.animate({opacity: 1},500);
					quote_author.text('-' + data.quoteAuthor);
				});      

				get_quote.animate({opacity: 0},500,function() {
					get_quote.animate({opacity: 1},500);
					get_quote.css("background-color", randColor);
				});    


			});//getJSON
}//grab_quote



