import React from 'react';
import './PantallaGenerica.css';
import Navbar from '../Navbar/Navbar';
import Class from '../../models/Class';
import ClassSelector from '../ClassSelector/ClassSelector';
import Divider from '@material-ui/core/Divider';

class PantallaGenerica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClass: new Class('','')
    };

    this.handleClassChange = this.handleClassChange.bind(this);
  }

  handleClassChange(selectedClass) {
    this.setState({
      selectedClass: selectedClass
    });
  }

  render() {
    const optionClasses =  this.props.classes;
    return (
      <div>
        <Navbar firstTitle="Bienvenido a" secondTitle="Pantalla generica" />
        <ClassSelector options={optionClasses} 
          selectValue={this.state.selectedClass}
          onClassChange={this.handleClassChange}></ClassSelector>
        <Divider />
      </div>
    );
  }
}

export default PantallaGenerica;