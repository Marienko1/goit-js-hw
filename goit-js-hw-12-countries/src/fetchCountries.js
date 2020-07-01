const baseUrl = "https://restcountries.eu/rest/v2/name/";
export default {
    fetchCountries(name) {
        return fetch(`${baseUrl}${name}`).then((response) => response.json());
    },
};