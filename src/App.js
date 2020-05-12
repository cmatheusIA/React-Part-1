import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import Tabela from './Tabela';
import ApiService from './ApiService';
import Form from './Form';
import Header from './Header';
import PopUp from './PopUp';
class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            autores: [],
        };
    }


    

    removeautor = (id)=>{

        const {autores} = this.state;

        const autoresatualizado = autores.filter(autor =>{
            return autor.id !== id
        })
        ApiService.RemoveAutor(id)
                .then(res=> ApiService.Tratamento(res))
                .then(res =>{
                    if (res.message==='deleted') {
                        this.setState({ autores : [...autoresatualizado]})
                        PopUp.exibeMensagem('error', "Autor removido com sucesso");
                    }
                })
                .catch(err => PopUp.exibeMensagem('error', "Erro na comunição com a Api ao tentar remover o autor"))
        
    }

    escutadorDeSubmit = autor => {
        ApiService.CriaAutor(JSON.stringify(autor))
        .then(res => ApiService.Tratamento(res))
        .then(res =>{ 
            if (res.message==='success'){
                this.setState({ autores:[...this.state.autores, res.data]})
                PopUp.exibeMensagem('success', "Autor adicionado com sucesso");
            }
            
        })
        .catch(
            err => PopUp.exibeMensagem('error', "Erro na comunição com a Api ao tentar criar o autor")
        )
      }

    componentDidMount(){
        ApiService.listaAutor()
                    .then(res =>ApiService.Tratamento(res))
                    .then(res => {
                        if (res.message==='success'){
                            this.setState({autores:[...this.state.autores, ...res.data]})
                        }
                    })
                    .catch(
                       err => PopUp.exibeMensagem('error', "Erro na comunição com a Api ao tentar listar os autores"))
    }

    render() {

        return ( 
            <Fragment>
                <Header/>
                <div className="container mb-10">
                    <Tabela autores = { this.state.autores } removeautor = { this.removeautor }/>    
                    <Form escutadorDeSubmit={this.escutadorDeSubmit} />
                </div>
              
            </Fragment>
        );
    }
}

export default App;