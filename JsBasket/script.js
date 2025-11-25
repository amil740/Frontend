var basketCount = 0;
var basketItems = {};

function loadBasket() {
    var saved = localStorage.getItem('basketItems');
    if (saved) {
        basketItems = JSON.parse(saved);
        basketCount = 0;
        for (var item in basketItems) {
            basketCount += basketItems[item].count;
        }
        document.getElementById('basketCount').textContent = basketCount;
    }
}

function saveBasket() {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
}

var buttons = document.querySelectorAll('.btn-primary');

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        var cardBody = this.parentElement;
        var productName = cardBody.querySelector('.card-title').textContent;
        var productPrice = cardBody.querySelector('h4').textContent;
        
        if (basketItems[productName]) {
            basketItems[productName].count++;
        } else {
            basketItems[productName] = {
                price: productPrice,
                count: 1
            };
        }
        
        basketCount++;
        document.getElementById('basketCount').textContent = basketCount;
        saveBasket();
    });
});

loadBasket();
