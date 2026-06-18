import {defineType, defineArrayMember, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineArrayMember({
      type: 'object',
      name: 'table',
      title: 'Table',
      fields: [
        defineField({
          name: 'title',
          title: 'Table Title',
          type: 'string',
          description: 'Optional title for the table',
        }),
        defineField({
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'tableRow',
              title: 'Row',
              fields: [
                defineField({
                  name: 'isHeaderRow',
                  title: 'Is Header Row',
                  type: 'boolean',
                  initialValue: false,
                  description: 'Check if this is a header row',
                }),
                defineField({
                  name: 'cells',
                  title: 'Row Data',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'string',
                      title: 'Cell',
                    }),
                  ],
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  cells: 'cells',
                  isHeaderRow: 'isHeaderRow',
                },
                prepare(selection) {
                  const {cells, isHeaderRow} = selection
                  const cellText = cells?.slice(0, 2).join(' | ') || '(empty)'
                  return {
                    title: cellText,
                    subtitle: isHeaderRow ? '📌 Header Row' : 'Data Row',
                  }
                },
              },
            }),
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
      preview: {
        select: {
          title: 'title',
          rows: 'rows',
        },
        prepare(selection) {
          const {title, rows} = selection
          return {
            title: title || 'Table',
            subtitle: `${rows?.length || 0} rows`,
          }
        },
      },
    }),
  ],
})
