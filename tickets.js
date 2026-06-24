let currentAgent = "agent";

let container;
let title;


window.onload = function () {
    container = document.getElementById("ticketContainer");
    title = document.getElementById("pageTitle");

    let savedName = localStorage.getItem("agentName");

    if (savedName) {
        document.getElementById("agentName").innerText = savedName;
    }

    showAllTickets();
};

function showAllTickets() {
    title.innerText = "All Tickets";
    render(tickets);
}

function showMyTickets() {
    title.innerText = "My Tickets";

    let filtered = tickets.filter(t =>
        t.assigned === currentAgent &&
        (t.status === "Open" || t.status === "Pending")
    );

    render(filtered);
}
function showClosedTickets() {
    title.innerText = "Closed Tickets";

    let filtered = tickets.filter(t => 
        t.status.toLowerCase() === "closed"
    );

    render(filtered);
}
function showUnresolvedTickets() {
    title.innerText = "Unresolved Tickets";

    let filtered = tickets.filter(t =>
        t.status === "Waiting for Customer"
    );

    render(filtered);
}
function render(data) {
    container.innerHTML = "";

    data.forEach(t => {
        container.innerHTML += `
        <div class="ticket">
            <div class="ticket-id">#${t.id}</div>
            <div class="ticket-title">${t.klient} - ${t.problem}</div>
            <div class="ticket-time">${t.time}</div>
            <div class="ticket-status ${t.status.toLowerCase()}">${t.status}</div>
        </div>`;
    });
}
function render(data) {
    container.innerHTML = data.map(t => `
        <div class="ticket">
            <div class="ticket-id">#${t.id}</div>

            <div class="ticket-title">
                ${t.klient} - ${t.problem}
            </div>

            <div class="ticket-time">
                ${t.time}
            </div>

            ${t.assigned === "agent" ? `
                <div style="
                    position:absolute;
                    right:15px;
                    bottom:15px;
                    font-size:12px;
                    color:#555;
                    opacity:0.7;
                ">
                    Assigned to you
                </div>
            ` : ""}
            
            <div class="ticket-status ${t.status.toLowerCase()}">
                ${t.status}
            </div>
        </div>
    `).join("");
}
