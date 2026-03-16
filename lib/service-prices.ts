export const SERVICE_PRICES = {
  "agendamento-geral": 69.34,
  "renovacao-autorizacao": 69.34,
  "primeira-autorizacao": 69.34,
  "reagrupamento-familiar": 69.34,
  "informacao-consulta": 69.34,
  outros: 69.34,
} as const

export type ServiceType = keyof typeof SERVICE_PRICES

export function getServicePrice(serviceType: ServiceType): number {
  return SERVICE_PRICES[serviceType]
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`
}
