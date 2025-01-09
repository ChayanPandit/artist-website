import {defineField, defineType} from 'sanity'

export const aboutmeType = defineType({
  name: 'aboutme',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'moto',
      type: 'string',
      title: 'Moto',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    })
  ],
})