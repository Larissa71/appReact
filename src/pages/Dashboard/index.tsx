import React, {useState, useEffect, FormEvent} from "react";
import {FiChevronRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';


import {Title, Form, Repositories, Error} from './Style'

interface Repository{
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url:string;
    }

}
 
const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const StorageRepository = localStorage.getItem(
            '@GithubExplorer:repositories'
        );

        if(StorageRepository){
            return JSON.parse(StorageRepository)
        }

        return[];
    });

    const handleAddRepository = async (event: FormEvent <HTMLFormElement>) =>{
        event.preventDefault();

        if(!newRepo){
            setInputError("Digite um usuário/reporitório para pesquisar")
            return;
        }

    try {
        const response = await api.get<Repository>(`repos/${newRepo}`);
        const repository = response.data;

        setRepositories([... repositories, repository])
        setNewRepo('');
        setInputError('');

    } catch(err){
        setNewRepo('');
        setInputError("Repositorio não encontrado ou existente.");
    }
}

    useEffect(() => {
        localStorage.setItem(
            '@GitHubExplorer:repositories',
            JSON.stringify(repositories)
        )
    }, [repositories]);

    return (
        <>
            <Title>Explore repositórios no GitHub</Title>
            <Form onSubmit={handleAddRepository}>
                <input 
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder= "Digite um nome no repositório"
                />
                <button type="submit"> Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                <Link to="#">
                    <img src={repository.owner.avatar_url} alt={repository.owner.login }/>
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                    <FiChevronRight size={20}/>

                </Link>
                ))}
            </Repositories>

        </>
    );
}

export default Dashboard;