// An alternate solution where nothing is explicit and everything is ninja.

for (const listItem of document.querySelectorAll('ol li')) {
  listItem.addEventListener('click', (event) => {
    event.target.style.textDecoration = 'line-through';
  });
}

for (const listItem of document.querySelectorAll('ul li')) {
  listItem.addEventListener('click', (event) => {
    event.target.style.opacity = 0;
  });
}

for (const picture of document.querySelectorAll('#row img')) {
  picture.addEventListener('click', (event) => {
    event.target.style.width = '0px';
  });
}

document.querySelector('#destroy-all').addEventListener('click', () => {
  for (const listItem of document.querySelectorAll('ol li')) {
    listItem.style.textDecoration = 'line-through';
  }

  for (const listItem of document.querySelectorAll('ul li')) {
    listItem.style.opacity = 0;
  }

  for (const picture of document.querySelectorAll('#row img')) {
    picture.style.width = '0px';
  }
});
