const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.numeros')
const ac = document.getElementById('delall');
const opers = document.querySelectorAll('.functs');
const equal = document.querySelector('#equal');
const c = document.getElementById('del');
const dot = document.getElementById('dot');


let curr_opp;
let first_number = '';
let second_number = '';
let isOperation = false;
let isDot = false;
let currOper;


//dot button
dot.addEventListener('click', () => {
  if (isDot === false) {
    if (isOperation === false) {
      if (first_number === ""){
        first_number = '0';
        first_number += '.';
        screen.innerHTML = first_number;
        isDot = true;
      } else {
        first_number += '.';
        screen.innerHTML = first_number;
        isDot = true;
      }
    } else {
      if (second_number === "") {
        second_number = '0';
        second_number += '.';
        screen.innerHTML = first_number;
        isDot = true;
      } else {
        second_number += '.';
        screen.innerHTML = first_number;
        isDot = true;
      }
    }
  }

})



//C button 
c.addEventListener('click', () => {
  if ( (screen.innerHTML === first_number) || (isOperation === false)){
    if ((first_number.length === 1) || (first_number === '')){
      first_number = '0';
      screen.innerHTML = parseFloat(first_number);
    } else {
    first_number = first_number.slice(0, -1);
    screen.innerHTML = parseFloat(first_number);
    }
  } else {
    if (second_number.length === 1) {
      second_number = '0';
      screen.innerHTML = parseFloat(second_number);
    } else {
      second_number = second_number.slice(0, -1);
      screen.innerHTML = parseFloat(second_number);
    }
  }
})


//AC button/clears all
ac.addEventListener('click', () => {
  first_number = '';
  second_number = '';
  isDot = false;
  isOperation = false;
  screen.innerHTML = 0;
})


//number buttons
numbers.forEach (element => {
  element.addEventListener('click', () => {
    if ( (isOperation === false) && (first_number.length < 16) ) {
      first_number += element.innerHTML;
      screen.innerHTML = parseFloat(first_number);
    } else if ((isOperation === true) && (second_number.length < 16)) {
      second_number += element.innerHTML;
      screen.innerHTML = parseFloat(second_number);
    }
  })
})

//operation buttons
opers.forEach (element => {
  element.addEventListener('click', () => {
    second_number = '';
    isOperation = true;
    currOper = element.id;
    isDot = false;
    })
})

//equal button
equal.addEventListener('click', () => {
  //when no second number is given, operator and then equal ->
  if (second_number === '') {
    switch (currOper) {
      case 'add': 
      first_number = `${parseFloat(first_number) + parseFloat(first_number)}`;
      screen.innerHTML = parseFloat(first_number);
        break;
      case 'sub':
        first_number = `${parseFloat(first_number) - parseFloat(first_number)}`;
        screen.innerHTML = parseFloat(first_number);
        break;
      case 'mult':
        first_number = `${parseFloat(first_number) * parseFloat(first_number)}`;
        screen.innerHTML = parseFloat(first_number);
        break;
      case 'div':
        first_number = `${parseFloat(first_number) / parseFloat(first_number)}`;
        screen.innerHTML = parseFloat(first_number);
        break;
      default:
    }
    isDot = false;
   

  } else {
    //when both first and second number is written
    switch(currOper) {
      case 'add':
        first_number = `${parseFloat(first_number) + parseFloat(second_number)}`;
          screen.innerHTML = parseFloat(first_number);
        break;
      case 'sub':
        first_number = `${parseFloat(first_number) - parseFloat(second_number)}`;
          screen.innerHTML = parseFloat(first_number);
        break;
      case 'div':
        first_number = `${parseFloat(first_number) / parseFloat(second_number)}`;
          screen.innerHTML = parseFloat(first_number);
        break;
      case 'mult':
        first_number = `${parseFloat(first_number) * parseFloat(second_number)}`;
        screen.innerHTML = parseFloat(first_number);
        break;
      default:
    }
    isDot = false;
  }
 })


/*


first_number = `${parseFloat(first_number) + parseFloat(first_number)}`;
if (first_number.length > 14) {
  screen.innerHTML = 'Error, number is too long';
} else {
  screen.innerHTML = parseFloat(first_number);
}

*/