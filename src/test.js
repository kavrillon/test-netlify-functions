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
  console.log('FROM: ', from);

  const result = await getData(from);

  return {
    statusCode: 200,
    body: 'Requested Slug: ' + result.slug
  };
};
