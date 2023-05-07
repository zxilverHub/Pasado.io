const no = document.getElementById('no'),
      yes = document.getElementById('yes'),
      container = document.querySelector('.container'),
      tres = document.querySelector('.tres');


no.addEventListener('click', () => {
    let randXlocation = Math.floor(Math.random() * 78 - 5);
    randXlocation  = Number(randXlocation);
    let randYlocation = Math.floor(Math.random() * 75 - 20);
    randYlocation  = Number(randYlocation);
    no.setAttribute('style', `left:${randXlocation}%; top:${randYlocation}%`);
})

yes.addEventListener('click', () => {
    container.setAttribute('style', 'display: none;');
    tres.setAttribute('style', 'display: block;');
})