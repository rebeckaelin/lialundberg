// schemas/booksPage.js
export default {
  name: 'booksPage',
  title: 'Books Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Hero Description',
          type: 'string',
          description: 'Main description text in the hero section',
        },
      ],
    },
    {
      name: 'novel',
      title: 'Novel Section (Ebony)',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Book Title',
          type: 'string',
          description: 'The title of the novel',
        },
        {
          name: 'image',
          title: 'Book Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Short description of the novel',
        },
      ],
    },
    {
      name: 'childrenBooks',
      title: "Children's Books Section",
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main section title, e.g., "Lilla Lia-serien"',
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          description: "Description of the children's book series",
        },
        {
          name: 'books',
          title: 'Book Covers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Book Cover Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  media: 'image',
                },
              },
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {},
    prepare() {
      return {
        title: 'Books Page',
      }
    },
  },
}
