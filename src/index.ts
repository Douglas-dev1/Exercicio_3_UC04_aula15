/*3- A criptografia é um conjunto de técnicas pensadas para proteger uma informação de modo que apenas o emissor e receptor consigam compreendê-la. 
 *Uma forma simples de fazer criptografar um vetor de strings é aplicar uma lógica de troca em cada posição do vetor, de modo que apenas o programador conheça a regra, 
 *lembrando que a regra aplicada precisa de alguma forma ser reversível. Dessa forma um vetor auxiliar e faça a cópia dos dados do vetor original, 
 *porém de forma criptografada e na sequência imprima os dados criptografados no console e por fim, crie outro vetor auxiliar que faça a restauração do texto original, 
 *copiando a partir do vetor criptografado, e também faça a impressão no console do mesmo.*/

function criptografarArray(vetorEntrada: string[]): string[] {
  let stringAuxiliar: string[] = [];

  for (let stringOriginal of vetorEntrada) {
      let stringEncriptada = '';
      for (let char of stringOriginal) {
          stringEncriptada += String.fromCharCode(char.charCodeAt(0) + 5);
      }
      stringAuxiliar.push(stringEncriptada);
  }

  return stringAuxiliar;
}

function descriptografarArray(vetorEntrada: string[]): string[] {
  let stringAuxiliar: string[] = [];

  for (let stringEncriptada of vetorEntrada) {
      let stringOriginal = '';
      for (let char of stringEncriptada) {
          stringOriginal += String.fromCharCode(char.charCodeAt(0) - 5);
      }
      stringAuxiliar.push(stringOriginal);
  }

  return stringAuxiliar;
}

async function main() {
  /* FAZENDO A AQUISIÇÃO DOS DADOS */
  const vetorOriginal: string[] = ["lorem ipsum", "belessa", "ta pegando", "fogo bixo"];
  const vetorCriptografado: string[] = criptografarArray(vetorOriginal);
  const vetorDescriptografado: string[] = descriptografarArray(vetorCriptografado);

  console.log("Vetor original: ", vetorOriginal);
  console.log("Vetor criptografado: ", vetorCriptografado);
  console.log("Vetor descriptografado: ", vetorDescriptografado);
}

(async () => {
  await main();
})();