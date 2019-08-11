function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  // console.log(string.toUpperCase()); 
  // or you can write 
  console.log(shout(string));
  // it will call function shout(string)
}

function logWhisper(string){
  console.log(whisper(string));
  // or you can write 
  // console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  
}
