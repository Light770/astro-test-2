export default {
  "name": "siteSettings",
  "title": "Site Settings",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Site Title",
      "type": "string",
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "description",
      "title": "Site Description",
      "type": "text"
    },
    {
      "name": "keywords",
      "title": "Keywords",
      "type": "array",
      "of": [
        {
          "type": "string"
        }
      ],
      "description": "Keywords to improve SEO"
    },
    {
      "name": "logo",
      "title": "Logo",
      "type": "image",
      "options": {
        "hotspot": true
      }
    },
    {
      "name": "navigation",
      "title": "Navigation",
      "type": "array",
      "of": [
        {
          "type": "reference",
          "to": [
            {
              "type": "page"
            }
          ]
        }
      ]
    },
    {
      "name": "socialLinks",
      "title": "Social Links",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "platform",
              "title": "Platform",
              "type": "string"
            },
            {
              "name": "url",
              "title": "URL",
              "type": "url"
            }
          ]
        }
      ]
    },
    {
      "name": "footerText",
      "title": "Footer Text",
      "type": "text"
    },
    {
      "name": "googleAnalyticsId",
      "title": "Google Analytics ID",
      "type": "string",
      "description": "Your Google Analytics tracking ID (e.g., UA-XXXXX-Y or G-XXXXXXX)"
    },
    {
      "name": "googleSearchConsoleId",
      "title": "Google Search Console ID",
      "type": "string",
      "description": "Your Google Search Console ID"
    },
    {
      "name": "googleTagManagerIdHead",
      "title": "Google Tag Manager ID (Head)",
      "type": "string",
      "description": "Your Google Tag Manager ID for the <head> section"
    },
    {
      "name": "googleTagManagerIdBody",
      "title": "Google Tag Manager ID (Body)",
      "type": "string",
      "description": "Your Google Tag Manager ID for the <body> section"
    }
  ]
}