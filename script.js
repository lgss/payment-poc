const form = document.getElementById('paymentForm');
const payments = document.getElementById('payments');
const formBtn = document.getElementById('formBtn');
const addLineBtn = document.getElementById('addLineBtn');
const merchants = document.getElementsByName('council');
var paymentLine = 1;

function addPaymentLine(e) {
    e.preventDefault();
    let glCode = document.getElementById('glCode').value;
    let fundCode = document.getElementById('FundCode').value;
    let amount = document.getElementById('amount').value;
    let narrative = document.getElementById('narrative').value;
    if(fundCode == '') {
        alert('Please set merchant info before adding payments');
        return;
    }
    createPaymentLineDetail(glCode, fundCode, amount, narrative);
    setTotal(amount);
    clearPaymentInputFields();
}

function clearPaymentInputFields() {
    document.getElementById('glCode').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('narrative').value = '';
}

function createPaymentLineDetail(glCode, fundCode, amount, narrative) {

    payment = document.createElement('div');
    payment.setAttribute('class', 'form-row');

    paymentLineLabel = document.createElement('label');
    paymentLineLabel.setAttribute('for', 'Payment_' + paymentLine);
    paymentLineLabel.innerHTML = 'Payment line ' + paymentLine;
    payment.appendChild(paymentLineLabel)

    paymentLineInput = document.createElement('input');
    paymentLineInput.setAttribute('id', 'Payment_' + paymentLine);
    paymentLineInput.setAttribute('name', 'Payment_' + paymentLine);
    paymentLineInput.setAttribute('value', `${glCode}|${fundCode}|${amount}|SE|${narrative}||||||||||||`);
    payment.appendChild(paymentLineInput);
    paymentLine ++;

    payments.appendChild(payment);
}

function setTotal(amount) {
    let paymentTotalInput = document.getElementById('PaymentTotal');
    total = parseFloat(paymentTotalInput.value) + parseFloat(amount);
    paymentTotalInput.setAttribute('value', total);
}

function setMerchant() {
    switch(event.target.value) {
        case 'west':
            setMerchantDetails('OutSystems','01','42');
            break;
        case 'north':
            setMerchantDetails('OutSystems','02','42');
            break;
        default:
            alert('No value selected');
            break;
    }
}

function setMerchantDetails(callingAppId, sourceCode, fundCode) {
    document.getElementById('CallingApplicationID').value = callingAppId;
    document.getElementById('PaymentSourceCode').value = sourceCode;
    document.getElementById('FundCode').value = fundCode;
}

function submitForm(e) {
    e.preventDefault();
    form.action = document.getElementById('instance').value
    form.submit();
}

merchants.forEach(merchant => {
    merchant.addEventListener('click', setMerchant);
})
addLineBtn.addEventListener('click', addPaymentLine);
formBtn.addEventListener('click', submitForm);