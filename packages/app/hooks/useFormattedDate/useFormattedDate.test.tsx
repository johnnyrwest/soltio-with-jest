import { useFormattedDate } from '.'

describe('useFormattedDate', () => {
  it('takes a date and returns a formatted string', () => {
    expect(useFormattedDate('2020-01-01')).toEqual('January 1, 2020')
  })
})
