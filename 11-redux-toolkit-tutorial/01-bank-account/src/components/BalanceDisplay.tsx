function formatCurrency(value: any) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export const BalanceDisplay = () => {
  return <div className="balance">{formatCurrency(123456)}</div>;
};
