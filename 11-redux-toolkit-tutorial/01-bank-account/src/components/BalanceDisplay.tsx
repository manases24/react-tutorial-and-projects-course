import { connect } from "react-redux";
import { RootState } from "../redux/store-v2"; // Asegúrate de importar el tipo del estado raíz de tu store

// Función para formatear moneda
function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// Tipos de las props del componente
interface BalanceDisplayProps {
  balance: number;
}

// Componente BalanceDisplay
export function BalanceDisplay({ balance }: BalanceDisplayProps) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// mapStateToProps con tipos
function mapStateToProps(state: RootState) {
  return {
    balance: state.account.balance,
  };
}

// Exportar componente conectado
export default connect(mapStateToProps)(BalanceDisplay);
