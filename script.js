var more = document.querySelectorAll('.button-more');

for (var i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    var showPerClick = 4;
    
    var hidden = this.parentNode.querySelectorAll('div.item-hidden');
    for (var i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";

      hidden[i].classList.remove('item-hidden');
    }
  });
}
