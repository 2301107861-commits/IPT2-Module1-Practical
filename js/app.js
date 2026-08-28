// app.js - Student table management

// In-memory list of students
let students = [];

document.addEventListener('DOMContentLoaded', function () {
    const addStudentButton = document.getElementById('addStudentButton');
    if (addStudentButton) {
        addStudentButton.addEventListener('click', addStudent);
    }
    renderStudents();
});

function addStudent() {
    const idNumberInput = document.getElementById('idNumber');
    const firstNameInput = document.getElementById('firstName');
    const middleNameInput = document.getElementById('middleName');
    const lastNameInput = document.getElementById('lastName');

    const idNumber = idNumberInput.value.trim();
    const firstName = firstNameInput.value.trim();
    const middleName = middleNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    // Basic validation - require at least ID, first name, and last name
    if (!idNumber || !firstName || !lastName) {
        alert('Please fill in ID Number, Firstname, and Lastname.');
        return;
    }

    const student = {
        idNumber: idNumber,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName
    };

    students.push(student);
    renderStudents();

    // Clear the form after adding
    document.getElementById('studentForm').reset();
    idNumberInput.focus();
}

function renderStudents() {
    const tableContent = document.getElementById('table-content');
    if (!tableContent) return;

    tableContent.innerHTML = '';

    students.forEach(function (student) {
        const row = document.createElement('tr');
        row.innerHTML =
            '<td>' + escapeHtml(student.idNumber) + '</td>' +
            '<td>' + escapeHtml(student.firstName) + '</td>' +
            '<td>' + escapeHtml(student.middleName) + '</td>' +
            '<td>' + escapeHtml(student.lastName) + '</td>';
        tableContent.appendChild(row);
    });
}

// Simple helper to avoid HTML injection when rendering user input
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

$(document).ready(function () {

    // ADD SUBJECT
    $("#addSubject").click(function () {

        // Get the values from the input fields
        let subjectCode = $("#subjectCode").val().trim();
        let subjectName = $("#subjectName").val().trim();
        let units = $("#units").val().trim();

        // Check if all fields have values
        if (subjectCode === "" || subjectName === "" || units === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Create a new row
        let row = `
            <tr>
                <td>${subjectCode}</td>
                <td>${subjectName}</td>
                <td>${units}</td>
            </tr>
        `;

        // Add the row to the subject table
        $("#table-content").append(row);

        // Clear the input fields after adding
        $("#subjectCode").val("");
        $("#subjectName").val("");
        $("#units").val("");

        // Return cursor to Subject Code
        $("#subjectCode").focus();
    });

});
