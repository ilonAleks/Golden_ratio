window.onload = function () {
	var canvas =
		document.getElementById("canvas");
	var context =
		canvas.getContext("2d");

	context.rect(0, 0, 1130, 1130);
	context.stroke();

	context.rect(1130, 0, 698, 698);
	context.stroke();

	context.rect(1396, 698, 432, 432);
	context.stroke();

	context.rect(1130, 864, 266, 266);
	context.stroke();

	context.rect(1130, 698, 165, 165);
	context.stroke();

	context.rect(1295, 698, 102, 102);
	context.stroke();

	context.rect(1333, 801, 63, 63);
	context.stroke();

	context.beginPath();//создать новый путь
	context.arc(1130, 1130, 1130, 3.14, 1.5 * Math.PI);
	context.stroke();

	context.beginPath();
	context.arc(1130, 698, 698, 0, 1.5 * Math.PI, true);
	context.stroke();

	context.beginPath();
	context.arc(1396, 698, 432, 0, 1.5);
	context.stroke();

	context.beginPath();
	context.arc(1396, 864, 266, 1.5, 1 * Math.PI);
	context.stroke();

	context.beginPath();
	context.arc(1295, 863, 165, 3.14, 1.5 * Math.PI);
	context.stroke();

	context.beginPath();
	context.arc(1295, 801, 102, 0, 1.5 * Math.PI, true);
	context.stroke();

	context.beginPath();
	context.arc(1333, 801, 63, 0, 1.5);
	context.stroke();

	context.font = '64px Arial';
	context.fillStyle = "black";
	context.fillText("1130", 565, 565);

	context.font = '50px Arial';
	context.fillStyle = "black";
	context.fillText("698", 1479, 349);

	context.font = '40px Arial';
	context.fillStyle = "black";
	context.fillText("432", 1612, 914);

	context.font = '30px Arial';
	context.fillStyle = "black";
	context.fillText("266", 1263, 997);

	context.font = '25px Arial';
	context.fillStyle = "black";
	context.fillText("165", 1212.5, 780.5);

	context.font = '20px Arial';
	context.fillStyle = "black";
	context.fillText("102", 1340, 749);

	context.font = '14px Arial';
	context.fillStyle = "black";
	context.fillText("63", 1364, 831);
}