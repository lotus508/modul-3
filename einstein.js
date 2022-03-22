var button = document.querySelector('button');

const speedLight = '3e8';

button.onclick = function() {
    const myWeight = prompt('Масса тела', " ");
    
    console.log('Энергия ' + myWeight * speedLight**2);
}  