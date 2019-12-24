// проверка поля ввода
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
// счетчик
var numCount = document.getElementById('num_count');
    var plusBtn = document.getElementById('button_plus');
    var minusBtn = document.getElementById('button_minus');
    plusBtn.onclick = function() {
      var qty = parseInt(numCount.value);
      qty = qty + 1;
      numCount.value = qty;
    }
    minusBtn.onclick = function() {
      var qty = parseInt(numCount.value);
      qty = qty - 1;
      numCount.value = qty;
    }