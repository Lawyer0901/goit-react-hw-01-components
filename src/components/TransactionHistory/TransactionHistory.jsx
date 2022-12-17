import {
  Table,
  TableHead,
  TableHeadItem,
  TableRow,
  Tabledata,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <Tabledata>{type}</Tabledata>
            <Tabledata>{amount}</Tabledata>
            <Tabledata>{currency}</Tabledata>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
