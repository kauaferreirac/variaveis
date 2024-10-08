const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Kauã Ferreira Cordeiro";
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 16;

console.log("Oi eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade );

let AnoAtual = 2025;
let Idade = 17;
const NomeCompleto = "Kauã ferreira cordeiro";
const Faculdade = "Administração e Desenvolvimento de sistema ";
console.log("Olá eu sou " + NomeCompleto + ", tenho " + Idade + " anos " +  "estou em" + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);
console.log(`oi eu sou ${nomeCompleto}, tenho ${idade} anos,nasci em ${anoNascimento}, e em ${AnoAtual} eu quero seguir na área de ${Faculdade}`);

const loginCerto = "Kauã";
const senhaCerta = "12346";
console.log(" ");
console.log(" ")
console.log("        = ✞ = 𝔸𝔾𝔼ℕℂ𝕀𝔸 𝔻𝔼 𝕍𝕀𝔸𝔾𝔼ℕ𝕊 = ✞ =");
console.log(" ")
console.log("  ✞  ℜ𝔢𝔞𝔩𝔦𝔷𝔢 𝔰𝔢𝔲 𝔩𝔬𝔤𝔦𝔫 𝔞𝔮𝔲𝔦 ✞  ")
var login = entrada("  ✞ ᴅɪɢɪᴛᴇ ꜱᴇᴜ ʟᴏɢɪɴ:     ");
var senha = entrada("digite sua senha: ");
while(login != loginCerto){
  console.log("login Incorreto");
  login = entrada("digite seu login novamente:");
}
  while(senha != senhaCerta){
    console.log("senha Incorreta");
    senha = entrada("digite sua senha novamente:");
}
const listaDeViagens = new Array(
  `Japão`,
  `Canadá`,
  `Estados Unidos`,
  `México`,
  `Rússia`)
console.log(listaDeViagens);
console.log(listaDeViagens[4]);
listaDeViagens.push("Campo Mourão");
console.log(listaDeViagens);
listaDeViagens.splice(1,2);
console.log(listaDeViagens);
var nomeComprador = entrada("qual é o seu nome? ");
var idadeComprador = entrada("qual é a sua idade? ");
if(idadeComprador < 18){
  console.log("Não vendemos passagens para menores de 18 anos.");
console.log(`Ja que sua idade é ${idadeComprador} infelizmente não podemos te vender as passagens`);
}
if(idadeComprador >= 18){
   console.log("Compra realizada com sucesso.")
  console.log(`Ja que sua idade é ${idadeComprador} podemos te vender a passagem parabens!`);
}