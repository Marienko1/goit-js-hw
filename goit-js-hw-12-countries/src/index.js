import './css/style.css';
import fetchCountries from './script/fetchCountries';
import cardCountry from './template/country-item.hbs';
import modalItem from './template/modal-item.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';

var debounce = require('lodash.debounce');

const countriesEl = document.querySelector('.countries');
const modal = document.getElementById('modal');
const modalBody = modal.querySelector('.modal-body');
const search = document.querySelector('#search');

const displayCountries = debounce(() => {
  clearOutput();
  const searchValue = search.elements.search.value;
  PNotify.closeAll();

  if (searchValue === '') {
    return;
  }
  fetchCountries(searchValue)
    .then(data => {
      if (data && data.status === 404) {
        PNotify.notice('Country not exist');
      }
      if (data.length > 10) {
        PNotify.error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
      } else if (data.length >= 1 && data.length < 10) {
        data.forEach(country => {
          const countryEl = document.createElement('div');
          countryEl.classList.add('country-item');
          countryEl.innerHTML = cardCountry(country);

          countriesEl.appendChild(countryEl);

          countryEl.addEventListener('click', () => {
            modal.style.display = 'flex';
            showCountryDetails(country);
          });
        });
      }
    })

    .catch(error => console.log('Error: ', error));
}, 500);

function clearOutput() {
  countriesEl.innerHTML = '';
}

search.addEventListener('input', displayCountries);

window.addEventListener('keypress', event => {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
});

function showCountryDetails(country) {
  modalBody.innerHTML = modalItem(country);
}

document.getElementById('close').addEventListener('click', () => {
  modal.style.display = 'none';
});

document.querySelector('.modal').addEventListener('click', event => {
  if (event.target == event.currentTarget) {
    modal.style.display = 'none';
  }
});