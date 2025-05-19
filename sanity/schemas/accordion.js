export default {
  "name": "accordion",
  "type": "object",
  "title": "Accordion",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Title"
    },
    {
      "name": "items",
      "type": "array",
      "title": "Items",
      "of": [
        {
          "type": "accordionItem"
        }
      ]
    }
  ]
}