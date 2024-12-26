import { type SchemaTypeDefinition } from 'sanity'
import blogs from '../blog'
import author from '../author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs,author],
}