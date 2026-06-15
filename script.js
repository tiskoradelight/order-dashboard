function saveData() {

    let date = document.getElementById("date").value;
    let amazon = Number(document.getElementById("amazon").value);
    let meeshoTD = Number(document.getElementById("meeshoTD").value);
    let meeshoMM = Number(document.getElementById("meeshoMM").value);
    let flipkart = Number(document.getElementById("flipkart").value);

    let total = amazon + meeshoTD + meeshoMM + flipkart;

    document.getElementById("showDate").innerText = date;
    document.getElementById("showAmazon").innerText = amazon;
    document.getElementById("showMeeshoTD").innerText = meeshoTD;
    document.getElementById("showMeeshoMM").innerText = meeshoMM;
    document.getElementById("showFlipkart").innerText = flipkart;
    document.getElementById("showTotal").innerText = total;

}
