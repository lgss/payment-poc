const form = document.getElementById('paymentForm');
const formBtn = document.getElementById('formBtn');
const inputs = document.getElementById('inputs');

function addInput(name, value) {
    let input = document.createElement('input');
    input.setAttribute('name', name);
    input.setAttribute('value', value);
    inputs.appendChild(input);

}

function submitForm(e) {
    e.preventDefault();
    form.action = document.getElementById('instance').value
    addInput("CallingApplicationID", "Outsystems");
    addInput("FundCode", "42");
    addInput("PaymentSourceCode", "01");
    addInput("CallingApplicationTransactionReference", `ProxyTest_${Date.now()}`);
    addInput("Payment_1", "BLB-J6300-0110000929|42|10.00|SE|Blue Badge||||||||||||");
    addInput("PaymentTotal", "10");
    addInput("ReturnURL", "http://localhost:8080/result.html");
    addInput("BackButtonURL", "http://localhost:8080");
    form.submit();
}

formBtn.addEventListener('click', submitForm);