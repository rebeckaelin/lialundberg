// schemas/lillaLiaPage.js
export default {
  name: 'lillaLiaPage',
  title: 'Lilla Lia Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Page Title',
          type: 'string',
          description: "Main page title, e.g., 'Lilla Lia-serien'",
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Short tagline or subtitle under the title',
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          description: 'Main description text in the hero section',
        },
      ],
    },
    {
      name: 'books',
      title: 'Books',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Book Title', type: 'string'},
            {name: 'image', title: 'Book Image', type: 'image'},
            {name: 'description', title: 'Description', type: 'text'},
            {name: 'themes', title: 'Themes', type: 'text'},
          ],
        },
      ],
    },
    {
      name: 'sensitivityCards',
      title: 'Varför Högkänslighet Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Card Title', type: 'string'},
            {name: 'description', title: 'Card Description', type: 'text'},
          ],
        },
      ],
    },
  ],

  preview: {
    select: {},
    prepare() {
      return {
        title: 'Lilla Lia', // always show this in the Studio list
      }
    },
  },
}
