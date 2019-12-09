const getResponse = myxml => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'text/xml'
  },
  body: myxml
});

exports.handler = async (event, context, callback) => {
  console.log('TCL: exports.handler -> event.headers', event.headers);
  console.log('TCL: exports.handler -> context', context);

  const response = getResponse(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.example.com</loc>
        <lastmod>2005-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
  </urlset>`);
  callback(null, response);
};
