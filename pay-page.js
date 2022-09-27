
function amountupdate() {
    if (typeof document !== "undefined") {
        var select = document.getElementById('amount_pass');
        var amount = select.options[select.selectedIndex].value;
    }

    return amount;
}
amountupdate();
setInterval(() => {
    let a = amountupdate();
    console.log(a)
}, 100);

