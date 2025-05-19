export default {
  "name": "blogPost",
  "type": "document",
  "title": "Blog Post",
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
      "name": "publishedAt",
      "type": "datetime",
      "title": "Published at",
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "author",
      "type": "reference",
      "title": "Author",
      "to": [
        {
          "type": "author"
        }
      ],
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "mainImage",
      "type": "image",
      "title": "Main image",
      "options": {
        "hotspot": true
      },
      "fields": [
        {
          "name": "alt",
          "type": "string",
          "title": "Alternative text",
          "description": "Important for SEO and accessibility.",
          "validation": "Rule => Rule.required()"
        }
      ]
    },
    {
      "name": "categories",
      "type": "array",
      "title": "Categories",
      "of": [
        {
          "type": "reference",
          "to": [
            {
              "type": "category"
            }
          ]
        }
      ]
    },
    {
      "name": "tags",
      "type": "array",
      "title": "Tags",
      "of": [
        {
          "type": "reference",
          "to": [
            {
              "type": "tag"
            }
          ]
        }
      ]
    },
    {
      "name": "body",
      "type": "array",
      "title": "Body",
      "of": [
        {
          "type": "block",
          "styles": [
            {
              "title": "Normal",
              "value": "normal"
            },
            {
              "title": "H1",
              "value": "h1"
            },
            {
              "title": "H2",
              "value": "h2"
            },
            {
              "title": "H3",
              "value": "h3"
            },
            {
              "title": "H4",
              "value": "h4"
            },
            {
              "title": "Quote",
              "value": "blockquote"
            }
          ],
          "lists": [
            {
              "title": "Bullet",
              "value": "bullet"
            }
          ],
          "marks": {
            "decorators": [
              {
                "title": "Strong",
                "value": "strong"
              },
              {
                "title": "Emphasis",
                "value": "em"
              },
              {
                "title": "Code",
                "value": "code"
              },
              {
                "title": "Underline",
                "value": "underline"
              },
              {
                "title": "Strike",
                "value": "strike"
              }
            ],
            "annotations": [
              {
                "name": "link",
                "type": "object",
                "title": "URL",
                "fields": [
                  {
                    "title": "URL",
                    "name": "href",
                    "type": "url"
                  }
                ]
              }
            ]
          }
        },
        {
          "type": "image",
          "options": {
            "hotspot": true
          },
          "fields": [
            {
              "name": "alt",
              "type": "string",
              "title": "Alternative text",
              "description": "Important for SEO and accessibility."
            }
          ]
        },
        {
          "type": "code"
        }
      ]
    },
    {
      "name": "seo",
      "type": "seo",
      "title": "SEO"
    }
  ]
}