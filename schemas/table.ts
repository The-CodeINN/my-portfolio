import { defineField, defineType } from 'sanity';
import { TableWidget } from '@/app/components/widgets/TableWidget';
import { Table } from 'lucide-react';

export const table = defineType({
  name: 'customTable',
  title: 'Table',
  type: 'object',
  icon: Table,
  fields: [
    defineField({
      name: 'table',
      title: 'Table',
      type: 'table',
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Provide an accessible description for this table',
    }),
  ],
  preview: {
    select: {
      table: 'table',
      caption: 'caption',
    },
  },
  components: {
    preview: TableWidget,
  },
});
