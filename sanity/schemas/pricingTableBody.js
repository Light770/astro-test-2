export default {
  "name": "pricingTableBody",
  "title": "Pricing Table Body",
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
              "name": "label",
              "title": "Label",
              "type": "string"
            },
            {
              "name": "plan1",
              "title": "Plan 1",
              "type": "boolean"
            },
            {
              "name": "plan2",
              "title": "Plan 2",
              "type": "boolean"
            },
            {
              "name": "plan3",
              "title": "Plan 3",
              "type": "boolean"
            }
          ]
        }
      ]
    }
  ]
}