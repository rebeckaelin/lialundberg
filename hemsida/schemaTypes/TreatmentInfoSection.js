import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'TreatmentInfoSection',
  type: 'document',
  title: 'Treatment Info Section',
  fields: [
    // ⭐ SECTION 1
    defineField({
      name: 'section1Heading',
      type: 'string',
      title: 'Section 1 – Heading',
    }),
    defineField({
      name: 'section1Body',
      type: 'array',
      title: 'Section 1 – Body',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'section1Image',
      type: 'image',
      title: 'Section 1 – Image',
      options: {hotspot: true},
    }),
  ],
})
