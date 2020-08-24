const body = document.getElementById('heading');

console.log('josh');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let entries = urlParams.entries();

for(const entry of entries) {
    let p = document.createElement('p');
    p.innerHTML = `<strong>${entry[0]}:</strong> ${entry[1]}`
    body.insertAdjacentElement('afterend',p);
    console.log(`${entry[0]}: ${entry[1]}`)
};
