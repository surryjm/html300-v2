// jQuery Doc Ready
$(function() {
  // Set up some data and variables
  const array = [10, 20, 30, 40, 50];
  

  // forEach

  //Click event on the submit input
  $("#forEach").on("click", function() {
    
    //Grab the input value
    let input = $("#forEachText");
    let value = input.val();

    //Push input value to array
    array.push(value);

    //Use forEach method to display each of the array values/keys on the page
    array.forEach(function(value, key) {
    $("#forEachDisplay").append(`value: ${value},&nbsp key: ${key}<br>`);
    });
  });



  // map

   //Click event on the submit input
  $("#map").on("click", function() {
    
    //Grab the input value
    let input = $("#mapText");
    let value = input.val();

    //Use map method to create new array with array values multiplied by the user input
    let arrayMap = array.map(x => x * value);

    //Display the new array values on the page
    $("#mapDisplay").append(`<br>(multiplied by ${value})<br> ${arrayMap}<br>`);
  });



  // filter

   //Click event on the submit input
  $("#filter").on("click", function() {
    
    //Grab the input value and parse into number
    let input = $("#filterText");
    let value = input.val();
    let num = parseInt(value);

    //Use filter method to create new array with all array values 
    //that are greater than the user input
    let filterArray = array.filter(x => x > num);
    
    //If the new array is not populated, then display first message
    //If the new array is populated, then display new array values
    if (filterArray.length == 0) {
      $("#filterDisplay").append(`No array values are greater than ${num}<br>`);
    } else {
      $("#filterDisplay").append(`${filterArray}<br>`);
    };
  });



  // includes

   //Click event on the submit input
  $("#includes").on("click", function() {
    
    //Grab the input value and parse into number
    let input = $("#includesText");
    let value = input.val();
    let num = parseInt(value);

    //Use includes method to see if the array includes the user input value 
    let includesArray = array.includes(num);

    //If the array does not include the user input value, display first message
    //If the array does include the user input value, display second message
    if (!includesArray) {
      $("#includesDisplay").append(`The array does not include ${num}<br>`);
    } else {
      $("#includesDisplay").append(`The array includes ${num}<br>`);
    }
  });



  // every

   //Click event on the submit input
  $("#every").on("click", function() {
    
    //Grab the input value and parse into number
    let input = $("#everyText");
    let value = input.val();
    let num = parseInt(value);

    //Condition that every method will check against
    let greaterThanValue = (x) => x < num;

    //Use every method to check array values against the previous function
    //If the array value is less than user input value, display first message
    //If the array value is greater than user input value, display second message
    if (array.every(greaterThanValue) == true) {
      $("#everyDisplay").append(`The array values are less than ${num}<br><br>`);
    } else {
      $("#everyDisplay").append(`The array values are greater than (or equal to) ${num}<br><br>`);
    }
  });



  // find

   //Click event on the submit input
  $("#find").on("click", function() {
    
    //Grab the input value and parse into number
    let input = $("#findText");
    let value = input.val();
    let num = parseInt(value);

    //Use find method to find the first array item 
    //where array item is greater than the user input value
    let foundValues = array.find(x => x > num);
    console.log(array);
    console.log(foundValues);

    //If there is an array item that is greater than user input value,
    //display first message
    //If there is no array item that is greater than user input value,
    //display second message
    if (array.find(x => x > num)) {
      $("#findDisplay").append(`${foundValues} is the first value in the array greater than ${num}<br><br>`);
    } else {
        $("#findDisplay").append(`No array values are greater than ${num}<br><br>`);
    };
  });

  
});