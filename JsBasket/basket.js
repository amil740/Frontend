function loadBasketPage() {
    var saved = localStorage.getItem('basketItems');
    var basketItems = {};
    var basketCount = 0;
    
    if (saved) {
        basketItems = JSON.parse(saved);
        for (var item in basketItems) {
            basketCount += basketItems[item].count;
        }
    }
    
    document.getElementById('basketCount').textContent = basketCount;
    
    var basketTable = document.getElementById('basketTable');
    basketTable.innerHTML = '';
    
    for (var productName in basketItems) {
        var item = basketItems[productName];
        var row = '<tr>' +
            '<td><img src="/download.jpg" style="width: 50px; height: 50px; object-fit: cover;"></td>' +
            '<td>' + productName + '</td>' +
            '<td>' + item.price + '</td>' +
            '<td>' + item.count + '</td>' +
            '<td><a href="#" onclick="removeItem(\'' + productName + '\'); return false;" class="text-danger">x</a></td>' +
            '</tr>';
        basketTable.innerHTML += row;
    }
}

function removeItem(productName) {
    var saved = localStorage.getItem('basketItems');
    var basketItems = JSON.parse(saved) || {};
    
    if (basketItems[productName]) {
        basketItems[productName].count--;
        if (basketItems[productName].count <= 0) {
            delete basketItems[productName];
        }
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        loadBasketPage();
    }
}

loadBasketPage();
