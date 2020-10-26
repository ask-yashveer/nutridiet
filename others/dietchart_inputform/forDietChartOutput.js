$(document).ready(function() {
	$("#submit").click(function() {
		var gender = $("#gender").val();
		//console.log(gender);

		//var goal = $("#goal").val();
		//console.log(goal);

		var life_disease = $("#disease").val();
		//console.log(life_disease);

		var t_weight = document.getElementById("target_weight").value;
		//console.log(t_weight);

		var act_level = $("#activity_level").val();
		//console.log(act_level);

		var food_prefer = $("#food_prefer").val();
		//console.log(food_prefer);

		var age = document.getElementById("current_age").value;
		//console.log(age);

		var height = document.getElementById("current_height").value;
		//console.log(height);

		var c_weight = document.getElementById("current_weight").value;
		//console.log(c_weight);

		var pa;
		var calorie;
		if(gender==="male") {
			if(act_level==="sedentary") {
				pa = 1;
			}
			else if(act_level==="low_active") {
				pa = 1.12;
			}
			else if(act_level==="active") {
				pa = 1.27;
			}
			else if(act_level==="very_active") {
				pa = 1.54;
			}
			calorie = 864-(9.72)*age+pa*((14.2)*t_weight+503*(height/100));
		}
		else {
			if(act_level==="sedentary") {
				pa = 1;
			}
			else if(act_level==="low_active") {
				pa = 1.14;
			}
			else if(act_level==="active") {
				pa = 1.27;
			}
			else if(act_level==="very_active") {
				pa = 1.45;
			}
			calorie = 387-(7.31)*age+pa*((10.9)*t_weight+660.7*(height/100));
		}
		calorie = Math.floor(calorie);
		document.getElementById("demo").innerHTML = "Total calories required are "+calorie;

		//TEE for men  = 864 − 9.72 × age + act_level × (14.2 × t_weight + 503 × height)
		//TEE for women  = 387 − 7.31 × age + act_level × (10.9 × t_weight + 660.7 × height)

	});


});