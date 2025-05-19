export default {
  "name": "contactCards",
  "type": "object",
  "title": "Contact Cards",
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
          "type": "contactCard"
        }
      ]
    }
  ]
}