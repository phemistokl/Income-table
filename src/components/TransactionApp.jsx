import React, { Component } from 'react';

import TransactionEditor from './TransactionEditor.jsx';
import TransactionGrid from './TransactionGrid.jsx';
import Balance from './Balance.jsx';

import './TransactionApp.scss';

export default class TransactionApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: []
    };

    this.handleTransactionDelete = this.handleTransactionDelete.bind(this);
    this.handleTransactionAdd = this.handleTransactionAdd.bind(this);
  }

  componentDidMount() {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

    if (savedTransactions) {
      this.setState({ transactions: savedTransactions });
    }
  }

  componentDidUpdate() {
    const transactions = JSON.stringify(this.state.transactions);

      localStorage.setItem('transactions', transactions);
  }

  handleTransactionDelete(transactionId) {
    this.setState({
      transactions: this.state.transactions.filter(transaction => transaction.id !== transactionId)
    });
  }

  handleTransactionAdd(newTransaction) {
    this.setState({
      transactions: [newTransaction, ...this.state.transactions]
    });
  }

  render() {

    return (
      <div className="app">
        <h2 className="app__header">Money Pal</h2>

        <div className="balance-box">
          <Balance transactions={this.state.transactions} />
        </div>

        <div className="left-input">
          <h2>Доходы</h2>
          <TransactionEditor type="INCOME" onTransactionAdd={this.handleTransactionAdd} />
        </div>
        <div className="right-input">
          <h2>Расходы</h2>
          <TransactionEditor type="OUTCOME" onTransactionAdd={this.handleTransactionAdd} />
        </div>

        <TransactionGrid
          transactions={this.state.transactions}
          onTransactionDelete={this.handleTransactionDelete}
        />
      </div>
    );
  }
}
