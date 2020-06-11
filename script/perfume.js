    var xhr = new XMLHttpRequest();
    var url = '../json/perfume.json' ;
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            var products = JSON.parse(this.responseText);
            var output = '';
            for (var i in products) {
                output +=
                '<div class="item">' +
                '<div class="description">' +
                '<img src="' + products[i].image + '" width="230" height="300" >' +
                '<div class="info">' + 
                '<h2>' + products[i].name + '</h2>' +
                '<ul>' +
                '<li>' + products[i].description[0] +  '</li>' +
                '<li>' + products[i].description[1] +  '</li>' +
                '<li>' + products[i].description[2] +  '</li>' +
                '<li>' + products[i].description[3] +  '</li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '<div class="btn">' +
                '<a href ="' +products[i].url + '">BUY NOW</a>' +
                '</div>' +
                '</div>';         
            }
            document.getElementById('product').innerHTML = output;
        }
    }
    xhr.send();
