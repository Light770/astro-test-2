export default {
  "name": "highlightRows",
  "title": "Highlight Rows",
  "type": "object",
  "fields": [
    {
      "name": "rows",
      "title": "Rows",
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