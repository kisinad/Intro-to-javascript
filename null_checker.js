for(count=1;count<=10;count++) //for loop to iterate screen prompt
{
	let num = prompt ("Please enter number:"); //Outputs prompt window
	//Determines weather number is less than 0 or greater & outputs appropriate response
	if (num>0)
		console.log(1);
	else if (num<0)
		console.log(-1);
	else
		console.log(0);
}