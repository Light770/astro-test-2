export default {
  "name": "hightlightRows",
  "type": "object",
  "title": "Highlight Rows",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Title"
    },
    {
      "name": "rows",
      "type": "array",
      "title": "Rows",
      "of": [
        {
          "type": "highlight"
        }
      ]
    }
  ]
}