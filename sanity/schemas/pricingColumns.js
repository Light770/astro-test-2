export default {
  "name": "pricingColumns",
  "type": "object",
  "title": "Pricing Columns",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Title"
    },
    {
      "name": "plans",
      "type": "array",
      "title": "Plans",
      "of": [
        {
          "type": "pricingTable"
        }
      ]
    }
  ]
}