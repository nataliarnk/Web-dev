 console.log("Task 1")
 var millis = 234245645335;
 var seconhour = 3600;
 console.log(millis%seconhour);

 // =================

 console.log("Task 2")
var string =  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";
var list = [];
for (var i = 0; i < string.length; i++){
	if (string[i] == 'a'){
		list.push(i)
	}
}
console.log("Result: " + list);
