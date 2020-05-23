'use strict';

const menuItemTemplate = Handlebars.compile(
  document.querySelector('#menu-item-template').innerHTML
);

const renderMenuItem = (item) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = menuItemTemplate(item);
  return helperELm.children[0];
};


