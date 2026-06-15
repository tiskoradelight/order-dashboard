function saveData() {

    let date = document.getElementById("date").value;
    let amazon = Number(document.getElementById("amazon").value);
    let meeshoTD = Number(document.getElementById("meeshoTD").value);
    let meeshoMM = Number(document.getElementById("meeshoMM").value);
    let flipkart = Number(document.getElementById("flipkart").value);

    let total = amazon + meeshoTD + meeshoMM + flipkart;

    let order = {
        date: date,
        amazon: amazon,
        meeshoTD: meeshoTD,
        meeshoMM: meeshoMM,
        flipkart: flipkart,
        total: total
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    showHistory();
}

function showHistory() {

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let table = document.getElementById("historyTable");

    table.innerHTML = "";

    orders.forEach(function(order){

        table.innerHTML += `
        <tr>
            <td>${order.date}</td>
            <td>${order.amazon}</td>
            <td>${order.meeshoTD}</td>
            <td>${order.meeshoMM}</td>
            <td>${order.flipkart}</td>
            <td>${order.total}</td>
        </tr>
        `;
    });

}

showHistory();
