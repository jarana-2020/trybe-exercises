import readline  from "readline-sync";

const scripts = [
  { name: "Converter comprimento", script: "./length" },
  { name: "Converter massa", script: "./mass" },
  { name: "Converter capacidade", script: "./capacity"},
  { name: "Converter capacidade", script: "./area"},
]

const scriptsNames = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptsNames, 'Escolha o script para executar', {cancel: 'SAIR'});

if(choice === -1) console.log('Saindo');
else require(scripts[choice].script);
