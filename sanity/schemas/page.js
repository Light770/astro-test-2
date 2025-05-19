export default {
  "name": "page",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Title",
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "slug",
      "type": "slug",
      "title": "Slug",
      "options": {
        "source": "title",
        "maxLength": 96
      },
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "seo",
      "type": "seo",
      "title": "SEO"
    },
    {
      "name": "body",
      "type": "array",
      "title": "Page Content",
      "of": [
        {
          "type": "textImage"
        },
        {
          "type": "basicForm"
        },
        {
          "type": "contactCards"
        },
        {
          "type": "featureCards"
        },
        {
          "type": "featureList"
        },
        {
          "type": "featureSticky"
        },
        {
          "type": "homeCTA"
        },
        {
          "type": "hightlightRows"
        },
        {
          "type": "signUp"
        },
        {
          "type": "pricingColumns"
        },
        {
          "type": "accordion"
        },
        {
          "type": "testimonial"
        }
      ]
    }
  ]
}