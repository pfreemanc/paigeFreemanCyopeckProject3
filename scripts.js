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
    ghost: 1,
  },
  grass: {
    fire: 2,
    water: 0.5,
    grass: 0.5,
    electric: 0.5,
    ground: 0.5,
    flying: 2,
    ghost: 1,
  },
  water: {
    fire: 0.5,
    water: 0.5,
    grass: 2,
    electric: 2,
    ground: 1,
    flying: 1,
    ghost: 1,
  },
  electric: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 0.5,
    ground: 2,
    flying: 0.5,
    ghost: 1,

  },
  ground: {
    fire: 1,
    water: 2,
    grass: 2,
    electric: 0,
    ground: 1,
    flying: 1,
    ghost: 1,
  },
  flying: {
    fire: 1,
    water: 1,
    grass: 0.5,
    electric: 2,
    ground: 0,
    flying: 1,
    ghost: 1,
  },
  ghost: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1, 
    ground: 1,
    flying: 1,
    ghost: 2,
  }
};

const pokemonTypeColors = {
  fire: "#F08030",
  grass: "#78C850",
  water: "#6890F0",
  electric: "#F8D030",
  ground: "#E0C068",
  flying: "#A890F0",
  ghost: "#705898",
};

// creating namespace object

// Doc ready TODO remove this comment
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

  // function for generating a button.
  const createButton = function(type){
    const button = $("<button>").addClass(type).addClass('type').text(type);
    $(button).css("background-color", pokemonTypeColors[type]);
    return button;
  }

  // function that kicks off the display of the type information based on the user choice.
  const showInfo = function(type) {
    const userChoice = $('<li>').addClass("listUserChoice").html('<p>' + 'User Choice:');
    userChoice.append(createButton(type));
    $('.typeSelector').append(userChoice);
    multiplierCalculator(type);
  }

  const multiplierCalculator = function(type) {
    //create a loop that runs through the type mutlipliers for the selected user type
    for(let multiplier in pokemonTypes[type]) {
      const listItem = $('<li>').addClass("listTypeMultiplier");
      //adding a div to hold the text results to style easier.
      const container = $('<div>');
      // generate the icon/button that shows the types. 
      listItem.append(createButton(multiplier));
      //generate the multiplier text information box.
      const multiplierItem = $('<p>').text(`${pokemonTypes[type][multiplier]}x damage against ${type} type`);
      // conditional statement to determine the effectiveness of the type, adding splash text based on that.
      const splashText = $('<p>');
      if(pokemonTypes[type][multiplier] === 0) {
        $(splashText).text('No effect!');
      } else if (pokemonTypes[type][multiplier] === 0.5) {
        $(splashText).text("It's not very effective!");
      } else if (pokemonTypes[type][multiplier] === 2) {
        $(splashText).text("It's super effective!");
      } else {
        $(splashText).text("Regular damage!");
      }
      // appending the container to the list item as well as adding the dynamically generated content to the container.
      $(listItem).append($(container).append(multiplierItem).append(splashText));
      //final step: adding to listItem.
      $('.typeSelector').append(listItem);
    }
  }

  // event listener for when the user selects their type choice.
  $('.type').on("click", function() {
    // save user selection
    // removing the type class in order to correct retrive the type information
    $(this).removeClass('type');
    const selectedClass = $(this).attr('class');
    // emptying the list in order to populate information successfully.
    $('.typeSelector').empty().addClass('listPostChoice');
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
