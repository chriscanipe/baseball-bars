
var playerData;

$(document).ready(function() {
    getData();
});


function getData() {
	$.getJSON("js/baseballcard.json", function(data) {
		playerData = data;	
		drawChart();	
	});
}


function drawChart() {

	//I added a div to the index.html page called .player-name
	//The gives me a place to put the player's name.
	$(".player-name").html(playerData.name);

	// Our bars now consist of three elements:
	// The date, the bar and a total
	// To hold them all together, we group them inside of a div: .bar-container
	// .col-md-12 is a class from the Bootstrap library which stretched the container to the full width of the page
	// check the style.css file to see how we get the elements inside to arrange relative to one another

	$.each(playerData.stats, function(i, item) {
		var width = item.HR * 10;
		$(".chart").append(
			"<div class='col-md-12 bar-container'>"+
				"<div class='year'>"+item.year+"</div>"+
				"<div class='bar' style='width: "+width+"px'></div>"+
				"<div class='total'>"+item.HR+"</div>"+
			"</div>"
		);
	});

}






