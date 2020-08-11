import { Slug } from './types'

export const stringToSlug = (string: string): Slug => {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export const slugToString = (slug: Slug): string => {
  // todo: implement this
  return slug
}
