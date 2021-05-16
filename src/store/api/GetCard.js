export const getCardDataFromServer = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`).
  then(res => res.json());
};