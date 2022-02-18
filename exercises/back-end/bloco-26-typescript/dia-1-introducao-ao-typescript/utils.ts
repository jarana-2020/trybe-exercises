import readline from 'readline-sync';

export const convert = (gauges: string[], value: number, forUnit: string, toUnit: string) => {
  if(!gauges.includes(forUnit) || !gauges.includes(toUnit)) {
    return 'Uma das unidades informadas não é valida'
  }
  const forIndex = gauges.indexOf(forUnit);
  const toIndex = gauges.indexOf(toUnit);
  const expoent = toIndex - forIndex;
  return value * Math.pow(10, expoent);
  
}

export const exec = (gauges: string[]) => {
  const value = readline.questionFloat('Informe o valor para converter');
  const forChoice = readline.keyInSelect(gauges, 'Selecione a unidade base', { cancel: 'SAIR' });
  if(forChoice === - 1 ) return console.log('Saindo');
  const toChoice = readline.keyInSelect(gauges, 'Selecione a unidade de conversão', { cancel: 'SAIR' });
  if(toChoice === - 1 ) return console.log('Saindo');
  const forUnit = gauges[forChoice];
  const toUnit = gauges[toChoice];
  const result = convert(gauges, value, forUnit, toUnit);
  const message = `${value}${gauges[forChoice]} é igual a ${result}${gauges[toChoice]}`
  console.log(message);

};