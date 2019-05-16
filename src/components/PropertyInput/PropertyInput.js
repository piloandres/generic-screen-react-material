import React from 'react';
import './PropertyInput.css';

class PropertyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropertyValueChange = 
      this.handlePropertyValueChange.bind(this);
  }

  handlePropertyValueChange(e) {
    this.props.onPropertyValueChange(e.target.value);
  }
}