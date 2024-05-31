import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Hero from './index'

const { useRouter } = vi.hoisted(() => {
  const mockedRouterPush = vi.fn()
  return {
    useRouter: () => ({ push: mockedRouterPush }),
  }
})

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation')
  return {
    ...actual,
    useRouter,
  }
})

describe('Hero', () => {
  it('should render hero component with btn disabled', () => {
    render(<Hero />)

    const buttons = screen.getAllByLabelText('buscar imóveis')

    buttons.forEach((btn) => expect(btn).toHaveProperty('disabled', true))
  })

  it('should able buttons after selecting a location', async () => {
    render(<Hero />)
    const input = screen.getByPlaceholderText('Qual é a localização?')

    expect(input).toBeTruthy()

    await userEvent.click(input)

    const option = screen.getByText('Belo Horizonte, Minas Gerais')

    expect(option).toBeTruthy()

    await userEvent.click(option)

    const buttons = screen.getAllByLabelText('buscar imóveis')

    buttons.forEach((btn) => expect(btn).toHaveProperty('disabled', false))

    await userEvent.click(buttons[0])
  })
})
