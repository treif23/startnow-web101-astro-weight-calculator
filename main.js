// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

planets.reverse().forEach(output);
function output(item){
  item = item [0];
  var newOption = document.createElement('option');
  newOption.text = item;
  newOption.value = item;
  var list = document.getElementById('planets');
  list.appendChild(newOption);
};


function calculateWeight(weight, planetName) {
  // 2. Write the code to return the correct weight
 
 
  for( let i = 0; i < planets.length; i++) {
      
  console.log('name', planets[i][0]);
    if (planetName === planets[i][0]){
      
      var result = weight * planets[i][1]
    }
  
  }
  return result;
}

function handleClickEvent() {
  // 3. Create a variable called userWeight and assign the value of the user's weight.
  var userWeight = $('#user-weight').val();
  console.log(userWeight);
  
  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  var planetName = $('select option:selected').val();
  console.log(planetName);

  // 5. Create a variable called result and assign the value of the new calculated weight.

  var results = calculateWeight(userWeight, planetName);
  
  // 6. Write code to display the message shown in the screenshot.
$('#output').text("If you were on "+ planetName +", you would weigh " + results + "lbs!");
  
};

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

  $('#calculate-button').click(handleClickEvent);
  

  