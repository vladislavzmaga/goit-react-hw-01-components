import PropTypes from 'prop-types';
import { TransactionTable } from './transactions.styled';
import { TableHead } from './transactions.styled';
import { TableHeaders } from './transactions.styled';
import { TableValue } from './transactions.styled';
export const Transactions = ({ transactions }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <TableHeaders>Type</TableHeaders>
          <TableHeaders>Amount</TableHeaders>
          <TableHeaders>Currency</TableHeaders>
        </tr>
      </TableHead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <TableValue>{transaction.type}</TableValue>
            <TableValue>{transaction.amount}</TableValue>
            <TableValue>{transaction.currency}</TableValue>
          </tr>
        ))}
      </tbody>
    </TransactionTable>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
