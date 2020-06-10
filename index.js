function takeANumber(currentLine, name) {
  currentLine.push(name)
  var place = currentLine.length
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine.shift(0)
    return `Currently serving ${name}.`
  }
}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i <= currentLine.length; i++) {
      var place = ` ${i++}. ${currentLine[i]},`
      return "The line is currently:" + place
    }
  }
}
