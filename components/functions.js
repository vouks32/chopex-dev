export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function verifyNumber(x) {
 
  if(!x){
    return { isGood: false, error: "Veillez entrer le numéro de téléphone" }

  }

  if (x.length != 9 && x.length != 12) {
    return { isGood: false, error: "Le numéro n'est pas valide", explanation: "le nombre de chiffre ne correspond pas a un numéro valide" }
  } else if (!x.startsWith('6') && !x.startsWith('237')) {
    return { isGood: false, error: "Le numéro n'est pas valide", explanation: "le numéro doit commencer par 6 ou 237" }
  }
  return { isGood: true, number: x.length == 9 ? '237' + x : x }
}