const arr1 = ['Coke', 'Sprite', 'Fanta', 'Monster', 'Red Bull', 'Powerade', 'Pokari Sweat']

const arr2 = ['Coffee', 'Yuja Tea', 'Black Tea', 'Green Tea', 'Americano', 'Latte'] 

const arr3 = ['Ketchup', 'Onion Sauce', 'Black pepper', 'Mustard', 'Soy Sauce', 'Choclate Sauce'] 

function random_drink(arr1)
{
  
return arr1[Math.floor(Math.random()*arr1.length)];
     
}

// Divider (So I dont get confused with the code) 

function random_drink2(arr2)
{
  
return arr2[Math.floor(Math.random()*arr2.length)];
     
}

// 2nd Divider 

function random_drink3(arr3)
{
  
return arr3[Math.floor(Math.random()*arr3.length)];
     
}


document.getElementById('arr1').innerHTML = random_drink(arr1); 
document.getElementById('arr1').innerHTML = random_drink(arr2); 
document.getElementById('arr1').innerHTML = random_drink(arr3); 
