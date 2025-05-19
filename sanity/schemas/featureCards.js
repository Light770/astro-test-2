export default {
  "name": "featureCards",
  "type": "object",
  "title": "Feature Cards",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Title"
    },
    {
      "name": "cards",
      "type": "array",
      "title": "Cards",
      "of": [
        {
          "type": "featureCard"
        }
      ]
    }
  ]
}