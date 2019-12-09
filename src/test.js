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
  console.log('TCL: from', from);
  const upperfrom = event.headers['X-From'];
  console.log('TCL: upperfrom', upperfrom);
  const custom = event.headers['x-custom-token'];
  console.log('TCL: custom', custom);
  const uppercustom = event.headers['X-Custom-Token'];
  console.log('TCL: uppercustom', uppercustom);

  const result = await getData(from);

  return {
    statusCode: 200,
    body: 'Requested Slug: ' + result.slug
  };
};
