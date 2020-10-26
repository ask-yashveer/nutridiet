<table>
	<tr>
		<th>Breakfast</th>
		<th>Mid-Morning</th>
		<th>Lunch</th>
		<th>Snacks</th>
		<th>Dinner</th>
	</tr>
	<tbody id="data">
	</tbody>
</table>
<script>
	var ajax=new XMLHttpRequest();
	var method="GET";
	var url="data.php";
	var asynchronous=true;

	ajax.open(method,url,asynchronous);
	ajax.send();
	ajax.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			var data=JSON.parse(this.responseText);
			console.log(data);
			var html="";
			for(var a=0; a<data.length; a++)
			{
				var firstName=data[a].breakfast;
				var firstName=data[a].midmorning;
				var firstName=data[a].lunch;
				var firstName=data[a].snacks;
				var firstName=data[a].dinner;

				html+="<tr>";
					html+="<td>"+breakfast+"</td>";
					html+="<td>"+midmorning+"</td>";
					html+="<td>"+lunch+"</td>";
					html+="<td>"+snacks+"</td>";
					html+="<td>"+dinner+"</td>";
				html+="</tr>";
			}
			//replacing 
			document.getElementById("data").innerHTML=html;
		}
	}
</script>