import React from "react";
import {FiChevronRight} from 'react-icons/fi';
import {Link} from 'react-router-dom'

import {Title, Form, Repositories} from './Style'
 
const Dashboard: React.FC = () => {
    return (
        <>
            <Title>Explore repositórios no GitHub</Title>
            <Form>
                <input placeholder= "Digite um nome no repositório"/>
                <button type="submit"> Pesquisar</button>
            </Form>

            <Repositories>
                <Link to="#">
                    <img src="https://images.unsplash.com/photo-1600141905113-37c4ddddcba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div>
                        <strong>projetoReactMalwee</strong>
                        <p>Oi, tudo bom?</p>
                    </div>
                    <FiChevronRight/>

                </Link>
            </Repositories>
            <Repositories>
                <Link to="#">
                    <img src="https://images.unsplash.com/photo-1600141905113-37c4ddddcba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div>
                        <strong>projetoReactMalwee</strong>
                        <p>Oi, tudo bom?</p>
                    </div>
                    <FiChevronRight/>

                </Link>
            </Repositories>
            <Repositories>
                <Link to="#">
                    <img src="https://images.unsplash.com/photo-1600141905113-37c4ddddcba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div>
                        <strong>projetoReactMalwee</strong>
                        <p>Oi, tudo bom?</p>
                    </div>
                    <FiChevronRight/>

                </Link>
            </Repositories>

        </>
    );
}

export default Dashboard;