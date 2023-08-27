document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#expense-form');
    const expenseList = document.querySelector('#expense-list');
    const categoryTotals = {};
    let totalGeneral = 0;
    const categoryTotalContainer = document.querySelector('#category-total-container');
    const generalTotalContainer = document.querySelector('#general-total-container');
    const saveButton = document.querySelector('#save-button');
    const sendButton = document.querySelector('#send-button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const expense = document.querySelector('#expense').value;
        const file1 = document.querySelector('#file1').files[0];
        const file2 = document.querySelector('#file2').files[0];
        const category = document.querySelector('#category').value;
        const amount = parseFloat(document.querySelector('#amount').value);

        const listItem = document.createElement('li');
        listItem.classList.add('list-item');

        const listItemDetails = document.createElement('div');
        listItemDetails.classList.add('list-item-details');

        const expenseTitle = document.createElement('h3');
        expenseTitle.textContent = expense;
        listItemDetails.appendChild(expenseTitle);

        const expenseFiles = document.createElement('ul');
        if (file1) {
            const fileItem1 = document.createElement('li');
            fileItem1.textContent = file1.name;
            expenseFiles.appendChild(fileItem1);
        }
        if (file2) {
            const fileItem2 = document.createElement('li');
            fileItem2.textContent = file2.name;
            expenseFiles.appendChild(fileItem2);
        }
        listItemDetails.appendChild(expenseFiles);

        const expenseCategory = document.createElement('p');
        expenseCategory.textContent = 'Categoría: ' + category;
        listItemDetails.appendChild(expenseCategory);

        const expenseAmount = document.createElement('p');
        expenseAmount.textContent = 'Monto: $' + amount.toFixed(2);
        listItemDetails.appendChild(expenseAmount);

        const listItemTotals = document.createElement('div');
        listItemTotals.classList.add('list-item-totals');

        if (categoryTotals.hasOwnProperty(category)) {
            categoryTotals[category] += amount;
        } else {
            categoryTotals[category] = amount;
        }
        totalGeneral += amount;

        const categoryTotalText = 'Total por Categoría:';
        const categoryTotalList = document.createElement('ul');
        for (let cat in categoryTotals) {
            const categoryTotalItem = document.createElement('li');
            categoryTotalItem.textContent = cat + ': $' + categoryTotals[cat].toFixed(2);
            categoryTotalList.appendChild(categoryTotalItem);
        }

        categoryTotalContainer.innerHTML = '';
        categoryTotalContainer.appendChild(document.createTextNode(categoryTotalText));
        categoryTotalContainer.appendChild(categoryTotalList);

        generalTotalContainer.textContent = 'Total General: $' + totalGeneral.toFixed(2);

        listItem.appendChild(listItemDetails);
        listItem.appendChild(listItemTotals);
        expenseList.appendChild(listItem);

        form.reset();
    });

    saveButton.addEventListener('click', function() {
        alert('Los gastos se han guardado.');
    });
    

    sendButton.addEventListener('click', function() {
        alert('Los gastos se han enviado.');
    });

    const submitButton = document.querySelector('#submit-button');

    submitButton.addEventListener('click', function() {
        // Obtener los valores del formulario
        const fecha = document.querySelector('#date').value;
        const destino = document.querySelector('#destination').value;
        const lugar_visitado = document.querySelector('#visited-companies').value;
        const motivo_visita = document.querySelector('#purpose').value;
        const observaciones = document.querySelector('#observations').value;
        const gasto = document.querySelector('#expense').value;
        const archivo1 = document.querySelector('#file1').value; // Obtén el nombre del archivo, no el objeto File
        const archivo2 = document.querySelector('#file2').value; // Obtén el nombre del archivo, no el objeto File
        const categoria = document.querySelector('#category').value;
        const monto = parseFloat(document.querySelector('#amount').value);

        // Crear un objeto con los datos del formulario
        const formData = {
            fecha: fecha,
            destino: destino,
            lugar_visitado: lugar_visitado,
            motivo_visita: motivo_visita,
            observaciones: observaciones,
            gasto: gasto,
            archivo1: archivo1,
            archivo2: archivo2,
            categoria: categoria,
            monto: monto
        };

        // Enviar los datos al servidor utilizando una solicitud POST
        fetch('/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(function(response) {
                if (response.ok) {
                    alert('Gasto agregado correctamente y guardado en la base de datos.');
                    form.reset();
                } else {
                    throw new Error('Error al agregar el gasto.');
                }
            })
            .catch(function(error) {
                console.error(error);
                alert('Error al agregar el gasto y guardar en la base de datos.');
            });
    });
});