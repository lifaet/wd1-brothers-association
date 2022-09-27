function amountupdate(amount){
    var select = document.getElementById('amount_pass');
    var amount = select.options[select.selectedIndex].value;
    console.log(amount);
    return amount;
}
amountupdate();