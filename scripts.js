// Object pokemonTypes, with objects internally. Currently doing: fire, water, grass, electric, ground
//type contains the

const pokemonTypes = {
  fire: {
    fire: 0.5,
    water: 2,
    grass: 0.5,
    electric: 1,
    ground: 2,
    flying: 1,
  },
  grass: {
    fire: 2,
    water: 0.5,
    grass: 0.5,
    electric: 0.5,
    ground: 0.5,
    flying: 2,
  },
  water: {
    fire: 0.5,
    water: 0.5,
    grass: 2,
    electric: 2,
    ground: 1,
    flying: 1,
  },
  electric: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 0.5,
    ground: 2,
    flying: 0.5,
  },
  ground: {
    fire: 1,
    water: 2,
    grass: 2,
    electric: 0,
    ground: 1,
    flying: 1,
  },
  flying: {
    fire: 1,
    water: 1,
    grass: 0.5,
    electric: 2,
    ground: 0,
    flying: 1,
  }
};

const pokemonTypeColors = {
  fire: "#F08030",
  grass: "#78C850",
  water: "#6890F0",
  electric: "#F8D030",
  ground: "#E0C068",
  flying: "#A890F0",
};

// Doc ready tODO remove this comment
$(function(){
  // adding all current types to the list in the ul
  // TODO: refactor this. make better.
  const displayCurrentTypes = function () {
    for (let type in pokemonTypes) {
      $(".listCurrentlySupported").append(`<li> ${type} </li>`);
      // add buttons to li items in .typeSelector ul 
    }
  };
  
  displayCurrentTypes();
  
  // refactor to call createButton
  const generateTypes = function() {
    for(let type in pokemonTypes) {
      // creating the list item
      const listItem = $('<li>');
      // button with type grabbing the name
      const button = $('<button>').addClass(type).addClass('type').text(type);
      // chagning the button to the type colour
      $(button).css('background-color', pokemonTypeColors[type]);
      listItem.append(button);
      $('.typeSelector').append(listItem);
    }
  }  
  generateTypes();

  const createButton = function(type){
    const button = $("<button>").addClass(type).addClass('type').text(type);
    $(button).css("background-color", pokemonTypeColors[type]);
    return button;
  }

  const showInfo = function(type) {
    const userChoice = $('<li>').text('User Choice:');
    userChoice.append(createButton(type));
    $('.typeSelector').append(userChoice);
    console.log(type);
    multiplierCalculator(type);
  }

  const multiplierCalculator = function(type) {
    //create a loop that runs through the type mutlipliers for the selected user type
    for(let multiplier in pokemonTypes[type]) {
      console.log(multiplier);
      console.log(pokemonTypes[type][multiplier]);
      const listItem = $('<li>');
      //generate the multiplier box
      listItem.append(createButton(multiplier));
      const multiplierItem = $('<p>').text(`Multiplier: ${pokemonTypes[type][multiplier]}x`);
      const splashText = $('<p>');
      // conditional statement to determine the effectiveness of the type.
      if(pokemonTypes[type][multiplier] === 0) {
        splashText.append(' No effect!');
      } else if (pokemonTypes[type][multiplier] === 0.5) {
        splashText.append("It's not very effective!");
      } else if (pokemonTypes[type][multiplier] === 2) {
        splashText.append("It's super effective!");
      } else {
        splashText.append("Regular damage");
      }
      listItem.append(multiplierItem).append(splashText);
      $('.typeSelector').append(listItem);
    }
  }

  $('.type').on("click", function() {
    // save user selection
    // removing the type class in order to correct retrive the type information
    $(this).removeClass('type');
    const selectedClass = $(this).attr('class');
    // emptying the list
    $('.typeSelector').empty();
    showInfo(selectedClass);
  })
  
})

//smooth scroll, foudn this code. 
$(".btnGetStarted").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".typeSelector").offset().top,
    },
    2000
  );
});
