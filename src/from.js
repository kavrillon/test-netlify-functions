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
  console.log(event.headers);
  const referer = event.headers['referer'];
  const from = event.headers['x-from'];
  const upperfrom = event.headers['X-From'];
  const custom = event.headers['x-custom-token'];
  const uppercustom = event.headers['X-Custom-Token'];

  const result = await getData(from);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: `<ul>
      <li>Referer: ${referer}</li>
      <li>Requested data: ${result.id}</li>
      <li>from: ${from}</li>
      <li>upperfrom: ${upperfrom}</li>
      <li>custom: ${custom}</li>
      <li>uppercustom: ${uppercustom}</li>
    </ul>`
  };
};
