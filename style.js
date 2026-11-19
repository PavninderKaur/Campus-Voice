
/* =====================================
   CAMPUS VOICE - JAVASCRIPT
   Sunset Glow Theme
===================================== */

// GET DATA FROM LOCAL STORAGE

function getData(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
        return [];
    }
}

// SAVE DATA

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// GENERATE UNIQUE ID

function generateID() {
    return Date.now().toString() +
        Math.random().toString(36).slice(2, 7);
}

// HANDLE FORMS

document.querySelectorAll("form[data-storage]").forEach(form => {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const storageKey = form.dataset.storage;
        const formData = new FormData(form);

        const record = Object.fromEntries(formData.entries());

        record.id = generateID();
        record.date = new Date().toLocaleString();

        if (storageKey === "complaints") {
            record.status = "Submitted";
        }

        const savedRecords = getData(storageKey);

        savedRecords.push(record);

        saveData(storageKey, savedRecords);

        const message = form.querySelector(".form-message");

        if (message) {
            message.textContent =
                "Your submission has been saved successfully!";
            message.classList.remove("error");
        }

        form.reset();
    });

});

// CREATE ELEMENT SAFELY

function createElement(tag, className, text) {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

// UPDATE DASHBOARD STATISTICS

function updateStatistics(complaints) {

    const total = complaints.length;

    const resolved = complaints.filter(
        item => item.status === "Resolved"
    ).length;

    const pending = total - resolved;

    const totalElement =
        document.getElementById("totalComplaints");

    const pendingElement =
        document.getElementById("pendingComplaints");

    const resolvedElement =
        document.getElementById("resolvedComplaints");

    if (totalElement) {
        totalElement.textContent = total;
    }

    if (pendingElement) {
        pendingElement.textContent = pending;
    }

    if (resolvedElement) {
        resolvedElement.textContent = resolved;
    }
}

// DISPLAY COMPLAINTS

function displayComplaints() {

    const complaintList =
        document.getElementById("complaintList");

    if (!complaintList) return;

    const complaints = getData("complaints");

    complaintList.replaceChildren();

    updateStatistics(complaints);

    if (complaints.length === 0) {

        complaintList.appendChild(
            createElement(
                "p",
                "empty-state",
                "No complaints have been submitted yet."
            )
        );

        return;
    }

    complaints.slice().reverse().forEach(complaint => {

        const card = createElement("article", "complaint-item");

        const title = createElement(
            "h3",
            "",
            complaint.title || "Untitled Complaint"
        );

        const student = createElement(
            "p",
            "",
            "Student: " + (complaint.name || "Not provided")
        );

        const studentID = createElement(
            "p",
            "",
            "Student ID: " +
            (complaint.studentId || "Not provided")
        );

        const category = createElement(
            "p",
            "",
            "Category: " + (complaint.category || "Other")
        );

        const description = createElement(
            "p",
            "",
            "Description: " + (complaint.description || "")
        );

        const date = createElement(
            "p",
            "",
            "Date: " + (complaint.date || "")
        );

        const statusControl = createElement(
            "div",
            "status-control"
        );

        const statusLabel = createElement(
            "label",
            "",
            "Update Status:"
        );

        const statusSelect = document.createElement("select");

        statusSelect.className = "status-select";
        statusSelect.dataset.id = complaint.id;

        const statuses = [
            "Submitted",
            "Under Review",
            "In Progress",
            "Resolved"
        ];

        statuses.forEach(status => {

            const option = document.createElement("option");

            option.value = status;
            option.textContent = status;

            if (complaint.status === status) {
                option.selected = true;
            }

            statusSelect.appendChild(option);
        });

        statusControl.append(statusLabel, statusSelect);

        card.append(
            title,
            student,
            studentID,
            category,
            description,
            date,
            statusControl
        );

        complaintList.appendChild(card);
    });
}

// UPDATE COMPLAINT STATUS

document.addEventListener("change", function(event) {

    if (!event.target.matches(".status-select")) {
        return;
    }

    const complaintID = event.target.dataset.id;
    const newStatus = event.target.value;

    const complaints = getData("complaints");

    const updatedComplaints = complaints.map(complaint => {

        if (complaint.id === complaintID) {
            complaint.status = newStatus;
        }

        return complaint;
    });

    saveData("complaints", updatedComplaints);

    displayComplaints();
});

// DISPLAY FEEDBACK AND SUGGESTIONS

function displayRecords(storageKey, elementID) {

    const container = document.getElementById(elementID);

    if (!container) return;

    const records = getData(storageKey);

    container.replaceChildren();

    if (records.length === 0) {

        container.appendChild(
            createElement(
                "p",
                "empty-state",
                "No records available yet."
            )
        );

        return;
    }

    records.slice().reverse().forEach(record => {

        const card = createElement("article", "record-item");

        const title = createElement(
            "h3",
            "",
            record.title || record.category || "Student Feedback"
        );

        const student = createElement(
            "p",
            "",
            "Student: " + (record.name || "Not provided")
        );

        const category = createElement(
            "p",
            "",
            "Category: " + (record.category || "Other")
        );

        const message = createElement(
            "p",
            "",
            record.description || record.message || ""
        );

        const date = createElement(
            "p",
            "",
            "Date: " + (record.date || "")
        );

        card.append(title, student, category, message);

        if (record.rating) {
            card.appendChild(
                createElement(
                    "p",
                    "",
                    "Rating: " + record.rating + "/5"
                )
            );
        }

        card.appendChild(date);

        container.appendChild(card);
    });
}

// DISPLAY ADMIN LIST

function displayAdmins() {

    const adminList = document.getElementById("adminList");

    if (!adminList) return;

    const admins = getData("admins");

    adminList.replaceChildren();

    if (admins.length === 0) {
        adminList.appendChild(
            createElement(
                "p",
                "empty-state",
                "No additional administrators added yet."
            )
        );
        return;
    }

    admins.slice().reverse().forEach(admin => {

        const card = createElement("article", "record-item");

        card.appendChild(
            createElement("h3", "", admin.name || "Administrator")
        );

        card.appendChild(
            createElement("p", "", "Email: " + (admin.email || "Not provided"))
        );

        const permissions = [
            ["viewComplaints", "View Complaints"],
            ["updateStatus", "Update Status"],
            ["viewFeedback", "View Feedback"],
            ["viewSuggestions", "View Suggestions"]
        ];

        permissions.forEach(([key, label]) => {

            if (admin[key]) {
                card.appendChild(
                    createElement("p", "", "✓ " + label)
                );
            }
        });

        adminList.appendChild(card);
    });
}

// LOAD DASHBOARD DATA

function loadDashboard() {

    displayComplaints();

    displayRecords("feedbacks", "feedbackList");

    displayRecords("suggestions", "suggestionList");

    displayAdmins();
}

// RUN WHEN PAGE LOADS

document.addEventListener("DOMContentLoaded", loadDashboard);
