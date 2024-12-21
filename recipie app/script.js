async function get(userinput) {
    try {
      let url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userinput}`);
      let data = await url.json();
  
      console.log("API Response:", data.meals);
  
      // Check if meals exist in the response
      if (data.meals && data.meals.length > 0) {
        // Get the container element
        let container = document.querySelector('.container');
  
        // Clear any previous results
        container.innerHTML = '';
  
        // Create a new card for the meal
        let div = document.createElement('div');
        div.classList.add('card');
  
        // Add user input as the title
        let p0 = document.createElement('p');
        p0.textContent = `Search: ${userinput}`;
  
        // Add meal ID
        let p1 = document.createElement('p');
        p1.textContent = `Meal ID: ${data.meals[0].idMeal}`;
  
        // Append user input and meal ID to the card
        div.appendChild(p0);
        div.appendChild(p1);

        let z = document.createElement('p');
        z.textContent = data.meals[0].strMeal;
        z.style.fontSize = '5rem';
        z.style.textAlign = 'center';
        z.style.marginBottom = '50px';
        z.style.color = 'yellow'

        div.appendChild(z)

        let x = document.createElement('p');
        x.textContent = 'Ingreadents'

        x.style.fontSize = '3rem';

        div.appendChild(x)
  
        // Loop through the ingredients (1 to 10)

        let items = document.createElement('div');
        items.classList.add('items')

        for (let x = 1; x <= 20; x++) {
          let ingredient = data.meals[0][`strIngredient${x}`]; // Dynamically access ingredient
  
          if (ingredient) { // Only append if the ingredient exists
            let pIngredient = document.createElement('p');
            pIngredient.textContent = `${x}. ${ingredient}`; // Label ingredients as 1, 2, 3, etc.
            items.appendChild(pIngredient); // Append each ingredient to the div
          }
        }

        div.appendChild(items)
        

        let p2_1 = document.createElement('p');
        p2_1.textContent = 'Instructions';

        p2_1.style.fontSize = '3rem'


        let p2 = document.createElement('p');
        p2.textContent = data.meals[0].strInstructions;

        p2.style.fontSize = '1.5rem';
        p2.style.marginTop = '50px';
        p2.style.lineHeight = '40px';
        p2.style.wordSpacing = '5px';
        p2.style.color = 'rgb(118, 214, 243)';
        

        div.appendChild(p2_1);
        div.appendChild(p2);
        
        // strMeasure1
        let y = document.createElement('p');
        y.textContent = 'Measure'

        y.style.fontSize = '3rem'
        y.style.marginTop = '50px'

        div.appendChild(y)

        let items2 = document.createElement('div');
        items2.classList.add('items')

        for (let y = 1; y<= 20; y++) {
            let Measure = data.meals[0][`strMeasure${y}`];

            if(Measure && Measure.trim() !== ""){
                let pMeasure = document.createElement('p');
                pMeasure.textContent = `${y}. ${Measure}`;
                items2.appendChild(pMeasure);
            }
        }

        div.appendChild(items2)
  

        // Append the card to the container
        container.appendChild(div);

      } else {
        console.log("No meals found.");
        document.querySelector('.container').textContent = "No meals found for your input.";
      }


    } catch (err) {
      console.error("Error fetching meals:", err);
      document.querySelector('.container').textContent = "An error occurred. Please try again.";
    }
  }
  
  // Add event listener to the button
  let input = document.getElementById('input');
  let btn = document.getElementById('btn');
  
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
  
    let userinput = input.value.trim(); // Get and trim user input
  
    if (userinput) {
      get(userinput); // Call the get function with the user input
    } else {
      document.querySelector('.container').textContent = "Please enter a valid meal name.";
    }
  });
  