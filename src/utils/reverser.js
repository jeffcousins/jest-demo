const reverser = (string) => {
  var reversed = string.split('').reverse().join('');

  return `Original: ${string}
Reversed: ${reversed}`;
}

export default reverser;
