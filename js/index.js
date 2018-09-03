window.onload=function(){
	var array=new Array(20);
	for(var i=0;i<array.length;i++)
	{
		array[i]=Math.round(Math.random()*100);
		
	}
	console.log(array)
	var sum=0;
	for(var i=0;i<array.length;i++)
	{
		sum+=array[i];
		
	}
	console.log(sum);
	var mix=array[0];
	for(var i=0;i<array.length;i++)
	{
		if(array[i]>mix)
		{
			mix=array[i];
		}
	}
	console.log(mix);
	var min=array[0];
	for(var i=0;i<array.length;i++)
	{
		if(array[i]<min)
		{
			min=array[i];
		}
	}
	console.log(min);
	var temp=0;
	for(var j=0;j<array.length;j++)
	{
		for(var i=j;i<=array.length;i++)
		{
			if(array[i]>array[j])
			{
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
			}
		}
	}
	console.log(array[18]);
	var arrA=new Array();
	var arrB=new Array();
	for(var i=0;i<array.length;i++)
	{
		if(array[i]%2==1)
		{
			arrA.push(array[i])
		}
		else{
			arrB.push(array[i])
		}
	}
	console.log(arrA)
	console.log(arrB)
}
