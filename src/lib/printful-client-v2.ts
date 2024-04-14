const baseUrl = 'https://api.printful.com';
const apiVersion = 'v2';
const apiKey = process.env.PRINTFUL_API_KEY;

export const printful = {
  get: async (path: string) => {
    console.log('apiKey', apiKey);
    const url = `${baseUrl}/${apiVersion}/${path}`;
    console.log('url', url);
    const authorization = `Bearer ${apiKey}`;
    const res = await fetch(`${baseUrl}/${apiVersion}/${path}`, {
      headers: {
        Authorization: authorization,
      },
    });

    return await res.json();
  },
};
