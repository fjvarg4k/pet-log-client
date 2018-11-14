export const loadAuthToken = () => {
  return localStorage.getItem('jwtToken');
};

export const saveAuthToken = jwtToken => {
  try {
    localStorage.setItem('jwtToken', jwtToken);
  } catch (e) {}
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem('jwtToken');
  } catch (e) {}
};
