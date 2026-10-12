var menuButton = document.getElementById("menuButton");
var navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("show");
});

var travelDate = document.getElementById("travelDate");

var today = new Date();
var year = today.getFullYear();
var month = String(today.getMonth() + 1).padStart(2, "0");
var day = String(today.getDate()).padStart(2, "0");

travelDate.min = year + "-" + month + "-" + day;

var bookingForm = document.getElementById("bookingForm");
var bookingMessage = document.getElementById("bookingMessage");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var destination = document.getElementById("destination").value;
    var tripType = document.getElementById("tripType").value;
    var date = travelDate.value;

    if (destination == "" || date == "") {
        bookingMessage.textContent =
            "Please fill in all required fields.";
    } else {
        bookingMessage.textContent =
            tripType + " search for " + destination +
            " on " + date +
            ". A booking service is needed to check availability.";
    }
});

var hotelList = document.getElementById("hotelList");

document.getElementById("previousHotel").addEventListener("click", function () {
    hotelList.scrollBy({
        left: -250,
        behavior: "smooth"
    });
});

document.getElementById("nextHotel").addEventListener("click", function () {
    hotelList.scrollBy({
        left: 250,
        behavior: "smooth"
    });
});

var siteSearch = document.getElementById("siteSearch");

siteSearch.addEventListener("submit", function (event) {
    event.preventDefault();

    var searchText = document.getElementById("searchText").value.toLowerCase();

    if (searchText.includes("hotel")) {
        document.getElementById("hotels").scrollIntoView({
            behavior: "smooth"
        });
    } else if (
        searchText.includes("deal") ||
        searchText.includes("flight")
    ) {
        document.getElementById("deals").scrollIntoView({
            behavior: "smooth"
        });
    } else if (
        searchText.includes("blog") ||
        searchText.includes("guide")
    ) {
        document.getElementById("blogs").scrollIntoView({
            behavior: "smooth"
        });
    } else {
        alert("Try searching for hotels, deals or blogs.");
    }
});

var newsletterForm = document.getElementById("newsletterForm");
var newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    newsletterMessage.textContent =
        "Thank you! Connect an email service to complete your subscription.";
});

document.getElementById("year").textContent = new Date().getFullYear();
