const container = document.querySelector(".container");
const coffees = [
  {
    name: "Products",
    image: "images/tech1.jpeg"
  },
  {
    name: "Products",
    image: "images/tech2.jpeg"
  },
  {
    name: "Products",
    image: "images/tech3.jpeg"
  },
  {
    name: "Products",
    image: "images/tech9.jpeg"
  },
  {
    name: " Products",
    image: "images/tech5.jpeg"
  },
  {
    name: " Products",
    image: "images/tech6.jpeg"
  },
  {
    name: "Products",
    image: "images/tech7.jpeg"
  },
  {
    name: "Products",
    image: "images/tech8.jpeg"
  },
  {
    name: "Products",
    image: "images/tech9.jpeg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Buy</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}