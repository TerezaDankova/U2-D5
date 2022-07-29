const output = document.getElementById("output");
const buttons = document.getElementById("buttons");
const reset = document.getElementById("resetButton");
const container = document.querySelector(".containerOne");
const answer = document.querySelector(".resultBoard");
const teams = document.querySelector(".teams");
const sums = document.getElementById("numberTeam");
const btnAdd = document.querySelector('#btnAdd');
const btnRemove = document.querySelector('#btnRemove');
const sb = document.querySelector('#list');
const nameOne = document.querySelector('#nameOne');


btnAdd.onclick = (e) => {
  e.preventDefault();

  // validate the option
  if (nameOne.value == '') {
      alert('Please enter the name.');
      return;
  }

  // create a new option
  const option = new Option(nameOne.value, nameOne.value);
  // add it to the list
  sb.add(option, undefined);

  // reset the value of the input
  nameOne.value = '';
  nameOne.focus();
};


  function getInputValue() {
    const values = sb.value;
    const total = sums.value;
    let person = values.split(",");
  
    let random = person.sort(() => Math.random() - 0.5);
    console.log(random);


    function chunk(sb, size) {
      if (sb.length <= size) {
        return [sb];
      }
      return [sb.slice(0, size), ...chunk(sb.slice(size), size)];
    }
  
    var team = chunk(random, total);
  
    for (let i = 0; i < team.length; i++) {
      output.innerHTML += `<p> Team ${i + 1}: ${team[i]} </p>`;
    } 
  }


  buttons.addEventListener("click", () => {
  
    container.classList.toggle("resultBoard");
    reset.classList.toggle("resultBoard");
    answer.classList.toggle("resultBoard");
    
    teams.classList.toggle("visible");
  });
  
  
  
  
  reset.addEventListener("click", () => {
    location.reload();
  });
  








  
// remove selected option
btnRemove.onclick = (e) => {
    e.preventDefault();

    // save the selected option
    let selected = [];

    for (let i = 0; i < sb.options.length; i++) {
        selected[i] = sb.options[i].selected;
    }

    // remove all selected option
    let index = sb.options.length;
    while (index--) {
        if (selected[index]) {
            sb.remove(index);
        }
    }
};

