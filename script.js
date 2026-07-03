function checkRisk() {

    let bp = parseInt(document.getElementById("bp").value);
    let chol = parseInt(document.getElementById("chol").value);

    if (bp > 140 && chol > 240) {
        alert("🔴 High Risk of Blood Vessel Blockage");
    }
    else if (bp > 130 || chol > 200) {
        alert("🟡 Medium Risk of Blood Vessel Blockage");
    }
    else {
        alert("🟢 Low Risk of Blood Vessel Blockage");
    }

}
