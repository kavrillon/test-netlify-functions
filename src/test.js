const getResponse = myxml => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'text/xml'
  },
  body: myxml
});

const getClient = async url => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        url: url
      });
    }, 1000);
  });
};

exports.handler = async event => {
  const from = event.headers['x-from'];
  console.log('TCL: FROM: ', from);
  const client = await getClient(from);

  return getResponse(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${client.url}</loc>
        <lastmod>2005-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
  </urlset>`);
};
