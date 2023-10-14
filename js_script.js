const container = document.querySelector('#container');

const paraG = document.createElement('p');
//Name new p class below
paraG.classList.add('first');
paraG.textContent = "Hey Im red!";
paraG.style.color = 'red';
container.append(paraG);

const head3 = document.createElement('h3');
head3.classList.add('firstH');
head3.textContent = "Im a blue h3!";
head3.style.color = 'blue';
container.append(head3);

const innerD = document.createElement('div');
innerD.classList.add('innerDiv');
innerD.style.backgroundColor = 'pink';
innerD.style.border = '4px solid black';
container.append(innerD);

const head1 = document.createElement('h1');
head1.classList.add('secondH');
head1.textContent = "Im in a div";
head1.style.color = 'blue';
innerD.append(head1);

const paraGInD = document.createElement('p');
paraGInD.classList.add('secondP');
paraGInD.textContent = "Me too";
paraGInD.style.color = 'red';
innerD.append(paraGInD);

const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

//They Do the same as the anonymous function above
// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }
  
//   // METHOD 2
//   btn.onclick = alertFunction;
  
//   // METHOD 3
//   btn.addEventListener('click', alertFunction);

// btn.addEventListener('click', function (e) {
//     console.log(e);
//   });

// btn.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

// btn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
//   });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});