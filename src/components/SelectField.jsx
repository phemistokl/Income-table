import React, { Component } from 'react';

import Select from 'react-select';

const options = [ { value: 'joy', label: 'развлечения' }, { value: 'meal', label: 'еда' }, { value: 'buy', label: 'покупки' }, { value: 'another', label: 'другое' }];

export default class SelectField extends Component {
  constructor(props) {
    super(props);

    this.tagChange = this.tagChange.bind(this);
  }

  tagChange(val) {
      this.props.onChange(val);
  }

  render() {
    return (
      <Select
        name="form-field-name"
        value="развлечения"
        options={options}
        onChange={this.tagChange.bind(this)}
      />
    );
  }
}
