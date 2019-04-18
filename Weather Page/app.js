function setSkycons(icon, iconId) {
  // eslint-disable-next-line no-undef
  const skycons = new Skycons({
    color: 'white',
  });
  const currentIcon = icon.replace(/-/g, '_').toUpperCase();
  // eslint-disable-next-line no-undef
  skycons.add(iconId, Skycons[currentIcon]);
  skycons.play();
}

/**
 * @param {number} value: The value to be converted
 * @param {boolean} reverse: C 2 F / F 2 C
 */
function celsiusAndFahrenheit(value, reverse = true) {
  // reverse === true means convert F to C
  if (!reverse) {
    return ((value - 32) * (5 / 9)).toFixed(2);
  }
  return ((9 / 5) * value + 32).toFixed(2);
}

window.addEventListener('load', () => {
  let coordinate;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      coordinate = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      };

      // Use fetch function to get the information based on an api supported by dark sky.
      // But the dark sky website doesn't allow access by CORS policy. A proxy is needed.
      const proxy = 'http://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/3d3fa98c33d84dbfbc2156eddc767e8c/${coordinate.latitude},${coordinate.longitude}`;

      fetch(api).then(response => response.json()).then((data) => {
        console.log(data);
        // By using { temperature }, it could pull out all the data in temperature in data.currently.
        const { temperature, summary, icon } = data.currently;

        // Get DOM
        const locationTimezone = document.querySelector('.location-timezone');
        const degreeSection = document.querySelector('.degree-section');
        const degree = document.querySelector('.degree-section .degree');
        const degreeSpan = document.querySelector('.degree-section .unit span');
        const temperatureDescription = document.querySelector('.temperature-description');

        // Set DOM
        degree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;

        // Set Icon
        setSkycons(icon, document.getElementById('icon'));

        // Change temperature to Celsius/Fahrenheit
        degreeSection.addEventListener('click', () => {
          const reverse = degreeSpan.innerHTML === 'C';
          const value = parseFloat(degree.textContent);
          degree.textContent = celsiusAndFahrenheit(value, reverse);
          degreeSpan.innerHTML = reverse ? 'F' : 'C';
        });
      }).catch(e => console.log(e));
    });
  } else {
    document.querySelector('.temperature-description').textContent = 'Your browser does not seem to support location service.';
  }
});
