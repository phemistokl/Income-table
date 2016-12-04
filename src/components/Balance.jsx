import React, { Component } from 'react';

import './Balance.scss';

export default class Balance extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { transactions } = this.props;

    const result = transactions.reduce(function(sum, current) {
      return sum + (current.type === 'INCOME' ? +current.value : -current.value);
    }, 0);

    return (
      <div className="balance">
        {result}
      </div>
    );
  }
}
