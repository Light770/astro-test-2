export default {
  "name": "basicFeed",
  "title": "Basic Feed",
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
              "name": "title",
              "title": "Title",
              "type": "string"
            },
            {
              "name": "description",
              "title": "Description",
              "type": "text"
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
              "name": "link",
              "title": "Link",
              "type": "url"
            }
          ]
        }
      ]
    }
  ]
}