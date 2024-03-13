import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Reastaurant name',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Reastaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Reastaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'longitude of the Reastaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Reastaurant address',
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Starts)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5 '),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dish',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
