export function getRandomIndexFrom(array: Array<any>) {
    const data_length = array.length
    const selectedWeatherInfo = Math.floor(Math.random()*data_length)
    return selectedWeatherInfo
}

export function getWeathertConditionFromDailySummary(summary: String) {
    const [firstPart, lastPart, _] = summary.split('.');
    const includeSol = firstPart.toLocaleLowerCase().includes('sol');
    const includeNublado = firstPart.toLocaleLowerCase().includes('nublado');

    if(includeSol) return 'Ensolarado'
    else if(includeNublado) return 'Nublado';

    return lastPart;
}