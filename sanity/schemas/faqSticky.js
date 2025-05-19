export default {
  "name": "faqSticky",
  "title": "FAQ Sticky",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "questions",
      "title": "Questions",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "question",
              "title": "Question",
              "type": "string"
            },
            {
              "name": "answer",
              "title": "text"
            }
          ]
        }
      ]
    }
  ]
}