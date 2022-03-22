    var button = document.querySelector('button');

    button.onclick = function() {
        const product = prompt('Наименование товара', " ");
        const amount = prompt('Количество товара');
        const category = prompt('Категория товара');
        const price = prompt('Цена товара');
        
        console.log('amount: ', typeof +amount);
        console.log('price: ', typeof +price);
        console.log('На складе ' + amount + 
        ' единиц товара ' + '\"' + product + '\"' + 
        ' на сумму ' + amount * price + ' рублей');
    }  
    
