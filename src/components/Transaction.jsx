import React, { Component } from 'react';

import './Transaction.scss';

export default class Transaction extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    const {
      type,
      val,
      title,
      value,
      onDelete
    } = this.props;

    return (
      <div className={ `transaction ${val} ${type === "INCOME" ? "income" : "outcome"} ` }>
        <span className="transaction__delete-icon" onClick={this.handleDelete}> × </span>
        <div className="title">{title}</div>
        <div className="value">{value}</div>
      </div>
    );
  }
}
