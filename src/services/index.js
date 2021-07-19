const productsEndpoint = 'https://corebiz-test.herokuapp.com/api/v1/products';
const newsEndpoint = 'https://corebiz-test.herokuapp.com/api/v1/newsletter';

export const getProducts = async () => {
  try {
    const res = await fetch(productsEndpoint);
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const newsletter = async (name, email) => {
  try {
    /* eslint-disable-next-line*/
    const reqBody = JSON.stringify({name, email});
    const options = {
      method: 'POST',
      body: reqBody,
      redirect: 'follow',
    };
    const req = await fetch(newsEndpoint, options);
    console.log(await req.text());
  } catch (error) {
    return error;
  }
};
