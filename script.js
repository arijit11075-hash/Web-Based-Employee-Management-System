var loginForm = document.querySelector("form");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var email = document.querySelector("input[type='email'], input[type='text']").value.trim();
        var role = document.querySelector("select").value.toLowerCase();

        if (email === "") {
            alert("Email or username dao");
            return;
        }

        if (role === "manager") {
            window.location.href = "manager.html";
        } else if (role === "hr") {
            window.location.href = "hr.html";
        } else if (role === "teamlead" || role === "team lead") {
            window.location.href = "teamlead.html";
        } else {
            window.location.href = "employee.html";
        }
    });
}

var tableBody = document.querySelector("tbody");
var addBtn = document.querySelector(".add-btn");

var defaultEmployees = [
    { id: "#EMP-101", name: "Rahim Ahmed", email: "rahim@company.com", dept: "Development" },
    { id: "#EMP-102", name: "Sadia Islam", email: "sadia@company.com", dept: "UI/UX Design" },
    { id: "#EMP-103", name: "Tanvir Hossain", email: "tanvir@company.com", dept: "Marketing" }
];

function getEmployees() {
    var data = localStorage.getItem("employees");
    if (data) {
        return JSON.parse(data);
    }
    localStorage.setItem("employees", JSON.stringify(defaultEmployees));
    return defaultEmployees;
}

function saveEmployees(list) {
    localStorage.setItem("employees", JSON.stringify(list));
}

function showEmployees() {
    if (!tableBody) return;

    var list = getEmployees();
    tableBody.innerHTML = "";

    for (var i = 0; i < list.length; i++) {
        var emp = list[i];
        tableBody.innerHTML += "<tr>" +
            "<td>" + emp.id + "</td>" +
            "<td>" + emp.name + "</td>" +
            "<td>" + emp.email + "</td>" +
            "<td>" + emp.dept + "</td>" +
            "<td>" +
                "<button class='action-btn edit' onclick='editEmp(" + i + ")'>Edit</button> " +
                "<button class='action-btn delete' onclick='deleteEmp(" + i + ")'>Delete</button>" +
            "</td>" +
        "</tr>";
    }
}

if (addBtn) {
    addBtn.addEventListener("click", function () {
        var name = prompt("Employee Name:");
        if (!name) return;

        var email = prompt("Employee Email:");
        if (!email) return;

        var dept = prompt("Department:");
        if (!dept) return;

        var list = getEmployees();
        var newId = "#EMP-" + (101 + list.length);

        list.push({ id: newId, name: name, email: email, dept: dept });
        saveEmployees(list);
        showEmployees();
    });
}

function editEmp(index) {
    var list = getEmployees();
    var emp = list[index];

    var name = prompt("New Name:", emp.name);
    var email = prompt("New Email:", emp.email);
    var dept = prompt("New Department:", emp.dept);

    if (name && email && dept) {
        list[index] = { id: emp.id, name: name, email: email, dept: dept };
        saveEmployees(list);
        showEmployees();
    }
}

function deleteEmp(index) {
    var list = getEmployees();
    if (confirm("Delete this employee?")) {
        list.splice(index, 1);
        saveEmployees(list);
        showEmployees();
    }
}

function showTab(tabName, clickedLink) {
    var links = document.querySelectorAll(".sidebar ul li a");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    clickedLink.classList.add("active");

    var stats = document.getElementById("statsBox");
    var emp = document.getElementById("empBox");
    var leave = document.getElementById("leaveBox");

    if (tabName === "dashboard") {
        stats.style.display = "flex";
        emp.style.display = "block";
        leave.style.display = "none";
    } else if (tabName === "employees") {
        stats.style.display = "none";
        emp.style.display = "block";
        leave.style.display = "none";
    } else if (tabName === "leaves") {
        stats.style.display = "none";
        emp.style.display = "none";
        leave.style.display = "block";
    }
}

function changeStatus(btn, status) {
    var row = btn.parentElement.parentElement;
    row.children[3].textContent = status;
}

showEmployees();