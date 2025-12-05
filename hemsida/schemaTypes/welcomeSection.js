export default {
  name: 'welcomeSection',
  title: 'Welcome Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Main heading (e.g. 'Välkommen in i min bubbla!')",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Main paragraphs of the welcome text.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'signature',
      title: 'Signature',
      type: 'string',
      description: "Optional signature (e.g. 'Med värme // Lia')",
    },
  ],
}
