const ApiService = {

    listaAutor :()=> {
        return fetch('http://localhost:8000/api/autor');
    },

    CriaAutor :(autor)=> {
        return fetch('http://localhost:8000/api/autor', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: autor });
    },

    ListaNome:()=>{
        return fetch('http://localhost:8000/api/autor/nome');
         
    },

    ListaLivros:()=>{
        return fetch('http://localhost:8000/api/autor/livro');
    },

    RemoveAutor: id =>{
        return fetch(`http://localhost:8000/api/autor/${id}`, { method: 'DELETE', Headers: { 'content-type': 'application/json' } });
    },

    Tratamento : async res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return await res.json();
    }

}

export default ApiService;