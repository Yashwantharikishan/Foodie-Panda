import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'category',
  type: 'document',
  title: 'Menu-Category',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'IMage of Category ',
    }),
  ],
})
