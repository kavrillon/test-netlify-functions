const getData = async from => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        slug: from
      });
    }, 1000);
  });
};

exports.handler = async event => {
  const from = event.headers['x-from'];
  const upperfrom = event.headers['X-From'];
  const custom = event.headers['x-custom-token'];
  const uppercustom = event.headers['X-Custom-Token'];

  const result = await getData(from);

  return {
    statusCode: 200,
    body: `<ul>
      <li>from: ${from}</li>
      <li>upperfrom: ${upperfrom}</li>
      <li>custom: ${custom}</li>
      <li>: ${uppercustom}</li>
    </ul>`
  };
};
