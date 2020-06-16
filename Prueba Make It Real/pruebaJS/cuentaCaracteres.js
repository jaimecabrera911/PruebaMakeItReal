function contarCaracteres(str, char) {
  let contador=0;
  for (let i = 0; i < str.length-1; i++) {
    if(char==str[i]){
        contador+=1;
    }
  }
  return contador;
}

console.log(contarCaracteres("Hello World", "H"));