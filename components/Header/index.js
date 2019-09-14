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
// const headerContainer = document.querySelector('.header-container');

// function Header(dateObj,hOneObj,tempObj) {
//   // Pulling Elements
//   let theHeader = document.createElement('div');
//   let theDate = document.createElement('span');
//   let h1 = document.createElement('h1');
//   let theTemp = document.createElement('span');

//   theDate.textContent = dateObj;
//   h1.textContent = hOneObj;
//   theTemp.textContent = tempObj;
  
//   // Added Classes
//   theHeader.classList.add('header');
//   theDate.classList.add('date');
//   theTemp.classList.add('temp');

// // Structure
//   headerContainer.prepend(header);
//   header.appendChild(date);
//   header.appendChild(h1);
//   header.appendChild(temp);

//   return header;
// }

// Header('SMARCH 28, 2019', 'Lambda Times', '98°');
