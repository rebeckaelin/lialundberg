import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'signupInfo',
  type: 'document',
  title: 'Signup Info',
  fields: [
    defineField({
      name: 'Heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'Body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'Image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
    }),
  ],
})
