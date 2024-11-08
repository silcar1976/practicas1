//const calorieCounter = document.getElementById('calorie-counter');

const budgetNumberInput = document.getElementById('budget');
const entryDropdown=document.getElementById("entryDropdown");

const addEntryButton = document.getElementById('add-entry');
//const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError=false;

function cleanInputString(str) {
   let regex;   
  }
//let regex = /hello/; // Paso 20//regex = /\+-/; // Paso 21//regex = /\+-\s/; // Paso 2//regex = /[+\-\s]/; 
// Paso 23
//regex = [+\-\s]/g; 
// Paso 24: usamos el patrón regex en la función cleanInputString
function cleanInputString(str) {
    const regex = /[+\-\s]/g;
    return str.replace(regex, ''); // Reemplazamos +, - y espacio con cadena vacía
  }
function cleanInputString(str) {
    console.log("cadena original:", str);
  
    const regex = /[+\-\s]/g;
  
    // Paso 24: Reemplazar +, -, y espacios con una cadena vacía
    return str.replace(regex, "");
  }
  
  // Paso 26: Prueba de cleanInputString con el valor "+-99"
  //console.log(cleanInputString("+-99"));
  
  // **Eliminar las declaraciones console después de la prueba**
  // Nota: Después de probar en la consola, recuerda eliminar ambas declaraciones console.log.
  
  // Paso 28: Crear la función isInvalidInput
  function isInvalidInput(str) {
    // Paso 29-30: Definir regex que coincida con el carácter 'e' (insensible a mayúsculas/minúsculas)
    let regex = /e/i;
  
    // Paso 31-33: Actualizar regex para hacer coincidir "dígitos + e + dígitos"
    regex = /\d+e\d+/i;
  
    // Paso 34: Usar el método .match() para verificar la coincidencia
    return str.match(regex);
  }
  
  // Paso 35: Probar la función isInvalidInput con "1e3"
  //console.log(isInvalidInput("1e3"));
  //console.log(isInvalidInput("10")); // Debería mostrar null ya que no hay notación científica

// Paso 37: Eliminar console.log después de la prueba (no olvides quitar estas pruebas al finalizar)

// Paso 39-46: Definir la función addEntry y seleccionar el contenedor de entrada
    function addEntry() {
    // Paso 40: Obtén el valor de la categoría seleccionada y añade "#" al inicio
    //const targetId = `#${entryDropdown.value}`;

    // Paso 41-45: Selecciona el contenedor de entrada usando querySelector y cuenta las entradas de texto
    const targetInputContainer = document.querySelector(`${targetId} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;

    // Paso 46: Definir una cadena HTML vacía para la nueva entrada (HTMLString)
    const HTMLString = ` `;
}
//function addEntry() {
    //const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    //const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
   // const HTMLString = `
      //<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
     // <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
      //<label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
      //<input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />
    //`;
    //targetInputContainer.innerHTML += HTMLString;
//}

// Paso 53-56: Asignación del evento al botón para agregar entradas
addEntryButton.addEventListener("click", addEntry);

// Paso 57: Definir una función para obtener el total de calorías de las entradas
function getCaloriesFromInputs(list) {
    // Esta función se implementará en los siguientes pasos
}
// Paso 58: Declara calories y asigna el valor inicial de 0
function getCaloriesFromInputs(list) {
    let calories = 0;
  }
  
  // Paso 59: Iterar sobre la lista
  function getCaloriesFromInputs(list) {
    let calories = 0;
    for (const item of list) {
      // Paso 60: Obtener el valor de cada item en la lista
      const currVal = item.value;
    }
  }
  
  // Paso 61: Limpiar la entrada usando cleanInputString
  function getCaloriesFromInputs(list) {
    let calories = 0;
    for (const item of list) {
      const currVal = cleanInputString(item.value);
    }
  }
  
  // Paso 63: Verificar entrada inválida con isInvalidInput
  function getCaloriesFromInputs(list) {
    let calories = 0;
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
        // Paso 64: Mostrar alerta con el valor inválido
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
      }
    }
  }
  
  // Paso 65: Marcar isError en caso de entrada inválida y salir
  function getCaloriesFromInputs(list) {
    let calories = 0;
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
      }   
    }
}
// Paso 66: Sumar calorías
function getCaloriesFromInputs(list) {
    let calories = 0;
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
        isError = true;
        return null;
      }
      calories += Number(currVal);
    }
  }
  
  // Paso 67: Retornar el total de calorías
  function getCaloriesFromInputs(list) {
    let calories = 0;
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
        isError = true;
        return null;
      }
      calories += Number(currVal);
    }
    return calories;
  }
  
  // Paso 68: Declara la función calculateCalories que toma un evento como argumento
  function calculateCalories(e) {
  
  }
  
  // Paso 69: Prevenir el comportamiento por defecto y reiniciar isError
  function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  }
  // Paso 70-80: Definición completa de la función calculateCalories
function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  
    // Paso 70-72: Obtener los inputs numéricos de cada grupo
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
  
    // Paso 73-75: Obtener calorías de cada categoría usando getCaloriesFromInputs
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  
    // Paso 77: Verificar errores
    if (isError) {
      return;
    }
  
    // Paso 78: Calcular calorías consumidas
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  
    // Paso 79: Calcular calorías restantes
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  
    // Paso 80: Definir si hay excedente o déficit de calorías
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
  
}
function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
  
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  
    if (isError) {
      return;
    }
  
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
  
    // Fixed innerHTML formatting
    output.innerHTML = ''; // clear any previous content
  }
  function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
  
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  
    if (isError) {
      return;
    }
  
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
  
    // Corrected innerHTML with span
    output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}"></span>
    `;
  }
  function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
  
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  
    if (isError) {
      return;
    }
  
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
  
    // Corrected innerHTML with remaining calories displayed
    output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${remainingCalories} Calorie ${surplusOrDeficit}</span>
    `;
  }
  // Paso 89
const calorieCounter = document.querySelector("#calorieCounter");

 //calorieCounter.addEventListener("submit", calculateCalories);

function clearForm() {
    const numberInputs = document.querySelectorAll("#breakfast input[type='number'], #lunch input[type='number'], #dinner input[type='number'], #snacks input[type='number'], #exercise input[type='number']");
    
    // Reset all inputs to 0
    numberInputs.forEach(input => {
      input.value = 0;
    });
  
    // Optionally, clear the output as well
    output.innerHTML = '';
    output.classList.add('hide');  
  }
  
  // Example: agrega botones funcionales
  const clearButton = document.querySelector("#clearButton");
  //clearButton.addEventListener("click", clearForm);
  
  // Paso 96: funcion limpia las entradas y resetea las salidas
    function clearForm() {
    // seleccionar todos los contenedores de entrada
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    //limpriar el contenido de cada contenedor de entrada
    for (const container of inputContainers) {
      container.innerHTML = '';  // Reset the inner content (this removes inputs or other elements)
    }
    
    // Clear the budget input
    budgetNumberInput.value = '';  // Reset the budget input field
    
    // Clear the output display and hide it
    output.innerText = '';  // Reset the result display area
    output.classList.add('hide');  // Optionally hide the output if no results are shown
  }
  