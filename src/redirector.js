exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify([
      {
        old:
          'https://deploy-preview-299--gator-lpe.netlify.com/l/france/Cluses/SPORT%202000%20%20-%20FLAINE%20SUPER%20SKI--RFR01855_MAIN?campaignId=storefinder.rossignol.com&cc=fr_FR&lang=en&tk_originPi=_jmA4EmuEeqtej9-uiHxZA&ad=',
        new:
          'https://deploy-preview-299--gator-lpe.netlify.com/en/intersport-inter-flaine-221108'
      },
      {
        old:
          'https://deploy-preview-299--gator-lpe.netlify.com/l/france/Cluses/SPORT%202000%20%20-%20FLAINE%20SUPER%20SKI--RFR01855_MAIN?campaignId=storefinder.rossignol.com&cc=fr_FR&lang=fr&tk_originPi=_jmA4EmuEeqtej9-uiHxZA&ad=',
        new:
          'https://deploy-preview-299--gator-lpe.netlify.com/fr/intersport-inter-flaine-221108'
      }
    ])
  };
};
