  var num = 0;

function takeANumber(katzDeli) {
   num ++;
  return `Welcome, you are ticket number ${num} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  return `Currently serving ${katzDeli.shift()}.`;
}

function currentLine(katzDeli) {
	if (katzDeli.length === 0) {
  	return "The line is currently empty.";
  }
  
	var line = "The line is currently: ";
  
  for (let i = 0; i < katzDeli.length; i++) {
  	line += `${i+1}. ${katzDeli[i]}`;
    
    // If it's not the last person in line, we want to add a comma
    if (i < katzDeli.length - 1) {
    	line += ", ";
    }
  }
  
  return line;
}