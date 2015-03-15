
$(document).ready(function() {
	createGrid(16);

	$(".btnclass").on("click", function() {
 			var size = parseInt(prompt("Input the size: "));
			createGrid(size);
    });
});

function createGrid(size) {

	$('#container').empty();
	$('#container').html("");

	var blockSize = $('#container').width() / size - 2;
	var container = $('#container');

	for (var i = 1; i <= size; i++) {
		for (var j = 1; j <= size; j++) {
		container.append('<div class="board"></div>');
		}
		container.append('<div class="newRow"></div>');
	}

	$('.board').css('width', blockSize);
	$('.board').css('height', blockSize);

	$('.board').hover(function() {
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css({'background-color':hue});	
	});
}