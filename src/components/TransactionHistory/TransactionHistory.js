import PropTypes from 'prop-types';

import {Table, TableHeader, TableRow, TableCell} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <Table className="transaction-history">
            <thead>
                <tr>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency}) => (
                    <TableRow key={id}>
                        <TableCell>{type}</TableCell>
                        <TableCell>{amount}</TableCell>
                        <TableCell>{currency}</TableCell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory; 