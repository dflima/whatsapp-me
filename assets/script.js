$("input").intlTelInput({
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback("br"))
  },
});

$("#chatButton").on('click', (event) => {
  event.preventDefault();

  const countryCode = $("input").intlTelInput("getSelectedCountryData").dialCode;
  const phoneNumber = $("input").val();
  const fullPhone = `${countryCode}${phoneNumber}`;

  if (!phoneNumber.trim()) {
    alert('Insert a phone number.');
    return;
  }

  window.open(`https://wa.me/${fullPhone}`, '_blank');
});
