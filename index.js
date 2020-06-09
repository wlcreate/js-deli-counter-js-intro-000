function takeANumber(currentLine, name) {
  currentLine.push(name)
  var place = currentLine.length
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine.shift(0)
  return `Currently serving ${name}.`
  }
