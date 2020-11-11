// Custom JS
// wrapped if iffe to protect the global scope..
(function () {
  // Create a cart object to store all out data...
  let cart = {
    small: 0,
    medium: 0,
    large: 0,

    itemNumber: function () {
      return this.small + this.medium + this.large;
    },
  };

  // get ul element from DOM
  let list = document.getElementById("listElement");
  // get li elements from DOM
  let listItems = document.querySelectorAll(".size-select li");

  // function to check if active class is on li element
  function hasActive(e) {
    // checks if target has class active
    if (e.target.classList.contains("active")) {
      // if it does, remove it
      e.target.classList.remove("active");
    } else {
      // if it doesn't have the class loop through all li's and remove any instances of active class
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
      }
      e.target.classList.add("active");
    }
  }

  list.addEventListener("click", function (e) {
    hasActive(e);
  });

  let addToCartBtn = document.getElementById("addToCartBtn");
  let mobileCart = document.getElementById("mobileCart");
  let desktopCart = document.getElementById("desktopCart");

  function getSize() {
    // if listItems has class active get the value
    let itemSize = null;
    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].classList.contains("active")) {
        itemSize = listItems[i].getAttribute("value");
      }
    }

    return itemSize;
  }

  function updateCart() {
    let size = getSize();
    cart[size] += 1;
    mobileCart.innerHTML = cart.itemNumber();
    desktopCart.innerHTML = cart.itemNumber();
    console.log(cart);
  }

  addToCartBtn.addEventListener("click", function () {
    updateCart();
  });

  // Ran out of time to implement the nav hover..
  function navHover() {
    let navCart = document.getElementById("navCart");
    let miniCart = document.getElementById("miniCart");
    navCart.addEventListener("mouseover", function () {
      miniCart.classList.add("show");
    });
  }
})();
