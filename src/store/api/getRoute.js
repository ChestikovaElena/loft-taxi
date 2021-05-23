export const getRoute = async (fromAddress, toAddress) =>
  fetch(`https://loft-taxi.glitch.me/route?address1=${fromAddress}&address2=${toAddress}`).
  then(res => res.json());