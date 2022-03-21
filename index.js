    var button = document.querySelector('button');

    button.onclick = function() {
        const product = prompt('Наименование товара', " ");
        const amount = prompt('Количество товара');
        if (isNaN(amount)) {
            document.writeln( ' = ошибка, укажите количество числом =');
            } else {
                const amount = parseInt(amount) 
             }
        const category = prompt('Категория товара');
        const price = prompt('Цена товара');
        alert(''+product+'');
        console.log('На складе ' + amount + 
        ' единиц товара ' + '\"' + product + '\"' + 
        ' на сумму ' + 
        amount * price + ' рублей');
    }  
    
