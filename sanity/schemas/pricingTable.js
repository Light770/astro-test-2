export default {
  "name": "pricingTable",
  "type": "object",
  "title": "Pricing Table",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Title"
    },
    {
      "name": "price",
      "type": "number",
      "title": "Price"
    },
    {
      "name": "features",
      "type": "array",
      "title": "Features",
      "of": [
        {
          "type": "string"
        }
      ]
    },
    {
      "name": "ctaText",
      "type": "string",
      "title": "CTA Text"
    },
    {
      "name": "ctaLink",
      "type": "string",
      "title": "CTA Link"
    }
  ]
}