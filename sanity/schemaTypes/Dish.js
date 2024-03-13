import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of Dish',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'short description',
      validation: (Rule) => Rule.required(200),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of the dish GBP',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Dish',
    }),
  ],
})
