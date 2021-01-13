var accord = document.getElementsByClassName('section');
var i;
for (i = 0; i < accord.length; i++) {
    accord[i].onclick = function() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    }
}
