'use strict';

const menu1 = {
  title: "Dnešní menu",
  items: [
    {
      title: 'Telecí hanger steak',
      info: 'Tymiánový porto demiglace, květákové pyré, ragú ze žluté řepy s bylinkami',
      price: 299,
    },
    {
      title: 'Grilované kuřecí stripsy',
      info: 'Stehenní kuřecí stripsy marinované v bílém jogurtu s limetkou a kurkumou, máslový kuskus s mátou, lístky rukoly, bylinkový dip',
      price: 169,
    },
    {
      title: 'Quesadilla s kuřecím masem',
      info: 'Se sýrem cheddar, jalapenos papričkami a bbq omáčkou, malý listový salátek, česnekový dip',
      price: 159,
    },
    {
      title: 'Čočka na kyselo',
      info: 'Uzená krkovice, sázené vejce, kyselá okurka, cibulka smažená v sádle',
      price: 149,
    },
  ]
};

const menu2 = {
  title: "Zítřejší menu",
  items: [
    {
      title: 'Bramborová pánev Pikant',
      info: 'S kuřecím masem, zelenými fazolkami, chilli papričkami, kukuřicí a slaninou, sypané sýrem Cheddar',
      price: 235,
    },
    {
      title: 'Krkovice opečená na grilu',
      info: 'Volské oko se slaninou, restované brambory s tymiánem',
      price: 239,
    },
    {
      title: 'Burger Bacon',
      info: 'S masem, slaninou, sýrem, šťavnatými rajčaty, čerstvým ledovým salátem, majonézou, nakládanými okurkami a cibulí, steakové belgické hranolky, pikantní dip',
      price: 259,
    },
    {
      title: 'Mexické nachos',
      info: 'Gratinované sýrem cheddar, zakysaná smetana, paprika',
      price: 115,
    },
  ]
};

const app = document.querySelector('#app');
app.appendChild(renderMenu(menu1));
app.appendChild(renderMenu(menu2));
