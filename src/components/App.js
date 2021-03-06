import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Forca from './Forca';
import LetraInput from './LetraInput';
import Letras from './Letras';
import Palavra from './Palavra';
import PalavraInput from './PalavraInput';

const mapStateToProps = (state) => ({
  completo: state.forca.faltando === 0,
  vidas: state.forca.vidas,
  palavra: state.forca.palavra,
  palavraLimpa: state.forca.palavraLimpa,
  letras: state.forca.letras,
});

let App = ({ completo, vidas, palavra, palavraLimpa, letras }) => {
  let conteudo = '';

  if (palavra) {
    conteudo = (
      <div>
        <Forca vidas={vidas} completo={completo} />
        <Palavra vidas={vidas} palavra={palavra} palavraLimpa={palavraLimpa} letras={letras} />
        {(!completo && vidas) ? <LetraInput /> : ''}
        <Letras palavraLimpa={palavraLimpa} letras={letras} />
      </div>
    );
  }

  return (
    <div className="app">
      {palavra ? conteudo : <Forca vidas={0} completo={false} />}
      {(completo || !vidas) ? <PalavraInput /> : ''}
    </div>
  );
};
App.propTypes = {
  completo: PropTypes.bool.isRequired,
  vidas: PropTypes.number.isRequired,
  palavra: PropTypes.string,
  palavraLimpa: PropTypes.string,
  letras: PropTypes.arrayOf(PropTypes.string).isRequired,
};

App = connect(mapStateToProps)(App);

export default App;
