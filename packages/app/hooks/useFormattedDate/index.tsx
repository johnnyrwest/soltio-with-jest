import dayjs from 'dayjs'

export const useFormattedDate = (date: Date | string) => {
  const formattedDate = dayjs(date).format('MMMM D, YYYY')

  return formattedDate
}
