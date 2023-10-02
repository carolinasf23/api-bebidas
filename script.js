document.getElementById('cocktailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cocktailName = document.getElementById('cocktailName').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
      .then(response => response.json())
      .then(data => {
        const cocktail = data.drinks[0];
        const cocktailInfoDiv = document.getElementById('cocktailInfo');
        cocktailInfoDiv.innerHTML = `
          <h4 class="text-center">${cocktail.strDrink}</h4>
          <div class="row mt-4">
            <div class="col-md-4">
              <img src="${cocktail.strDrinkThumb}" class="img-fluid" alt="Imagen del Cóctel">
            </div>
            <div class="col-md-8">
              <p><strong>Categoría:</strong> ${cocktail.strCategory}</p>
              <p><strong>Alcohólico:</strong> ${cocktail.strAlcoholic}</p>
              <p><strong>Vaso:</strong> ${cocktail.strGlass}</p>
              <p><strong>Instrucciones:</strong> ${cocktail.strInstructions}</p>
            </div>
          </div>
        `;
      })
      .catch(error => console.error('Error:', error));
  });