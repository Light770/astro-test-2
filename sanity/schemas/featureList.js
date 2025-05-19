export default {
  "name": "featureList",
  "type": "object",
  "title": "Feature List",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Title"
    },
    {
      "name": "features",
      "type": "array",
      "title": "Features",
      "of": [
        {
          "type": "feature"
        }
      ]
    }
  ]
}