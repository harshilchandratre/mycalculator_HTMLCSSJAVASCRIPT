/*code author : harshil chandratre*/

let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {

    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      }
      catch (err) {
        string = "Invalid input!";
        document.querySelector('input').value = string;
      }
    }
    else if (e.target.innerHTML == "Clear") {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (string == "Invalid input!") {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (string == "Infinity") {
      string = "";
      document.querySelector('input').value = string;
    }
    else {
      /*console.log(e.target)*/
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }

  })
})