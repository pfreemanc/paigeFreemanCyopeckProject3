// creating namespace object
const pokemonApp = {};

// Object pokemonTypes, with objects internally. All types are set up with all their mulitpliers.
// source for multiplier information: https://bulbapedia.bulbagarden.net/wiki/Type#Type_chart
pokemonApp.pokemonTypes = {
  fire: {
    fire: 0.5,
    water: 2,
    grass: 0.5,
    electric: 1,
    ground: 2,
    flying: 1,
    ghost: 1,
    normal: 1,
    fighting: 1,
    rock: 2,
    poison: 1,
    bug: 0.5,
    steel: 0.5,
    psychic: 1,
    ice: 0.5,
    dark: 1,
    fairy: 0.5,
    dragon: 1,
  },
  grass: {
    fire: 2,
    water: 0.5,
    grass: 0.5,
    electric: 0.5,
    ground: 0.5,
    flying: 2,
    ghost: 1,
    normal: 1,
    fighting: 1,
    rock: 1,
    poison: 2,
    bug: 2,
    steel: 1,
    psychic: 1,
    ice: 2,
    dark: 1,
    fairy: 1,
    dragon: 1,
  },
  water: {
    fire: 0.5,
    water: 0.5,
    grass: 2,
    electric: 2,
    ground: 1,
    flying: 1,
    ghost: 1,
    normal: 1,
    fighting: 1,
    rock: 1,
    poison: 1,
    bug: 1,
    steel: 0.5,
    psychic: 1,
    ice: 0.5,
    dark: 1,
    fairy: 1,
    dragon: 1,
  },
  electric: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 0.5,
    ground: 2,
    flying: 0.5,
    ghost: 1,
    normal: 1,
    fighting: 1,
    rock: 1,
    poison: 1,
    bug: 1,
    steel: 0.5,
    psychic: 1,
    ice: 1,
    dark: 1,
    fairy: 1,
    dragon: 1,
  },
  ground: {
    fire: 1,
    water: 2,
    grass: 2,
    electric: 0,
    ground: 1,
    flying: 1,
    ghost: 1,
    normal: 1,
    fighting: 1,
    rock: 0.5,
    poison: 0.5,
    bug: 1,
    steel: 1,
    psychic: 1,
    ice: 2,
    dark: 1,
    fairy: 1,
    dragon: 1,
  },
  flying: {
    fire: 1,
    water: 1,
    grass: 0.5,
    electric: 2,
    ground: 0,
    flying: 1,
    ghost: 1,
    normal: 1,
    fighting: 0.5,
    rock: 2,
    poison: 1,
    bug: 0.5,
    steel: 1,
    psychic: 1,
    ice: 2,
    dark: 1,
    fairy: 1,
    dragon: 1,
  },
  ghost: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    ground: 1,
    flying: 1,
    ghost: 2,
    normal: 0,
    fighting: 0,
    rock: 1,
    poison: 0.5,
    bug: 0.5,
    steel: 1,
    psychic: 1,
    ice: 1,
    dark: 2,
    fairy: 1,
    dragon: 1,
  },
  normal: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    ground: 1,
    flying: 1,
    ghost: 0,
    normal: 1,
    fighting: 2,
    rock: 1,
    poison: 1,
    bug: 1,
    steel: 1,
    psychic: 1,
    ice: 1,
    dark: 1,
    fairy: 1,
    dragon: 1,
  },
  fighting: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    ground: 1,
    flying: 2,
    ghost: 1,
    normal: 1,
    fighting: 1,
    rock: 0.5,
    poison: 1,
    bug: 0.5,
    steel: 1,
    psychic: 2,
    ice: 1,
    dark: 0.5,
    fairy: 2,
    dragon: 1,
  },
  rock: {
    fire: 0.5,
    water: 2,
    grass: 2,
    electric: 1,
    ground: 2,
    flying: 0.5,
    ghost: 1,
    normal: 0.5,
    fighting: 2,
    rock: 1,
    poison: 0.5,
    bug: 1,
    steel: 2,
    psychic: 1,
    ice: 1,
    dark: 1,
    fairy: 1,
    dragon: 1,
  },
  poison: {
    fire: 1,
    water: 1,
    grass: 0.5,
    electric: 1,
    ground: 2,
    flying: 1,
    ghost: 1,
    normal: 1,
    fighting: 0.5,
    rock: 1,
    poison: 0.5,
    bug: 0.5,
    steel: 1,
    psychic: 2,
    ice: 1,
    dark: 1,
    fairy: 0.5,
    dragon: 1,
  },
  bug: {
    fire: 2,
    water: 1,
    grass: 0.5,
    electric: 1,
    ground: 0.5,
    flying: 2,
    ghost: 1,
    normal: 1,
    fighting: 0.5,
    rock: 2,
    poison: 1,
    bug: 1,
    steel: 1,
    psychic: 1,
    ice: 1,
    dark: 1,
    fairy: 1,
    dragon: 1,
  },
  steel: {
    fire: 2,
    water: 1,
    grass: 0.5,
    electric: 1,
    ground: 2,
    flying: 0.5,
    ghost: 1,
    normal: 0.5,
    fighting: 2,
    rock: 0.5,
    poison: 0,
    bug: 0.5,
    steel: 0.5,
    psychic: 0.5,
    ice: 0.5,
    dark: 1,
    fairy: 0.5,
    dragon: 0.5,
  },
  psychic: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    ground: 1,
    flying: 1,
    ghost: 2,
    normal: 1,
    fighting: 0.5,
    rock: 1,
    poison: 1,
    bug: 2,
    steel: 1,
    psychic: 0.5,
    ice: 1,
    dark: 2,
    fairy: 1,
    dragon: 1,
  },
  ice: {
    fire: 2,
    water: 1,
    grass: 1,
    electric: 1,
    ground: 1,
    flying: 1,
    ghost: 1,
    normal: 1,
    fighting: 2,
    rock: 2,
    poison: 1,
    bug: 1,
    steel: 2,
    psychic: 1,
    ice: 0.5,
    dark: 1,
    fairy: 1,
    dragon: 1,
  },
  dragon: {
    fire: 0.5,
    water: 0.5,
    grass: 0.5,
    electric: 0.5,
    ground: 1,
    flying: 1,
    ghost: 1,
    normal: 1,
    fighting: 1,
    rock: 1,
    poison: 1,
    bug: 1,
    steel: 1,
    psychic: 1,
    ice: 2,
    dark: 1,
    fairy: 2,
    dragon: 2,
  },
  dark: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    ground: 1,
    flying: 1,
    ghost: 0.5,
    normal: 1,
    fighting: 2,
    rock: 1,
    poison: 1,
    bug: 2,
    steel: 1,
    psychic: 0,
    ice: 1,
    dark: 0.5,
    fairy: 2,
    dragon: 1,
  },
  fairy: {
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    ground: 1,
    flying: 1,
    ghost: 1,
    normal: 1,
    fighting: 0.5,
    rock: 1,
    poison: 2,
    bug: 0.5,
    steel: 2,
    psychic: 1,
    ice: 1,
    dark: 0.5,
    fairy: 1,
    dragon: 1,
  },
};

// creating the background color object.
pokemonApp.pokemonTypeColors = {
  fire: "#F08030",
  grass: "#78C850",
  water: "#6890F0",
  electric: "#F8D030",
  ground: "#E0C068",
  flying: "#A890F0",
  ghost: "#705898",
  normal: "#A8A878",
  fighting: "#C03028",
  rock: "#B8A038",
  poison: "#A040A0",
  bug: "#A8B820",
  steel: "#B8B8D0",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

// init function that calls the important functions needed.
pokemonApp.init = function () {
  pokemonApp.displayCurrentTypes();
  pokemonApp.generateTypes();
  // event listener for when the user selects their type choice.
  $(".type").on("click", function () {
    // storing the value of the radio value. radio1 is checked by default. storing that. if returns off, then change the variable to have a false value.
    pokemonApp.radioVal = $('#radio1:checked').val();
    if(pokemonApp.radioVal === 'on') {
      pokemonApp.radioVal = true;
    } else {
      pokemonApp.radioVal = false;
    }
    // changes h2, removes h3 dynamically.
    $("h2").text("You Chose....");
    $("h3").empty();
    $("form").empty();
    // save user selection
    // removing the type class in order to correct retrive the type information
    $(this).removeClass("type");
    const selectedClass = $(this).attr("class");
    // emptying the list in order to populate information successfully.
    $(".typeSelector").empty().addClass("listPostChoice");
    pokemonApp.showInfo(selectedClass);
    pokemonApp.genStartOverBtn();
    // reloads the page on click
    $('.btnStartOver').on("click", function() {
      location.reload();
    });
  });

};

pokemonApp.genStartOverBtn = function() {
  const button = $('<button>').addClass('btnStartOver').text('Start Over?')
  $('main .container').append(button)
}
// function that displays the current supported types that the user can select.
pokemonApp.displayCurrentTypes = function () {
  for (let type in pokemonApp.pokemonTypes) {
    // add buttons to li items in .typeSelector ul
    $(".listCurrentlySupported").append(`<li> ${type} </li>`);
  }
};

// function that generates the types that are allowed to be chosen. Adds dynamically to the empty UL.
pokemonApp.generateTypes = function () {
  for (let type in pokemonApp.pokemonTypes) {
    // creating the list item
    const listItem = $("<li>");
    // button with type grabbing the name
    // TODO: refactor with generatebutton.
    const button = pokemonApp.createButton(type);
    // chagning the button to the type colour
    listItem.append(button);
    $(".typeSelector").append(listItem);
  }
};

// function that creates the button. Adds the class with the type that's passed on. Also changes the background colour to use the saved background colours that are in the pokemonTypeColors object
pokemonApp.createButton = function (type) {
  const button = $("<button>").addClass(type).addClass("type").text(type);
  $(button).css("background-color", pokemonApp.pokemonTypeColors[type]);
  return button;
};

// Function that wil call the multiplierCalculator. Also generates the user choice information.
pokemonApp.showInfo = function (type) {
  const userChoice = $("<li>").addClass("listUserChoice");
  userChoice.append(pokemonApp.createButton(type))
  $(".typeSelector").append(userChoice);
  pokemonApp.multiplierCalculator(type, pokemonApp);
};

// sorting the list to show the information with the super effective type multipliers first. As well as hiding the elements that have the toRemove class.
pokemonApp.sortList = function() {
  $('.noDamage').prependTo('.listPostChoice')
  $('.littleDamage').prependTo('.listPostChoice');
  $('.mostDamage').prependTo('.listPostChoice');
  $('.listUserChoice').prependTo('.listPostChoice');
  $(".listTypeMultiplier.toRemove").hide();
};

pokemonApp.multiplierCalculator = function (type, boolean) {
  //create a loop that runs through the type mutlipliers for the selected user type
  for (let multiplier in pokemonApp.pokemonTypes[type]) {
    const listItem = $("<li>").addClass("listTypeMultiplier");
    //adding a div to hold the text results to style easier.
    const container = $("<div>");
    // generate the icon/button that shows the types.
    listItem.append(pokemonApp.createButton(multiplier));
    // generate the multiplier text information box.
    const multiplierItem = $("<p>").text(
      `${pokemonApp.pokemonTypes[type][multiplier]}x damage against ${type} type`
    );
    // conditional statement to determine the effectiveness of the type, adding splash text based on that.
    // adding classes as well in order to make sorting the list easier.
    const splashText = $("<p>");
    if (pokemonApp.pokemonTypes[type][multiplier] === 0) {
      $(splashText).text("No effect!");
      $(listItem).addClass('noDamage')
    } else if (pokemonApp.pokemonTypes[type][multiplier] === 0.5) {
      $(splashText).text("It's not very effective!");
      $(listItem).addClass('littleDamage')
    } else if (pokemonApp.pokemonTypes[type][multiplier] === 2) {
      $(splashText).text("It's super effective!");
      $(listItem).addClass('mostDamage')
    } else {
      // if radioVal returns true, user wants all type responses. 
      if(pokemonApp.radioVal) {
        $(splashText).text("Regular damage!");
      }
      // adding a class toRemove in order to easily hide those list items during the sortList function.
      else {
        $(listItem).addClass('toRemove');
      }
    }
    // appending the container to the list item as well as adding the dynamically generated content to the container.
    $(listItem).append($(container).append(multiplierItem).append(splashText));
    //final step: adding to listItem.
    $(".listPostChoice").append(listItem);
  }
  pokemonApp.sortList();
};

// Doc ready TODO remove this comment
$(function () {
  // adding all current types to the list in the ul
  pokemonApp.init();
  // function that kicks off the display of the type information based on the user choice.
  //smooth scroll, foudn this code.
  $(".btnGetStarted").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".typeSelector").offset().top,
      },
      2000
    );
  });
});
