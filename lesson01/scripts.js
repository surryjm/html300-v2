// jQuery Doc Ready
$(function() {
  // Set up some data and variables
  const array = [10, 20, 30, 40, 50];
  
  // forEach
  $("#forEach").on("click", function() {
    
    let input = $("#forEachText");
    let value = input.val();
    array.push(value);

    array.forEach(function(value, key) {
    $("#forEachDisplay").append(`value: ${value},&nbsp key: ${key}<br>`);
    //input.val("");
    });
  });


  // map
  $("#map").on("click", function() {
    let input = $("#mapText");
    let value = input.val();

    let arrayMap = array.map(x => x * value);
    $("#mapDisplay").append(`<br>(multiplied by ${value})<br> ${arrayMap}<br>`);
  });


  // filter
  $("#filter").on("click", function() {
    let input = $("#filterText");
    let value = input.val();
    let num = input.val();

    let filterArray = array.filter(x => x > num);
    
    if (filterArray.length == 0) {
      $("#filterDisplay").append(`No array values are greater than ${num}<br>`);
    } else {
      $("#filterDisplay").append(`${filterArray}<br>`);
    };
  });


  // includes
  $("#includes").on("click", function() {
    let input = $("#includesText");
    let value = input.val();
    let num = parseInt(value);
    let includesArray = array.includes(num);
    if (!includesArray) {
      $("#includesDisplay").append(`The array does not include ${num}<br>`);
    } else {
      $("#includesDisplay").append(`The array includes ${num}<br>`);
    }
  });


  // every
  $("#every").on("click", function() {
    let input = $("#everyText");
    let value = input.val();
    let num = parseInt(value);
    let greaterThanValue = (x) => x < num;
    if (array.every(greaterThanValue) == true) {
      $("#everyDisplay").append(`The array values are less than ${num}<br><br>`);
    } else {
      $("#everyDisplay").append(`The array values are greater than (or equal to) ${num}<br><br>`);
    }
  });


  // find
  $("#find").on("click", function() {
    let input = $("#findText");
    let value = input.val();
    let num = parseInt(value);

    let foundValues = array.find(x => x > num);
    console.log(array);
    console.log(foundValues);

    if (array.find(x => x > num)) {
      $("#findDisplay").append(`${foundValues} is the first value in the array greater than ${num}<br><br>`);
    } else {
        $("#findDisplay").append(`No array values are greater than ${num}<br><br>`);
    };
  });

  
});