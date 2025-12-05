export default {
  name: 'heroCarousel',
  type: 'document',
  title: 'Hero Carousel',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Carousel Title',
      description: 'Internal name only (not shown on site)',
    },

    {
      name: 'images',
      type: 'array',
      title: 'Hero Images',
      description: '3–4 images shown in the hero carousel.',
      validation: (Rule) => Rule.min(3).max(4),
      of: [
        {
          type: 'object',
          name: 'imageItem',
          title: 'Hero Image',

          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternativ text',
              description: 'För tillgänglighet (skärmuppläsare)',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
