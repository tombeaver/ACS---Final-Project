// used jQuery for some clicking event methods
$(document).ready(function() {
        // Open / Close the New Guest Menu
        $("#new").on("click", function() {
            $(".guest").css({ left: 0 })
            $(".list").css({ left: "-100%" })
        })

        $("#guestList").on("click", function() {
            $(".list").css({ left: 0 })
            $(".guest").css({ left: "-100%" })
        })

        $("#close").on("click", function() {
            $(".guest").css({ left: "-100%" })
        })

        $("#thisclose").on("click", function() {
            $(".list").css({ left: "-100%" })
        })

        $(".thisCard").on("click", function() {
            console.log("clicked");
            $(".list").css({ left: "-100%" })
        })
    }) // End of New Guest Menu

// Assignment 5 - create a client / profile creation page    
// Create new Object and new Array to hold that data
var addGuest = new Object();
var guestArray = new Array();
var serialArray = new Array();
var btn = document.querySelector("#addGuest");
var standard = 0;
var premium = 0;
var accountsArray = [];
var premiumArray = [];

// Create an Object Constructor
function Guest(fname, lname, serial, email, phone, dob) {
    this.fname = fname;
    this.lname = lname;
    this.serial = serial;
    this.email = email;
    this.phone = phone;
    this.dob = dob;
} // End of Object Constructor

// Create an Event Handler to run function when button is clicked
btn.onclick = function() {
        // Create list of variables
        var guestFname = document.querySelector("#fname").value;
        var guestLname = document.querySelector("#lname").value;
        var guestserial = document.querySelector("#idNumber").value;
        var guestemail = document.querySelector("#email").value;
        var guestphone = document.querySelector("#telephone").value;
        var guestdob = document.querySelector("#date").value;

        // If / else statement checking to see if require fields were filled
        if (guestserial == "" || serialArray.indexOf(guestserial) !== -1) {
            document.querySelector("#idNumber").style.border = "2px solid #da776f";
            return;
        } else {
            serialArray.push(guestserial);
            document.querySelector("#fname").style.border = "none";
            document.querySelector("#lname").style.border = "none";
            document.querySelector("#idNumber").style.border = "none";
            document.querySelector("#fname").value = "";
            document.querySelector("#lname").value = "";
            document.querySelector("#idNumber").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#telephone").value = "";
            document.querySelector("#date").value = "";
            document.querySelector(".guest").style.left = "-100%";
            // increment standard variable
            standard++;
        } // End of if statement test

        // Create guestObject and pass variables set above
        var guestObject = new Guest(guestFname, guestLname, guestserial, guestemail, guestphone, guestdob);
        console.log(guestObject);

        // Add this Object to an array
        guestArray.push(guestObject);
        console.log(guestArray);

        // Create a Date Object to show when the account was created
        var guestDate = new Date();
        var dd = String(guestDate.getDate()).padStart(2, '0');
        var mm = String(guestDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = guestDate.getFullYear();

        guestDate = mm + '/' + dd + '/' + yyyy;

        // Create set of variables and fill with HTML elements and values of the variables passed in the object and create a card with object
        var card = '<div class="col-3 floatLeft"><div class="padding cushion"><div class="guestCard">';
        var pic = '<div class="pic"><img src="sources/img/logo.svg" /></div>';
        var name = '<div class="name"><h2>' + guestLname + ', ' + guestFname + '</h2></div>';
        var serial = '<div class="serial" id="' + guestserial + '"><p>' + guestserial + '</p></div>';
        var active = '<div class="active"><p><strong>Active since: </strong><em>' + guestDate + '</em></p></div>';
        var email = '<div class="email"><p>' + guestemail + '</p></div>';
        var phone = '<div class="phone"><p>' + guestphone + '</p></div>';
        var age = '<div class="age"><p><strong>dob: </strong>' + guestdob + '</p></div>';
        var premiumCheck = '<div class="premiumCheck"><input type="checkbox" name="premium" id="premium" onclick="myFunction(this)" /><label>Premium</label></div>'
        var endCard = '</div></div></div>';

        // Change the Accounts counter and display them
        document.querySelector(".standard h2").innerHTML = standard;
        document.querySelector(".premium h2").innerHTML = premium;
        document.querySelector(".total h2").innerHTML = standard + premium;

        // Display the Card in HTML
        document.querySelector("#guestWindow").innerHTML += card + pic + name + serial + active + email + phone + age + premiumCheck + endCard;
} // End of Event Handler


// Event Listener take one parameter of 'this' so function knows what parent node to style
function myFunction(target) {
    // create variables to add value from target 
    var checkBox = target;
    var parent = target.parentNode.parentNode;

    // if / esle statement checks to see if the checkbox was checked or not, and styles the card appropriately
    if (checkBox.checked == true) {
        parent.classList.add("premiumGuest");
        standard--;
        premium++;
        document.querySelector(".standard h2").innerHTML = standard;
        document.querySelector(".premium h2").innerHTML = premium;
        document.querySelector(".total h2").innerHTML = standard + premium;
    } else {
        parent.classList.remove("premiumGuest");
        standard++;
        premium--;
        document.querySelector(".standard h2").innerHTML = standard;
        document.querySelector(".premium h2").innerHTML = premium;
        document.querySelector(".total h2").innerHTML = standard + premium;
    }
} // End of Event Listener
// End of Assignment 5 - create a client / profile creation page 

// 
// 
// 
// 
// 

// Assignment 4 - Create a product results page using Object Literals
// Declare Construcor Notation for shoppingItem to take 6 parameters
function ShoppingItem(serial, name, quantity, inventorycap, stock, cost, image) {
    this.serial = serial;
    this.name = name;
    this.quantity = quantity;
    this.cap = inventorycap;
    this.stock = stock;
    this.cost = cost;
    this.image = image;
};

// Declare 6 new shoppingItem objects and put in variables, pass arguments
var item1 = new ShoppingItem('#321098', 'LEGO THE LEGO MOVIE 2 Emmet\'s Dream House / Rescue Rocket! 70831 Building Kit', 0, 12, true, 69.99, 'sources/img/lego.jpg');
var item2 = new ShoppingItem('#321097', 'LEGO NINJAGO Masters of Spinjitzu: Stormbringer 70652 Ninja Toy Building Kit', 0, 10, true, 31.99, 'sources/img/lego2.jpg');
var item3 = new ShoppingItem('#321096', 'Nintendo Switch - Neon Red and Neon Blue Joy-Con', 0, 5, true, 299.99, 'sources/img/switch.jpg', );
var item4 = new ShoppingItem('#321095', 'Gund Baby Animated Flappy The Elephant Plush Toy', 0, 6, true, 40.00, 'sources/img/plush.jpg');
var item5 = new ShoppingItem('#321094', 'Little Tikes First Slide (Red/Blue) - Indoor / Outdoor Toddler Toy', 0, 4, true, 34.99, 'sources/img/slide.jpg');
var item6 = new ShoppingItem('#321093', 'Operation Electronic Board Game With Cards Kids Skill Game Ages 6 and Up', 0, 4, true, 19.99, 'sources/img/operation.jpg');
var discount = .2;

// Create variable and select element to put in it
var results = document.querySelector(".output");

// Build HTML document using object notation
// Each block of code represents one item and is designed in css
// Each line represents object properties and its values
results.innerHTML += '<div class="col-3 floatLeft"><div class="padding cushion"><div class="card clear">' +
    '<div class="crop"><img src="' + item1.image + '" /></div>' +
    '<p class="fine">' + item1.serial + '</p>' +
    '<h3>' + item1.name + '</h3>' +
    '<p class="col-2 floatLeft"><b class="fine">$' + item1.cost + ' each</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="red fine">$' + (item1.cost - (item1.cost * discount)).toFixed(2) + ' each</b></p>' +
    '<p class="col-2 floatLeft"><b class="cost1">$' + item1.cost * item1.quantity + '</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="prem1">$' + item1.quantity * (item1.cost - (item1.cost * discount)).toFixed(2) + '</b></p>' +
    '<div class="quantity"><button class="minus floatLeft" onclick="minus1(' + item1.quantity + ')">-</button><input type="number" name="input1" value="' + item1.quantity + '" /><button class="add floatRight" onclick="add1(' + item1.quantity + ')">+</button></div>' +
    '</div></div></div>';

results.innerHTML += '<div class="col-3 floatLeft"><div class="padding cushion"><div class="card clear">' +
    '<div class="crop"><img src="' + item2.image + '" /></div>' +
    '<p class="fine">' + item2.serial + '</p>' +
    '<h3>' + item2.name + '</h3>' +
    '<p class="col-2 floatLeft"><b class="fine">$' + item2.cost + ' each</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="red fine">$' + (item2.cost - (item2.cost * discount)).toFixed(2) + ' each</b></p>' +
    '<p class="col-2 floatLeft"><b class="cost2">$' + item2.cost * item2.quantity + '</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="prem2">$' + item2.quantity * (item2.cost - (item2.cost * discount)).toFixed(2) + '</b></p>' +
    '<div class="quantity"><button class="minus floatLeft" onclick="minus2(' + item2.quantity + ')">-</button><input type="number" name="input2" value="' + item2.quantity + '" /><button class="add floatRight" onclick="add2(' + item2.quantity + ')">+</button></div>' +
    '</div></div></div>';

results.innerHTML += '<div class="col-3 floatLeft"><div class="padding cushion"><div class="card clear">' +
    '<div class="crop"><img src="' + item3.image + '" /></div>' +
    '<p class="fine">' + item3.serial +
    '<h3>' + item3.name + '</h3>' + '</p>' +
    '<p class="col-2 floatLeft"><b class="fine">$' + item3.cost + ' each</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="red fine">$' + (item3.cost - (item3.cost * discount)).toFixed(2) + ' each</b></p>' +
    '<p class="col-2 floatLeft"><b class="cost3">$' + item3.cost * item3.quantity + '</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="prem3">$' + item3.quantity * (item3.cost - (item3.cost * discount)).toFixed(2) + '</b></p>' +
    '<div class="quantity"><button class="minus floatLeft" onclick="minus3(' + item3.quantity + ')">-</button><input type="number" name="input3" value="' + item3.quantity + '" /><button class="add floatRight" onclick="add3(' + item3.quantity + ')">+</button></div>' +
    '</div></div></div>';

results.innerHTML += '<div class="col-3 floatLeft"><div class="padding cushion"><div class="card clear">' +
    '<div class="crop"><img src="' + item4.image + '" /></div>' +
    '<p class="fine">' + item4.serial +
    '<h3>' + item4.name + '</h3>' + '</p>' +
    '<p class="col-2 floatLeft"><b class="fine">$' + item4.cost + ' each</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="red fine">$' + (item4.cost - (item4.cost * discount)).toFixed(2) + ' each</b></p>' +
    '<p class="col-2 floatLeft"><b class="cost4">$' + item4.cost * item4.quantity + '</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="prem4">$' + item4.quantity * (item4.cost - (item4.cost * discount)).toFixed(2) + '</b></p>' +
    '<div class="quantity"><button class="minus floatLeft" onclick="minus4(' + item4.quantity + ')">-</button><input type="number" name="input4" value="' + item4.quantity + '" /><button class="add floatRight" onclick="add4(' + item4.quantity + ')">+</button></div>' +
    '</div></div></div>';

results.innerHTML += '<div class="col-3 floatLeft"><div class="padding cushion"><div class="card clear">' +
    '<div class="crop"><img src="' + item5.image + '" /></div>' +
    '<p class="fine">' + item5.serial +
    '<h3>' + item5.name + '</h3>' + '</p>' +
    '<p class="col-2 floatLeft"><b class="fine">$' + item5.cost + ' each</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="red fine">$' + (item5.cost - (item5.cost * discount)).toFixed(2) + ' each</b></p>' +
    '<p class="col-2 floatLeft"><b class="cost5">$' + item5.cost * item5.quantity + '</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="prem5">$' + item5.quantity * (item5.cost - (item5.cost * discount)).toFixed(2) + '</b></p>' +
    '<div class="quantity"><button class="minus floatLeft" onclick="minus5(' + item5.quantity + ')">-</button><input type="number" name="input5" value="' + item5.quantity + '" /><button class="add floatRight" onclick="add5(' + item5.quantity + ')">+</button></div>' +
    '</div></div></div>';

results.innerHTML += '<div class="col-3 floatLeft"><div class="padding cushion"><div class="card clear">' +
    '<div class="crop"><img src="' + item6.image + '" /></div>' +
    '<p class="fine">' + item6.serial +
    '<h3>' + item6.name + '</h3>' + '</p>' +
    '<p class="col-2 floatLeft"><b class="fine">$' + item6.cost + ' each</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="red fine">$' + (item6.cost - (item6.cost * discount)).toFixed(2) + ' each</b></p>' +
    '<p class="col-2 floatLeft"><b class="cost6">$' + item5.cost * item6.quantity + '</b></p>' +
    '<p class="col-2 floatRight textRight red"><b class="prem6">$' + item6.quantity * (item6.cost - (item6.cost * discount)).toFixed(2) + '</b></p>' +
    '<div class="quantity"><button class="minus floatLeft" onclick="minus6(' + item6.quantity + ')">-</button><input type="number" name="input6" value="' + item6.quantity + '" /><button class="add floatRight" onclick="add6(' + item5.quantity + ')">+</button></div>' +
    '</div></div></div>';
// End of HTML Build
// End of Assignment 4 - Create a product results page using Object Literals


// Assignment 1 - Cost Calculator
// Create group of functions to count up and add inventory
// When the value reaches the inventorycap limit, the alert will tell the user there is too many of the items
function add1() {
    item1.quantity++;
    console.log(item1.quantity);
    document.querySelector(".cost1").innerHTML = "$" + (item1.cost * item1.quantity).toFixed(2);
    document.querySelector(".prem1").innerHTML = "$" + item1.quantity * (item1.cost - (item1.cost * discount)).toFixed(2);
    document.querySelector("input[name=input1]").value = item1.quantity;
    if (item1.quantity > item1.cap) {
        alert("Out of Stock");
        item1.stock = false;
        item1.quantity = item1.cap;
        document.querySelector(".cost1").innerHTML = "$" + (item1.cost * item1.quantity).toFixed(2);
        document.querySelector(".prem1").innerHTML = "$" + item1.quantity * (item1.cost - (item1.cost * discount)).toFixed(2);
        document.querySelector("input[name=input1]").value = item1.quantity;
    }
}

function add2() {
    item2.quantity++;
    document.querySelector(".cost2").innerHTML = "$" + (item2.cost * item2.quantity).toFixed(2);
    document.querySelector(".prem2").innerHTML = "$" + item2.quantity * (item2.cost - (item2.cost * discount)).toFixed(2);
    document.querySelector("input[name=input2]").value = item2.quantity;
    if (item2.quantity > item2.cap) {
        alert("Out of Stock");
        item2.stock = false;
        item2.quantity = item2.cap;
        document.querySelector(".cost2").innerHTML = "$" + (item2.cost * item2.quantity).toFixed(2);
        document.querySelector(".prem2").innerHTML = "$" + item2.quantity * (item2.cost - (item2.cost * discount)).toFixed(2);
        document.querySelector("input[name=input2]").value = item2.quantity;
    }
}

function add3() {
    item3.quantity++;
    document.querySelector(".cost3").innerHTML = "$" + (item3.cost * item3.quantity).toFixed(2);
    document.querySelector(".prem3").innerHTML = "$" + item3.quantity * (item3.cost - (item3.cost * discount)).toFixed(2);
    document.querySelector("input[name=input3]").value = item3.quantity;
    if (item3.quantity > item3.cap) {
        alert("Out of Stock");
        item3.stock = false;
        item3.quantity = item3.cap;
        document.querySelector(".cost3").innerHTML = "$" + (item3.cost * item3.quantity).toFixed(2);
        document.querySelector(".prem13").innerHTML = "$" + item3.quantity * (item3.cost - (item3.cost * discount)).toFixed(2);
        document.querySelector("input[name=input3]").value = item3.quantity;
    }
}

function add4() {
    item4.quantity++;
    document.querySelector(".cost4").innerHTML = "$" + (item4.cost * item4.quantity).toFixed(2);
    document.querySelector(".prem4").innerHTML = "$" + item4.quantity * (item4.cost - (item4.cost * discount)).toFixed(2);
    document.querySelector("input[name=input4]").value = item4.quantity;
    if (item4.quantity > item4.cap) {
        alert("Out of Stock");
        item4.stock = false;
        item4.quantity = item4.cap;
        document.querySelector(".cost4").innerHTML = "$" + (item4.cost * item4.quantity).toFixed(2);
        document.querySelector(".prem4").innerHTML = "$" + item4.quantity * (item4.cost - (item4.cost * discount)).toFixed(2);
        document.querySelector("input[name=input4]").value = item4.quantity;
    }
}

function add5() {
    item5.quantity++;
    document.querySelector(".cost5").innerHTML = "$" + (item5.cost * item5.quantity).toFixed(2);
    document.querySelector(".prem5").innerHTML = "$" + item5.quantity * (item5.cost - (item5.cost * discount)).toFixed(2);
    document.querySelector("input[name=input5]").value = item5.quantity;
    if (item5.quantity > item5.cap) {
        alert("Out of Stock");
        item5.stock = false;
        item5.quantity = item5.cap;
        document.querySelector(".cost5").innerHTML = "$" + (item5.cost * item5.quantity).toFixed(2);
        document.querySelector(".prem5").innerHTML = "$" + item5.quantity * (item5.cost - (item5.cost * discount)).toFixed(2);
        document.querySelector("input[name=input5]").value = item5.quantity;
    }
}

function add6() {
    item6.quantity++;
    document.querySelector(".cost6").innerHTML = "$" + (item6.cost * item6.quantity).toFixed(2);
    document.querySelector(".prem6").innerHTML = "$" + item6.quantity * (item6.cost - (item6.cost * discount)).toFixed(2);
    document.querySelector("input[name=input6]").value = item6.quantity;
    if (item6.quantity > item6.cap) {
        alert("Out of Stock");
        item6.stock = false;
        item6.quantity = item6.cap;
        document.querySelector(".cost6").innerHTML = "$" + (item6.cost * item6.quantity).toFixed(2);
        document.querySelector(".prem6").innerHTML = "$" + item6.quantity * (item6.cost - (item6.cost * discount)).toFixed(2);
        document.querySelector("input[name=input6]").value = item6.quantity;
    }
}

// Create function for counter for subtracting inventory
// When value reaches 0, the alert will tell user that they are out of stock

function minus1() {
    item1.quantity--;
    console.log(item1.quantity);
    document.querySelector(".cost1").innerHTML = "$" + (item1.cost * item1.quantity).toFixed(2);
    document.querySelector(".prem1").innerHTML = "$" + item1.quantity * (item1.cost - (item1.cost * discount)).toFixed(2);
    document.querySelector("input[name=input1]").value = item1.quantity;
    if (item1.quantity <= 0) {
        item1.quantity = 0;
        document.querySelector(".cost1").innerHTML = "$" + (item1.cost * item1.quantity).toFixed(2);
        document.querySelector(".prem1").innerHTML = "$" + item1.quantity * (item1.cost - (item1.cost * discount)).toFixed(2);
        document.querySelector("input[name=input1]").value = item1.quantity;
    } else if (item1.quantity < item1.cap) {
        item1.stock = true;
    }
}

function minus2() {
    item2.quantity--;
    console.log(item2.quantity);
    document.querySelector(".cost2").innerHTML = "$" + (item2.cost * item2.quantity).toFixed(2);
    document.querySelector(".prem2").innerHTML = "$" + item2.quantity * (item2.cost - (item2.cost * discount)).toFixed(2);
    document.querySelector("input[name=input2]").value = item2.quantity;
    if (item2.quantity < 0) {
        item2.quantity = 0;
        document.querySelector(".cost2").innerHTML = "$" + (item2.cost * item2.quantity).toFixed(2);
        document.querySelector(".prem2").innerHTML = "$" + item2.quantity * (item2.cost - (item2.cost * discount)).toFixed(2);
        document.querySelector("input[name=input2]").value = item2.quantity;
    } else if (item2.quantity < item2.cap) {
        item2.stock = true;
    }
}

function minus3() {
    item3.quantity--;
    console.log(item3.quantity);
    document.querySelector(".cost3").innerHTML = "$" + (item3.cost * item3.quantity).toFixed(2);
    document.querySelector(".prem3").innerHTML = "$" + item3.quantity * (item3.cost - (item3.cost * discount)).toFixed(2);
    document.querySelector("input[name=input3]").value = item3.quantity;
    if (item3.quantity < 0) {
        item3.quantity = 0;
        document.querySelector(".cost3").innerHTML = "$" + (item3.cost * item3.quantity).toFixed(2);
        document.querySelector(".prem3").innerHTML = "$" + item3.quantity * (item3.cost - (item3.cost * discount)).toFixed(2);
        document.querySelector("input[name=input3]").value = item3.quantity;
    } else if (item3.quantity < item3.cap) {
        item3.stock = true;
    }
}

function minus4() {
    item4.quantity--;
    console.log(item4.quantity);
    document.querySelector(".cost4").innerHTML = "$" + (item4.cost * item4.quantity).toFixed(2);
    document.querySelector(".prem4").innerHTML = "$" + item4.quantity * (item4.cost - (item4.cost * discount)).toFixed(2);
    document.querySelector("input[name=input4]").value = item4.quantity;
    if (item4.quantity < 0) {
        item4.quantity = 0;
        document.querySelector(".cost4").innerHTML = "$" + (item4.cost * item4.quantity).toFixed(2);
        document.querySelector(".prem4").innerHTML = "$" + item4.quantity * (item4.cost - (item4.cost * discount)).toFixed(2);
        document.querySelector("input[name=input4]").value = item4.quantity;
    } else if (item4.quantity < item4.cap) {
        item4.stock = true;
    }
}

function minus5() {
    item5.quantity--;
    console.log(item5.quantity);
    document.querySelector(".cost5").innerHTML = "$" + (item5.cost * item5.quantity).toFixed(2);
    document.querySelector(".prem5").innerHTML = "$" + item5.quantity * (item5.cost - (item5.cost * discount)).toFixed(2);
    document.querySelector("input[name=input5]").value = item5.quantity;
    if (item5.quantity < 0) {
        item5.quantity = 0;
        document.querySelector(".cost5").innerHTML = "$" + (item5.cost * item5.quantity).toFixed(2);
        document.querySelector(".prem5").innerHTML = "$" + item5.quantity * (item5.cost - (item5.cost * discount)).toFixed(2);
        document.querySelector("input[name=input5]").value = item5.quantity;
    } else if (item5.quantity < item5.cap) {
        item5.stock = true;
    }
}

function minus6() {
    item6.quantity--;
    console.log(item6.quantity);
    document.querySelector(".cost6").innerHTML = "$" + (item6.cost * item6.quantity).toFixed(2);
    document.querySelector(".prem6").innerHTML = "$" + item6.quantity * (item6.cost - (item6.cost * discount)).toFixed(2);
    document.querySelector("input[name=input6]").value = item6.quantity;
    if (item6.quantity < 0) {
        item6.quantity = 0;
        document.querySelector(".cost6").innerHTML = "$" + (item6.cost * item6.quantity).toFixed(2);
        document.querySelector(".prem6").innerHTML = "$" + item6.quantity * (item6.cost - (item6.cost * discount)).toFixed(2);
        document.querySelector("input[name=input6]").value = item6.quantity;
    } else if (item6.quantity < item6.cap) {
        item6.stock = true;
    }
}
// End of Assignment 1 - Cost Calculator