const items = [
  {
    name: "Meat Lasagna",
    description:
      "Fresh baked lasagna layered with ground beef, ricotta, mozzarella and house made tomato sauce",
    type: "Pasta",
    imageURL: "./assets/MeatLasagna.jpg",
    price: 9.99,
    spicy: false,
    menuOrder: 0,
  },
  {
    name: "Calamari",
    description:
      "Tender squid rings fried in a light seasoning, served with balsamic mayo dip",
    type: "Starters",
    imageURL: "./assets/Calamari.jpg",
    price: 8.5,
    spicy: false,
    menuOrder: 1,
  },
  {
    name: "Margherita",
    description:
      "Fresh sliced mozzarella with a special plum tomato sauce and fresh basil",
    type: "Pizza",
    imageURL: "./assets/MargaritaPizza.jpg",
    price: 15.95,
    spicy: false,
    menuOrder: 1,
  },
  {
    name: "Baked Manicotti",
    description:
      "Filled with ricotta cheese and topped with romano, mozzarella and a side of pasta",
    type: "Pasta",
    imageURL: "./assets/manicotti.jpg",
    price: 9.99,
    spicy: false,
    menuOrder: 3,
  },
  {
    name: "Chicken Parmigiana",
    description:
      "Freshed breaded chicken breast with house made tomato sauce, romano, mozzarella cheese and a side of pasta",
    type: "Pasta",
    imageURL: "./assets/chickenParmigian.jpg",
    price: 10.29,
    spicy: false,
    menuOrder: 6,
  },
  {
    name: "Eggplant Parmigiana",
    description:
      "Layers of fresh battered eggplant with house made tomato sauce, romano, mozzarella chees and a side of pasta",
    type: "Pasta",
    imageURL: "./assets/Eggplant.jpg",
    price: 8.99,
    spicy: false,
    menuOrder: 5,
  },
  {
    name: "Spinach Pizza",
    description: "Garlic pizza with spinach, ricotta and mozzarella",
    type: "Pizza",
    imageURL: "./assets/SpinachPizzza.jpg",
    price: 16.5,
    spicy: false,
    menuOrder: 2,
  },
  {
    name: "Grandma's Pizza",
    description:
      "Sicilian pizza crust with fresh sliced mozzarella, marinara sauce, fresh basil and olive oil",
    type: "Pizza",
    imageURL: "./assets/grandmaPizza.jpg",
    price: 19.95,
    spicy: false,
    menuOrder: 3,
  },
  {
    name: "Soup of the Day",
    description: "Please ask your server",
    type: "Starters",
    imageURL: "./assets/Soup.jpg",
    price: 6.5,
    spicy: false,
    menuOrder: 2,
  },
  {
    name: "Standard",
    description:
      "White pizza with fresh sliced mozzarella, prosciutto, white sauce, fresh basil and olive oil",
    type: "Pizza",
    imageURL: "./assets/Standard.jpg",
    price: 19.95,
    spicy: true,
    menuOrder: 0,
  },
  {
    name: "Baked Ziti",
    description: "With tomato sauce and mozzarella",
    type: "Pasta",
    price: 8.99,
    imageURL: "./assets/baked ziti.jpg",
    spicy: false,
    menuOrder: 4,
  },
  {
    name: "Baked Ravioli",
    description:
      "Filled with ricotta cheese and topped with romano, mozzarella and house made tomato sauce",
    type: "Pasta",
    imageURL: "./assets/bakedRavioli.jpg",
    price: 9.99,
    spicy: false,
    menuOrder: 2,
  },
  {
    name: "Stuffed Shells",
    description:
      "Filled with ricotta cheese and topped with romano, mozzarella and house made tomato sauce",
    type: "Pasta",
    imageURL: "./assets/stuffedShells.jpg",
    price: 9.99,
    spicy: false,
    menuOrder: 1,
  },
  {
    name: "Chicken Wing",
    description:
      "Shaved breaded chicken with a special blend of hot wing sauce and bleu cheese with mozzarella",
    type: "Pizza",
    imageURL: "./assets/ChickenWings.jpg",
    price: 19.95,
    spicy: true,
    menuOrder: 4,
  },
  {
    name: "Insalata Caprese",
    description:
      "A classic Italian salada made with freshly sliced mozzarella, beef tomatoes and fresh basil",
    type: "Starters",
    imageURL: "./assets/Caprese.jpg",
    price: 6.5,
    spicy: false,
    menuOrder: 0,
  },
];

//sort the array with menuOrder
items.sort((first, second) => {
  if (first.menuOrder < second.menuOrder) {
    return first.menuOrder - second.menuOrder;
  }
});

//format the price into 2 decimal points
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

//create unique category name
const category = Object.values(
  items.reduce((cat, { type }) => {
    cat[type] = { type };
    return cat;
  }, {})
);

var main = document.getElementById("main");

//Title div
var menuTitleBox = document.createElement("div");
var menuTitle = document.createElement("h1");
menuTitle.innerHTML = "Fancy Italian Restaturant";

menuTitleBox.appendChild(menuTitle);
menuTitleBox.classList.add("spicy-option");
main.appendChild(menuTitleBox);

var spicyOptionDiv = document.createElement("div");
spicyOptionDiv.classList.add("spicyOptionDiv");
main.appendChild(spicyOptionDiv);

// Spicy Menu Enable Option
var spicyOptionTitle = document.createElement("span");
spicyOptionTitle.innerHTML = "Enable Spicy Options";
spicyOptionDiv.appendChild(spicyOptionTitle);
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "spicyoption";
checkbox.checked = true;
checkbox.addEventListener("click", (e) => spicyOptionChanged(e), false);
spicyOptionDiv.appendChild(checkbox);

var grid = document.createElement("div");
grid.classList.add("grid");
main.appendChild(grid);

//Looping over the all the category
for (let i = 0; i < category.length; i++) {
  var type = document.createElement("h2");

  type.id = category[i].type;
  type.classList.add("grid-span");
  type.innerHTML = category[i].type;
  type.style.fontFamily = "cursive";
  grid.appendChild(type);

  //create outer div

  items.filter((data) => {
    if (category[i].type == data.type) {
      var itembox = document.createElement("div");
      itembox.classList.add("item-box");

      // Image setting
      var image = document.createElement("img");
      image.style.height = "150px";
      image.style.width = "150px";
      image.classList.add("image");
      image.src = data.imageURL;

      itembox.appendChild(image);

      var itemDetail = document.createElement("div");
      itemDetail.classList.add("item-detail");

      var name = document.createElement("span");
      name.classList.add("textGap");
      name.style.fontWeight = "bold";
      name.innerHTML = data.name;

      //Spicy icon
      if (data.spicy) {
        var spicy = document.createElement("span");
        spicy.classList.add("spicy");
        name.appendChild(spicy);
        itembox.classList.add("spicyItem");
      }

      var price = document.createElement("span");
      price.classList.add("textGap");
      price.innerHTML = "$" + formatter.format(data.price);
      price.style.fontStyle = "italic";
      price.classList.add("desc");
      var desc = document.createElement("span");
      desc.classList.add("textGap");
      desc.innerHTML = data.description;
      desc.classList.add("desc");

      itemDetail.appendChild(name);
      itemDetail.appendChild(price);
      itemDetail.appendChild(desc);

      itembox.appendChild(itemDetail);
      grid.appendChild(itembox);
    }
  });
}

//Checkbox handling
function spicyOptionChanged(e) {
  var spicyElement = document.getElementsByClassName("spicyItem");
  console.log(spicyElement);
  spicyElement = [...spicyElement];
  console.log(spicyElement);
  if (e.target.checked) {
    for (let d in spicyElement) {
      spicyElement[d].style.display = "flex";
    }
  } else {
    for (let d in spicyElement) {
      spicyElement[d].style.display = "none";
    }
  }
}
