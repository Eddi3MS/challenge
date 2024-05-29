export function formatToCurrency(value?: number) {
  if (!value) return ''

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)

  return formattedValue
}
