let element_list = document.getElementById('list');
element_list.style.backgroundColor = '#ff6666';
let new_li = document.createElement('li');
new_li.innerText = 'Pear';
new_li.style.color = '#33ff33';

element_list.appendChild(new_li);
let new_li2 = document.createElement('li');
new_li2.innerText = 'Kiwi';
new_li2.style.color = '#993300';

element_list.appendChild(new_li2);
let new_li3 = document.createElement('li');
new_li3.innerText = 'Banana';
new_li3.style.color = '#ffff00';

element_list.appendChild(new_li3);
