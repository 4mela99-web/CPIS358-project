const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let eventName = document.getElementById("eventSearch").value;

    let city = document.getElementById("city").value;

    if (eventName.trim() === "") {

        alert("Please enter an event name.");

    } else {

        alert(
            "Searching for: " + eventName +
            "\nCity: " + (city || "All cities")
        );

    }

});
const categoryCards = document.querySelectorAll(".category-card");

const eventCards = document.querySelectorAll(".event-card");

categoryCards.forEach(function(category) {

    category.addEventListener("click", function() {

        let selectedCategory = category.dataset.category;

        eventCards.forEach(function(eventCard) {

            let eventCategory = eventCard.dataset.category;

            if (selectedCategory === eventCategory) {

                eventCard.style.display = "block";

            } else {

                eventCard.style.display = "none";

            }

        });

    });

});