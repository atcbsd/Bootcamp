document.getElementById("filterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const itemFilter = document.getElementById("itemFilter").value;
    const amountFilter = document.getElementById("amountFilter").value;
  
    fetch(`/filteredResults?item=${itemFilter}&amount=${amountFilter}`)
      .then(response => response.json())
      .then(data => {
        let html = "<ul>";
        data.forEach(result => {
          html += `<li>${result.item} - ${result.amount}</li>`;
        });
        html += "</ul>";
  
        document.getElementById("filteredResults").innerHTML = html;
      })
      .catch(error => {
        console.error("Error al obtener los resultados filtrados:", error);
      });
  });
  