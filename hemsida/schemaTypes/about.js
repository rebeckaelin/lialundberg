import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutPage',
  type: 'document',
  title: 'About Page',
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

    // ⭐ SECTION 2
    defineField({
      name: 'section2Heading',
      type: 'string',
      title: 'Section 2 – Heading',
    }),
    defineField({
      name: 'section2Body',
      type: 'array',
      title: 'Section 2 – Body',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'section2Image',
      type: 'image',
      title: 'Section 2 – Image',
      options: {hotspot: true},
    }),

    // ⭐ SECTION 3
    defineField({
      name: 'section3Heading',
      type: 'string',
      title: 'Section 3 – Heading',
    }),
    defineField({
      name: 'section3Body',
      type: 'array',
      title: 'Section 3 – Body',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'section3Image',
      type: 'image',
      title: 'Section 3 – Image',
      options: {hotspot: true},
    }),

    // ⭐ SECTION 4
    defineField({
      name: 'section4Heading',
      type: 'string',
      title: 'Section 4 – Heading',
    }),
    defineField({
      name: 'section4Body',
      type: 'array',
      title: 'Section 4 – Body',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'section4Image',
      type: 'image',
      title: 'Section 4 – Image',
      options: {hotspot: true},
    }),
  ],
})
