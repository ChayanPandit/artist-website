import {defineField, defineType} from 'sanity'

export const artworkType = defineType({
  name: 'artwork',
  title: 'ArtWork',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'inspiration',
      type: 'text',
      title: 'Inspiration',
    }),
    defineField({
      name: 'sold',
      type: 'boolean',
      title: 'Sold',
      initialValue: false,
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      initialValue: 0,
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string' }],
      options: {
        list: [
          {title: 'CONTEMPORARY', value: 'contemporary'},
          {title: 'ABSTRACT', value: 'abstract'},
          {title: 'BLACK & WHITE', value: 'b&w'},
          {title: 'LIFE', value: 'life'},
          {title: 'MISC', value: 'misc'}
        ]
      }
    }),
  ],
})