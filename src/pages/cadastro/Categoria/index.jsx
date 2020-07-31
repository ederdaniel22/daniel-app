import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
    const[categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    useEffect(() =>{
      const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080'
        : 'https://danielflix.herokuapp.com/categorias';
      fetch(URL)
      .then(async(respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
    });



   /* useEffect(() => {
      if(window.location.href.includes('localhost')) {
        const URL = 'http://localhost:8080/categorias'; 
        fetch(URL)
        .then(async (respostaDoServer) =>{
          if(respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return; 
          }
          throw new Error('Não foi possível pegar os dados');
        })
      }    
    }, []);*/

    function setValue (chave, valor){
      setValues({
        ...values,
        [chave]: valor, //nome: 'valor'
      })
    }

    function handleChange(infosDoEvento){
      setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value 
      );
    }

    return ( 
        <PageDefault>
        <h1> Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
        }}>

        <FormField 
        label="Nome da Categoria"
        type="textarea"
        name="nome"
        value={values.nome}
        onChange={handleChange}
        />
        
          <FormField 
        label="Descrição: "
        type="string"
        name="descricao"
        value={values.descricao}
        onChange={handleChange}
        />
          

          <FormField 
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
        />
        
        <Button>
          Cadastrar
        </Button>
      </form>

      { categorias.length === 0  && (<div>
        Loading...
      </div>
      )}

            <ul>
              {categorias.map((categoria)=>(
                    <li key={`${categoria.nome}`}>
                    {categoria.nome}
                  </li>
              ))}
                
            </ul>
      
        <Link to="/">
            Ir para home
        </Link>        
        </PageDefault>
    )
}

export default CadastroCategoria;