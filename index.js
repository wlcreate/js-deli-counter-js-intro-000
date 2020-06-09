function takeANumber(currentLine, name) {
  currentLine.push(name)
  var place = currentLine.length
  return `Welcome, ${name}. You are number ${place} in line.`
}
