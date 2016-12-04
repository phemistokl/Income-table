import React, { Component } from 'react';

import Transaction from './Transaction.jsx';

import './TransactionGrid.scss';

export default class TransactionGrid extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    const {
      transactions,
      onTransactionDelete
    } = this.props;

    return (
      <div className="grid">
        {
          transactions.map(transaction =>
            <Transaction
              key={transaction.id}
              id={transaction.id}
              title={transaction.title}
              value={transaction.value}
              val={transaction.val}
              type={transaction.type}
              onDelete={onTransactionDelete}
            />
          )
        }
      </div>
    );
  }
}
