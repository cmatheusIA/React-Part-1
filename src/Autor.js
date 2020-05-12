import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from './ApiService';
import PopUp from './PopUp';


class Autor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: [],                
            titulo: 'Autores'
        };
    }
    componentDidMount(){
      ApiService.ListaNome()
          .then(ApiService.Tratamento)
          .then(res => {
            if(res.message === 'success'){
            this.setState({nomes: [...this.state.nomes,...res.data]})
          }
        })
        .catch(err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar os autores'));
    
    
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']}/>
                </div>
            </Fragment>
        );
    }
}

export default Autor;