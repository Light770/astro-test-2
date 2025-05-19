export default {
  "name": "basicDarkTestimonials",
  "title": "Basic Dark Testimonials",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "testimonials",
      "title": "Testimonials",
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