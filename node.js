const output = document.getElementById("output");
const buttons = document.getElementById("buttonShuffle");
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

  if (nameOne.value == '') {
      alert('Please enter the name.');
      return;
  }

  const option = new Option(nameOne.value, nameOne.value);

  sb.add(option, undefined);

  nameOne.value = '';
  nameOne.focus();
};

  

btnRemove.onclick = (e) => {
  e.preventDefault();

  let selected = [];

  for (let i = 0; i < sb.options.length; i++) {
      selected[i] = sb.options[i].selected;
  }

  let index = sb.options.length;
  while (index--) {
      if (selected[index]) {
          sb.remove(index);
      }
  }
};


function getInputValue() {
    const values = sb.value;
    const total = sums.value;
    let person = values.split(",");
  
    let random = person.sort(() => Math.random() - 0.5);
    console.log(random);


    function chunk(Array, size) {
      if (Array.length <= size) {
        return [Array];
      }
      return [Array.slice(0, size), ...chunk(Array.slice(size), size)];
    }
  
    var team = chunk(random, total);
  
    for (let i = 0; i < team.length; i++) {
      output.innerHTML += `<p> Team ${i + 1}: ${team[i]} </p>`;
    } 
};


  buttons.addEventListener("click", () => {
    container.classList.toggle("resultBoard");
    reset.classList.toggle("resultBoard");
    answer.classList.toggle("resultBoard");
    teams.classList.toggle("visible");
  });
  
  
  reset.addEventListener("click", () => {
    location.reload();
  });
  










