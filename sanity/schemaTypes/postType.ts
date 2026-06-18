import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'isLive',
      type: 'boolean',
      title: 'Is Live',
      description: 'Toggle to mark this post as live',
      initialValue: false,
    }),
    defineField({
      name: 'timeline',
      type: 'array',
      title: 'Timeline of Events',
      description: 'Add key events and dates related to this article',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Timeline Event',
          fields: [
            defineField({
              name: 'date',
              type: 'string',
              title: 'Date',
              description: 'e.g., "January 15, 2024" or "15 Jan"',
            }),
            defineField({
              name: 'title',
              type: 'string',
              title: 'Event Title',
            }),
            defineField({
              name: 'description',
              type: 'text',
              title: 'Event Description',
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              date: 'date',
            },
            prepare(selection) {
              const {title, date} = selection
              return {
                title: title,
                subtitle: date,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
