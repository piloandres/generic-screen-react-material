import React from 'react';
import './PantallaGenerica.css';
import Navbar from '../Navbar/Navbar';
import Class from '../../models/Class';
import ClassSelector from '../ClassSelector/ClassSelector';
import Divider from '@material-ui/core/Divider';
import SearchFilters from '../SearchFilters/SearchFilters';
import Property from '../../models/Property';

class PantallaGenerica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClass: new Class('',''),
      filters: [],
      propertyOptions: PROPERTY_OPTIONS
    };

    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleFiltersListChange = 
      this.handleFiltersListChange.bind(this);
  }

  handleClassChange(selectedClass) {
    this.setState({
      selectedClass: selectedClass
    });
  }

  handleFiltersListChange(updatedList) {
    this.setState({
      filters: updatedList
    })
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
        <SearchFilters filters={this.state.filters} 
          propertyOptions={this.state.propertyOptions}
          onFiltersListChange={this.handleFiltersListChange} />
      </div>
    );
  }
}

const PROPERTY_OPTIONS = [
  new Property('nombreDocumento','Nombre Documento','text'),
  new Property('nombreUsuario','Nombre Usuario','text'),
  new Property('identificacionUsuario','Identificacion Usuario','text'),
  new Property('numCaso','No. Caso','number')
]

export default PantallaGenerica;