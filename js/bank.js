function deposit(){
    let depositvalue = document.getElementById('deposit-value');
    let depositOutput = document.getElementById('deposit-output');
    let balanceOutput = document.getElementById('balance-output');
    //console.log(depositvalue.value);
    depositOutput.innerText = Number(depositOutput.innerText)
    + Number(depositvalue.value);

    balanceOutput.innerText = Number(balanceOutput.innerText)
    + Number(depositvalue.value);


//cleanup set allways last of function
    depositvalue.value = '';
}

//withdraw function
function withdraw(){
    let withdrawValue = document.getElementById('withdraw-value');
    let withdrawOutput = document.getElementById('withdraw-output');
    let balanceOutput = document.getElementById('balance-output');
    withdrawOutput.innerText = Number(withdrawOutput.innerText)
    + Number(withdrawValue.value);
    balanceOutput.innerText = Number(balanceOutput.innerText)
    - Number(withdrawValue.value);
    withdrawValue.value = '';
}



