function forLoop (array){
  for (let i=0; i<25; i++){
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push("I am ${i} strange loop.")
    }
  }
  return array
}

function whileLoop (number) {
  let count = number;
  while (count > 0){
    console.log(--count)
  }
  return "done"
}

function doWhileLoop (array) {
  
}