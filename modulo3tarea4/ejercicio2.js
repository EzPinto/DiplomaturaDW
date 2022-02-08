const mens = document.getElementById('mensaje');
const cont = document.getElementById('contador');

mens.addEventListener('keyup', function(e) {
    const target = e.target;
    const longitudAct = target.value.length;
    cont.innerHTML = `${longitudAct}`;
});