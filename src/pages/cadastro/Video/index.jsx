import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function CadastroVideo() {
    const history = useHistory();
    const {handleChange, values } = useForm({
        titulo: 'Vídeo padrão',
        url: 'https://github.com/daniel22',
        categoria: 'Front End',
    });

    return ( 
        <PageDefault>
        <h1> Cadastro de Video </h1>

    <form onSubmit={(event)=>{
        event.preventDefault();
        alert('Video Cadastrado com sucesso!!1!');

        history.push('/');
    }}
    >

    <FormField 
        label="Titulo do Vídeo"
        name="titulo"
        value={values.titulo}
        onChange={handleChange}
        />

    <FormField 
        label="URL"
        name="url"
        value={values.url}
        onChange={handleChange}
        />
         <FormField 
        label="Categoria"
        name="url"
        value={values.categoria}
        onChange={handleChange}
        />

        <Button type="submit">
        Cadastrar
        </Button>
    </form>
    
        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>        
        </PageDefault>
    );
}

export default CadastroVideo;