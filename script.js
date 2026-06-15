function saveData() {

    let date = document.getElementById("date").value;
    let amazon = Number(document.getElementById("amazon").value);
    let meeshoTD = Number(document.getElementById("meeshoTD").value);
    let meeshoMM = Number(document.getElementById("meeshoMM").value);
    let flipkart = Number(document.getElementById("flipkart").value);

    let total = amazon + meeshoTD + meeshoMM + flipkart;

    let orderData = {
        date: date,
        amazon: amazon,
        meeshoTD: meeshoTD,
        meeshoMM: meeshoMM,
        flipkart: flipkart,
        total: total
    };

    // Data save karna
    localStorage.setItem("orderData", JSON.stringify(orderData));

    showData();
}

function showData() {

    let data = JSON.parse(localStorage.getItem("orderData"));

    if (data) {
        document.getElementById("showDate").innerText = data.date;
        document.getElementById("showAmazon").innerText = data.amazon;
        document.getElementById("showMeeshoTD").innerText = data.meeshoTD;
        document.getElementById("showMeeshoMM").innerText = data.meeshoMM;
        document.getElementById("showFlipkart").innerText = data.flipkart;
        document.getElementById("showTotal").innerText = data.total;
    }
}

// Page load hote hi data dikhane ke liye
showData();
