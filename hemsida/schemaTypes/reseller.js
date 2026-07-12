export default {
  name: 'reseller',
  title: 'reseller',
  type: 'document',
  fields: [
    {
      name: 'store',
      title: 'Store',
      type: 'string',
      description: 'The name of the physical store',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'The address to the physical store',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'books',
      title: 'books',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add the store to which book?',
      options: {
        list: [
          {title: 'Lilla Lia', value: 'LillaLia'},
          {title: 'Ebony', value: 'Ebony'},
        ],
        layout: 'grid', // renders as checkboxes
      },
      validation: (Rule) => Rule.min(1).error('Select at least one book'),
    },
  ],
}
