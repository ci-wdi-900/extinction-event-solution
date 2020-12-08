// An alternate solution where helper functions avoid duplication

const strikeThrough = (element) => element.style.textDecoration = 'line-through';

const fade = (element) => element.style.opacity = 0;

const collapse = (element) => element.style.width = '0px';


for (const listItem of document.querySelectorAll('ol li')) {
  listItem.addEventListener('click', (event) => {
    strikeThrough(event.target);
  });
}

for (const listItem of document.querySelectorAll('ul li')) {
  listItem.addEventListener('click', (event) => {
    fade(event.target);
  });
}


for (const picture of document.querySelectorAll('#row img')) {
  picture.addEventListener('click', (event) => {
    collapse(event.target);
  });
}

document.querySelector('#destroy-all').addEventListener('click', () => {
  for (const listItem of document.querySelectorAll('ol li')) {
    strikeThrough(listItem);
  }

  for (const listItem of document.querySelectorAll('ul li')) {
    fade(listItem);
  }

  for (const picture of document.querySelectorAll('#row img')) {
    collapse(picture);
  }
});
