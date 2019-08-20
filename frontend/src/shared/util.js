export const countryList = () => ( ["Aruba","Afghanistan","Angola","Albania","Andorra","United Arab Emirates","Argentina","Armenia","American Samoa","Antigua and Barbuda","Australia","Austria","Azerbaijan","Burundi","Belgium","Benin","Burkina Faso","Bangladesh","Bulgaria","Bahrain","Bahamas, The","Bosnia and Herzegovina","Belarus","Belize","Bermuda","Bolivia","Brazil","Barbados","Brunei Darussalam","Bhutan","Botswana","Central African Republic","Canada","Switzerland","Channel Islands","Chile","China","Cote d'Ivoire","Cameroon","Congo, Dem. Rep.","Congo, Rep.","Colombia","Comoros","Cabo Verde","Costa Rica","Cuba","Curacao","Cayman Islands","Cyprus","Czech Republic","Germany","Djibouti","Dominica","Denmark","Dominican Republic","Algeria","Ecuador","Egypt, Arab Rep.","Eritrea","Spain","Estonia","Ethiopia","Finland","Fiji","France","Faroe Islands","Micronesia, Fed. Sts.","Gabon","United Kingdom","Georgia","Ghana","Gibraltar","Guinea","Gambia, The","Guinea-Bissau","Equatorial Guinea","Greece","Grenada","Greenland","Guatemala","Guam","Guyana","Hong Kong SAR, China","Honduras","Croatia","Haiti","Hungary","Indonesia","Isle of Man","India","Ireland","Iran, Islamic Rep.","Iraq","Iceland","Israel","Italy","Jamaica","Jordan","Japan","Kazakhstan","Kenya","Kyrgyz Republic","Cambodia","Kiribati","St. Kitts and Nevis","Korea, Rep.","Kuwait","Lao PDR","Lebanon","Liberia","Libya","St. Lucia","Liechtenstein","Sri Lanka","Lesotho","Lithuania","Luxembourg","Latvia","Macao SAR, China","St. Martin (French part)","Morocco","Monaco","Moldova","Madagascar","Maldives","Mexico","Marshall Islands","Macedonia, FYR","Mali","Malta","Myanmar","Montenegro","Mongolia","Northern Mariana Islands","Mozambique","Mauritania","Mauritius","Malawi","Malaysia","Namibia","New Caledonia","Niger","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","New Zealand","Oman","Pakistan","Panama","Peru","Philippines","Palau","Papua New Guinea","Poland", "Puerto Rico","Korea, Dem. People’s Rep.","Portugal","Paraguay","French Polynesia","Qatar","Romania","Russian Federation","Rwanda","Saudi Arabia","Sudan","Senegal","Singapore","Solomon Islands","Sierra Leone","El Salvador","San Marino","Somalia","Serbia","South Sudan","Sao Tome and Principe","Suriname","Slovak Republic","Slovenia","Sweden","Eswatini","Sint Maarten (Dutch part)","Seychelles","Syrian Arab Republic","Turks and Caicos Islands","Chad","Togo","Thailand","Tajikistan","Turkmenistan","Timor-Leste","Tonga","Trinidad and Tobago","Tunisia","Turkey","Tuvalu","Tanzania","Uganda","Ukraine","Uruguay","United States","Uzbekistan","St. Vincent and the Grenadines","Venezuela, RB","British Virgin Islands","Virgin Islands (U.S.)","Vietnam","Vanuatu","Samoa","Kosovo","Yemen, Rep.","South Africa","Zambia","Zimbabwe"] );

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const duplicate = (element) => JSON.parse(JSON.stringify(element));

export const extractSpecProps = (data, prop) => {
    const localArr = [...data];
    const arr = localArr.map(el => {
        let suitableProperties = [];
        for (let fieldEl of el.field) {
            suitableProperties.push(fieldEl[prop]);
        }
        return suitableProperties;
    });
    return arr;
}

export const parseEmissionsByLocations = (arr, list) => {
    return arr.filter(item => list.includes(item[0]) )
}

export const fetchLocations = (data, list) => {
    return [ ...new Set( data.map(item => item[0] ) ) ]
                    .filter(item => 
                        list.includes(item)
                    ) // composing an array of locations
}

export const rateByDescending = (arr) => {
    return arr
            .sort((a, b) => 
                Number(b[3]) - Number(a[3])
            )  
}

export const ratePerCapita = (emissions, populations) => {
    for (let el of emissions) {
        el[3] = (Number(el[3]) / populations[el[0]] * 1000).toFixed(2);
    }
    return rateByDescending(emissions)
}

export const fetchLocationData = (emissions, years, location) => {
    const date = new Date();
    const userDate = new Date(years);
    const gapBetweenDates = Math.abs(new Date(date - userDate).getFullYear() - 1970);

    const countdownYear = date.getFullYear() - gapBetweenDates;

    return emissions
                .filter(e =>
                    e[0] === location && Number( e[2] ) >= countdownYear && e[3] !== undefined
                );    
}

export const fetchEmissionsThatYear = (arr, year) => {
    return arr
            .filter(el =>
                Number(el[2]) === Number(year) && el[3] !== undefined
            )
}

export const fetchPopulationThatYear = (arr, year) => {
    const fetchedPopulationThatYear = 
        arr.filter( el => 
            Number(el[2]) === Number(year)
        )
        let obj = {};
        for (let el of fetchedPopulationThatYear) {
            obj[el[0]] = el[3]
        }
        return obj;
}