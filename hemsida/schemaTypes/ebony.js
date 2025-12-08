export default {
  name: 'ebonyPage',
  title: 'Ebony Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Book Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle / Tagline', type: 'string'},
        {
          name: 'shortDescription',
          title: 'Short Description (above buttons)',
          type: 'text',
        },
      ],
    },
    {
      name: 'synopsis',
      title: 'In-depth Book Description',
      type: 'object',
      fields: [
        {
          name: 'body',
          title: 'Main Description',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'highlight',
          title: 'Highlight Box (Optional)',
          type: 'text',
          description: 'Optional text for the emphasized section below the synopsis',
        },
      ],
    },
    {
      name: 'badges',
      title: 'Badges',
      type: 'array',
      of: [{type: 'string'}],
      description: "Add badge texts like 'dark and exciting', 'psychological thriller', etc.",
    },
  ],

  // Add a preview to show "Ebony" instead of a dynamic field
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Ebony', // always show this in the Studio list
      }
    },
  },
}
