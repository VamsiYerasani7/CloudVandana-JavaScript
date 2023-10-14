var array = [];
var size = 10;

for(var i=0; i<size; i++) 
{
	array[i] = prompt('Enter Element' + (i+1) +' ');
}

array.sort(function (a, b)
    {
      return a - b;
    }
);

console.log("Ascending Order:" + array);