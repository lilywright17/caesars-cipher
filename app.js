function rot13(str) {
  let decoded = "";
  let firstHalf = "ABCDEFGHIJKLM";
  let secondHalf = "NOPQRSTUVWXYZ";

  let translated = [];

  for (let i = 0; i < str.length; i++){
   let letterToDecode = str[i];
   if (firstHalf.indexOf(str[i]) >= 0) {
     decoded += secondHalf[firstHalf.indexOf(str[i])];
   } else if (secondHalf.indexOf(str[i]) >= 0) {
     decoded += firstHalf[secondHalf.indexOf(str[i])]
   } else {
     decoded += str[i];
   }
  }
 return decoded;
  }
 


console.log(rot13("SERR PBQR PNZC"));
