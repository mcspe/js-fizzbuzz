const container = document.querySelector('.container');

for(let i=1; i<=100; i++){

  const box = document.createElement('div');
  box.classList.add('box');
  container.append(box);

  let text = '';
  
  if ((i % 3) && (i % 5)){
    text = i;
    // box.append(text);
  } else{
    if(!(i % 3)){
      text += 'Fizz';
    } 
    if(!(i % 5)){
      text += 'Buzz';
    } 
  }

  box.append(text);

}