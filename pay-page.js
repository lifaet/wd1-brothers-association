function amountupdate(amount){
    var select = document.getElementById('amount_pass');
    var amount = select.options[select.selectedIndex].value;

    return amount;
}
amountupdate();