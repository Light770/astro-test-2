export default {
  "name": "basicSocialProof",
  "title": "Basic Social Proof",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "items",
      "title": "Items",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "name",
              "title": "Name",
              "type": "string"
            },
            {
              "name": "company",
              "title": "Company",
              "type": "string"
            },
            {
              "name": "image",
              "title": "Image",
              "type": "image",
              "options": {
                "hotspot": true
              }
            },
            {
              "name": "quote",
              "title": "Quote",
              "type": "text"
            }
          ]
        }
      ]
    }
  ]
}