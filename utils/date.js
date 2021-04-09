import { id as locale } from 'date-fns/locale'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export function formatDateTime (date) {
  const dateObj = typeof date === 'string'
    ? parseISO(date)
    : date
  return format(dateObj, 'PPPP, pp', { locale })
}
