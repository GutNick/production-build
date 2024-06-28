import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from './Button'

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)
  const clickEventsCount = 10
  for (let i = 0; i < clickEventsCount; i++) {
    fireEvent.click(screen.getByText(/click me/i))
  }
  expect(handleClick).toHaveBeenCalledTimes(clickEventsCount)
})
