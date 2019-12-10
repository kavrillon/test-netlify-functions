exports.handler = async event => {
  console.log(event.headers);
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: `<ul>
      <li>Referer: ${event.headers['referer']}</li>
      <li>x-from: ${event.headers['x-from']}</li>
      <li>X-From: ${event.headers['X-From']}</li>
      <li>X-Netlify-Hostname: ${event.headers['X-Netlify-Hostname']}</li>
      <li>x-netlify-hostname: ${event.headers['x-netlify-hostname']}</li>
    </ul>`
  };
};
