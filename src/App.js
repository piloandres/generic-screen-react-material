import React from 'react';
import PantallaGenerica from './components/PantallaGenerica/PantallaGenerica';
import Class from './models/Class';

function App() {
  return (
    <PantallaGenerica classes={MYCLASSES}/>
  );
}

const MYCLASSES = [
  "",
  new Class('CD_DocumentoIdentificacionCliente', 'Documento de Identificacion del cliente'),
  new Class('CD_DocumentoConocimientoCliente', 'Conocimiento Cliente'),
  new Class('CD_Acta','Acta')
]

export default App;
