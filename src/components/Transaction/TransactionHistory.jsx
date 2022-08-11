import PropTypes from 'prop-types';

import s from './transactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  const tr = items.map(({ id, type, amount, currency }) => (
    <tr className={s.tr__list} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
  return (
    <table className={s.transaction__history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{tr}</tbody>
    </table>
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
  ),
};
export default TransactionHistory;
