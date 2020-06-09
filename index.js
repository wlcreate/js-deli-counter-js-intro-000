function takeANumber(currentLine, name) {
  currentLine.push(name)
  var place = currentLine.length
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine = []) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine.shift(0)
    return `Currently serving ${name}.`
  }
}
