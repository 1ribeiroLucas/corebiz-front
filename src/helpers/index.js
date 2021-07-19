export const validateNewsletter = (name, email) => {
  const validEmail = /\S+@\S+\.\S+/.test(email);
  if (name.length === 0 || !validEmail) {
    return true;
  } else {
    return false;
  }
};
