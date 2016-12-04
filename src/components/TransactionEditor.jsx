import React, { Component } from 'react';

import SelectField from './SelectField.jsx';

import './TransactionEditor.scss';

export default class TransactionEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      value: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleTransactionAdd = this.handleTransactionAdd.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleValueChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleTagChange(val) {
    this.setState({ val });
  }

  handleTransactionAdd() {
    const newTransaction = {
      type: this.props.type,
      title: this.state.title,
      value: this.state.value,
      val: this.state.val,
      id: Date.now()
    };

    this.props.onTransactionAdd(newTransaction);

    this.resetState();
  }

  resetState() {
    this.setState({
      title: '',
      value: ''
    });
  }

  render() {

    return (
      <div className="editor">
        <input
          type="text"
          className="title"
          placeholder="Название..."
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          type="text"
          className="value"
          placeholder="Сумма..."
          value={this.state.value}
          onChange={this.handleValueChange}
        />


        { this.props.type === "OUTCOME" ? <SelectField onChange={this.handleTagChange} /> : "" }

        <button className="editor__button" disabled={!this.state.title || !this.state.value} onClick={this.handleTransactionAdd}>
          Add
        </button>
        </div>
    );
  }
}
