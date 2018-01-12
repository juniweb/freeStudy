const data = [
  {
    name : 'coffee-bean',
    order : true,
    items : ['americano', 'milk', 'green-tea']
  },
  {
    name : 'starbucks',
    order : false
  }  
];

const template = `welcome ${data[0].name} !!`;
console.log(template);