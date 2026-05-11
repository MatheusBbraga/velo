export function generateOrderCode() {
  const prefix = 'VLO-'
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  let randomCode = ''

  for (let i = 0; i < 6; i++) {
    randomCode += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return prefix + randomCode
}
