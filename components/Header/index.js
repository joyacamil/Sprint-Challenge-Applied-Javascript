// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector('.header-container');

function Header(dateObj,h1Obj,tempObj) {
  let theHeader = document.createElement('div');
  let theDate = document.createElement('span').textContent = dateObj;
  let h1 = document.createElement('h1').textContent = h1Obj;
  let theTemp = document.createElement('span').textContent = tempObj;

  
  theHeader.classList.add(header);
  theDate.classList.add(date);
  theTemp.classList.add(temp);

 

  headerContainer.prepend('header');
  header.prepend('date');
  header.appendChild('h1');
  header.appendChild('span');
}

const newHeader = Header('SMARCH 28, 2019', 'Lambda Times', '98°');
headerContainer.appendChild(newHeader);
