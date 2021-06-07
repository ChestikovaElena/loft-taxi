export const getAddresses = async () =>
  fetch('https://loft-taxi.glitch.me/addressList')
  .then(res => res.json());