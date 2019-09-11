function pdfFun() {
    var pdfDiv = document.getElementById("pdfView");
    if (pdfDiv.style.visibility == "hidden") {
        pdfDiv.style.visibility = "visible";
    } else {
        pdfDiv.style.visibility = "hidden";
    }
}
