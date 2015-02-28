var img = ["1","2","3"];
var index = 0;

$(document).ready(function(){

	$("#image").attr("src","images/" + img[index] + ".jpg");
	
	$("#prev").click(function(){

		index = (index + img.length - 1) % img.length; 
		$("#image").attr("src","images/" + img[index] + ".jpg");
	});

	$("#next").click(function(){

		index = (index + 1) % img.length; 
		$("#image").attr("src","images/" + img[index] + ".jpg");
	});
});