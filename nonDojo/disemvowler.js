function disemvowler(str){
  let vowels = 'aAeEiIoOuU'
  return str.split('').filter( cur => !vowels.includes( cur )).join('')
}