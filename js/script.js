for(let i=1; i<=20; i++){
  //console.log(i);
  if ((i % 3) && (i % 5)){
    console.log(i);
  } else{
    if(!(i % 3)) console.log('fizz');
    if(!(i % 5)) console.log('buzz');
  }
}