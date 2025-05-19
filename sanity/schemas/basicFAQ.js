export default {
  "name": "basicFAQ",
  "title": "Basic FAQ",
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
              "title": "Answer",
              "type": "text"
            }
          ]
        }
      ]
    }
  ]
}