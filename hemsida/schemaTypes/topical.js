export default {
  name: 'topical',
  title: 'Topical Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'News text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'expires',
      title: 'Hide After',
      type: 'date',
      description: 'This event will not display after this date',
    },
  ],
}
