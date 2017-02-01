//Author__DylanOsborn__
//initialize function called when the script loads
  function initialize(){
		//console.log('initialize');
		cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	// each city and population is an object in the array
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];
	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

		//calling functions addColumns and addEvents
		addColumns(cityPop);
		addEvents();
		//console.log('addEvents');

};
// function to add the population column in table
function addColumns(cityPop){

	//console.log("addColumns");
	//console.log(cityPop);
//jquery assigns the function to execute for each row of the table on the html
	$('tr').each(function(i){
				// when i is equal to zero or for the top row the header
	    	if (i == 0){
					// the header City Size is added to the header cell (th)
	    		$(this).append('<th>City Size</th>');
	    	} else {
					//var citySize created
	    		var citySize;
					// when the city pop is less then 100,000 the cell under citySizeheader for that city displays small
	    		if (cityPop[i-1].population < 100000){
	    			//console.log("Small");
						citySize = 'Small';
						//console.log(citySize);
						// when the city pop is less then 500,000 the cell under citysize header for that city displays medeium
	    		} else if (cityPop[i-1].population < 500000){
						//console.log("Medium");
						citySize = 'Medium';
						//console.log(citySize);

						// when the city pop is greater then 500,000 the cell under citysize header for that city displays large
	    		} else {
						//console.log("Large");
						citySize = 'Large';
						//console.log(citySize);

	    		};
					//console.log(citySize);
          //jquery method to conatina the cell for citySize
					// jquery adds the citysize to the cell on the html
	    		$(this).append('<td>' + citySize + '</td>');
	    	};
    });
};

// funciton to add color to the txt when mouse is over text
function addEvents(){
	//console.log("addEvents");
	//jquery selector of the 'table' for the mouseover function
	$('table').mouseover(function(){
		//when mouse is over the text the var color will print string 'rgb('
		var color = "rgb(";
		//console.log('color');
		//for loop that will run 3 times selecting differnt color dn values at random
		for (var i=0; i<3; i++){
			//console.log(i);
			// color seclected from dn value at random a number between 0 and 1
      //round selects nearest integer of the random number
      //number is multiplied by 255 to achieve the random dn value for the color change when mouse hovers over table
			var random = Math.round(Math.random() * 255);
			// random value is concatinated to the the color value
			color += random;
			//console.log('random');


			// when i is less then two a ',' is concatinated to the value
			if (i<2){
				color += ",";
				// when i is greater than 2, at the third spot ')' is concatinated
			} else {
				color += ")";
		};

	};
	//console.log('color', color);
	//jquery method that returns a style property color
	$(this).css('color', color);
});
  //function clickme allows alert to pop up when mouse clicks on table
	function clickme(){
  //the alert in the box will read 'Hey, you clicked me!'
  alert('Hey, you clicked me!');

	};
//pop up box occurs a single time
//jquery selector for the table element for the clickme function
$('table').on('click', clickme);


};




//call the initialize function when the document has loaded
$(document).ready(initialize);
