export function formatCurrency(price: number) {
  return `${new Intl.NumberFormat("ko-KR").format(price)}원`;
}
