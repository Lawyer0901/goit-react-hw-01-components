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
        {items.map(item => (
          <TableRow key={item.id}>
            <Tabledata>{item.type}</Tabledata>
            <Tabledata>{item.amount}</Tabledata>
            <Tabledata>{item.currency}</Tabledata>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
