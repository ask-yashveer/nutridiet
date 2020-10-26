$(document).ready(function() {
	$('.result').on('click', function() {
		var points = 0;
		var rbtn = []
		for (let i = 1; i <= 9; i++) { rbtn.push($("input[name=q" + i.toString() + "]:checked").val()) }
		console.log(rbtn);
		/*for(let i = 1; i <= 9; i++) {
			if(q2.checked) {
				points = points+1;
			}
			else if(q3.checked) {
				points = points+2;
			}
			else if(q4.checked) {
				points = points+3;
			}
		}*/
		console.log(points);
		window.localStorage["points"] = points;
		if (points <= 4) {
			window.localStorage["message"] = "Minimal depression";
		}
		else if (points >= 5 && points <= 9) {
			window.localStorage["message"] = "Mild depression";
		}
		else if (points >= 10 && points <= 14) {
			window.localStorage["message"] = "Moderate depression";
		}
		else if (points >= 15 && points <= 19) {
			window.localStorage["message"] = "Moderately severe depression";
		}
		else if (points >= 20) {
			window.localStorage["message"] = "Severe depression";
		}
	});

	$('#resultHead').text(window.localStorage["message"]);


});