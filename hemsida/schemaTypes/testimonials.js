// schemas/testimonial.js
export default {
  name: 'testimonial',
  title: 'Testimonial / Review',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Treatment', value: 'treatment'},
          {title: 'Book', value: 'book'},
        ],
        layout: 'radio', // optional: dropdown or radio buttons
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
