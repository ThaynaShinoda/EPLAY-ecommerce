export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export function getTotalPrice(items: Game[]) {
  return items.reduce((acum, actualValue) => {
    if (actualValue.prices.current) {
      return (acum += actualValue.prices.current);
    }
    return 0;
  }, 0);
}
