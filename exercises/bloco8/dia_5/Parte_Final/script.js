const assert = require('assert');
const { cities, states, regions } = require('./data');
/**
 * Dado um arquivo com dados de regiões, estados e cidades, construir uma função (mapCities)
 * que retorna um objeto onde as propriedades são as siglas das regiões. Cada região é um array
 * que possuirá objetos com o nome da cidade e o nome do estado.
 * 
 * Bônus: Se a função receber um objeto com a propriedade includeRegionNames com o valor true,
 * o objeto de cada cidade/estado incluirá também o nome da região onde aquele estado se encontra.
 */
const expectedWithRegions = {
    N: [
        { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
        { city: 'Belém', state: 'Pará', region: 'Norte' },
        { city: 'Porto Nacional', state: 'Tocantins', region: 'Norte' }
    ],
    SE: [
        { city: 'Lavras', state: 'Minas Gerais', region: 'Sudeste' },
        { city: 'Presidente Prudente', state: 'São Paulo', region: 'Sudeste' }
    ],
    NE: [
        { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
        { city: 'Touros', state: 'Rio Grande do Norte', region: 'Nordeste' },
        { city: 'Jericoacoara', state: 'Ceará', region: 'Nordeste' }
    ],
    S: [{ city: 'Cascavel', state: 'Paraná', region: 'Sul' }]
};
const expectedWithoutRegions = {
    N: [
        { city: 'Manaus', state: 'Amazonas' },
        { city: 'Belém', state: 'Pará' },
        { city: 'Porto Nacional', state: 'Tocantins' }
    ],
    SE: [
        { city: 'Lavras', state: 'Minas Gerais' },
        { city: 'Presidente Prudente', state: 'São Paulo' }
    ],
    NE: [
        { city: 'Feira de Santana', state: 'Bahia' },
        { city: 'Touros', state: 'Rio Grande do Norte' },
        { city: 'Jericoacoara', state: 'Ceará' }
    ],
    S: [{ city: 'Cascavel', state: 'Paraná' }]
};

const mapCities = () => {
    const citiesByRegion = cities.reduce((acc, curr) => {
        const { name, state, region } = curr;
        const regionState = states.find((current) => current.short === state);
        const regionCity = {city: name, state: regionState.name }
        if (!acc[region]) {
            acc[region] = [];
        }
        acc[region].push(regionCity);
        return acc;
    }, {});
    return citiesByRegion;
}

console.log(mapCities());

// assert.deepStrictEqual(mapCities(), expectedWithoutRegions);
// assert.deepStrictEqual(mapCities({ includeRegionNames: false }), expectedWithoutRegions);
// assert.deepStrictEqual(mapCities({ includeRegionNames: true }), expectedWithRegions);
