function isEmpty(obj){
	for (var key in obj) {
        return false;
    }
    return true;
}

var obj = {};
console.log(isEmpty(obj)); 

obj["Work"] = "Fired!";

console.log(isEmpty(obj));

