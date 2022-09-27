var amountkey = window.location.search.split('=').pop()
if(amountkey == 1000){
  document.getElementById('amount_pass').selectedIndex=2
}else if (amountkey == 800){
  document.getElementById('amount_pass').selectedIndex=1
}else{
  document.getElementById('amount_pass').selectedIndex=0
}

function amountupdate() {
    if (typeof document !== "undefined") {
        var select = document.getElementById('amount_pass');
        var amount = select.options[select.selectedIndex].value;
    }
    console.log(amount)
    return amount;
}
amountupdate();
// setInterval(() => {
//     let a = amountupdate();
//     console.log(a)
// }, 100);

