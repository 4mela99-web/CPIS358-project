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
const allEventsBtn = document.getElementById("allEventsBtn");

allEventsBtn.addEventListener("click", function() {

    eventCards.forEach(function(eventCard) {

        eventCard.style.display = "block";

    });

});
const ticketPrices = {

    football: [
        {
            platform: "TicketHub",
            type: "Standard",
            price: 150
        },
        {
            platform: "Platform A",
            type: "Standard",
            price: 180
        },
        {
            platform: "Platform B",
            type: "Standard",
            price: 165
        }
    ],

    riyadh: [
        {
            platform: "TicketHub",
            type: "Standard",
            price: 200
        },
        {
            platform: "Platform A",
            type: "Standard",
            price: 230
        },
        {
            platform: "Platform B",
            type: "Standard",
            price: 190
        }
    ],

    concert: [
        {
            platform: "TicketHub",
            type: "Standard",
            price: 250
        },
        {
            platform: "Platform A",
            type: "Standard",
            price: 280
        },
        {
            platform: "Platform B",
            type: "Standard",
            price: 240
        }
    ]

};
const compareEvent = document.getElementById("compareEvent");

const priceTableBody = document.getElementById("priceTableBody");

function updatePriceTable() {

    let selectedEvent = compareEvent.value;

    let tickets = ticketPrices[selectedEvent];

    let lowestPrice = Math.min(
        ...tickets.map(ticket => ticket.price)
    );

    priceTableBody.innerHTML = "";

    tickets.forEach(function(ticket) {

        let row = document.createElement("tr");

        if (ticket.price === lowestPrice) {
            row.classList.add("best-price");
        }

        row.innerHTML = `
            <td>${ticket.platform}</td>

            <td>${ticket.type}</td>

            <td>${ticket.price} SAR</td>

            <td>Available</td>

            <td>
                <button class="deal-btn">
                    View Deal
                </button>
            </td>
        `;

        priceTableBody.appendChild(row);

    });

}
compareEvent.addEventListener("change", function() {

    updatePriceTable();

});

updatePriceTable();
priceTableBody.addEventListener("click", function(event) {

    if (event.target.classList.contains("deal-btn")) {

        alert("Ticket booking page coming soon!");

    }

});const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});
