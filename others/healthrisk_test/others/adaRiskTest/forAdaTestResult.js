$(document).ready(function() {
	$('.result').on('click', function() {
		var answers = [];
		for(let i = 1; i <= 7; i++) {
			answers.push($("#" + i.toString() + "yes").is(":checked") ? true : false);
		}
		console.log(answers);
		var points = 0;
		var pointInc = [5, 5, 5, 9, 1, 1, 1];
		answers.forEach(function(value, i) {
			if (value) {
				points += pointInc[i];
			}
		});
		console.log("points = " + points);
		window.localStorage["points"] = points;
		window.localStorage["answers"] = answers;
		//window.localStorage["message"] = "Your chance for diabetes is" + (value/27)*100 + "%"; 
		if (points < 3) {
			window.localStorage["message"] = "You have very low risk for diabetes.";
		}
		else if (points >= 3 && points <= 9) {
			window.localStorage["message"] = "You are probably at low risk for having diabetes now. But don't just forget about it - especially if you are Hispanic/Latino, African American, American Indian, Asian American, or Pacific Islander. You may be at higher risk in the future.";
		} else if (points >= 10) {
			window.localStorage["message"] = "You are at greater risk for having diabetes. Only your health care provider can provider can determine if you have diabetes. At your next office visit, find out for sure.";
		}
	});

	$('#resultHead').text(window.localStorage["message"]);


});