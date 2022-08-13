import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './index.css'
import { useState } from 'react'
import api from '../../Service/api'

function Index() {

    /*          OBSERVAÇÃO:
    ARRUMAR HOOKS COM DADOS NESCESSARIOS
    ARRUMAR BACKEND COM DADOS NESCESSARIOS
    ARRUMAR O FORMULARIO COM DADOS NESCESSARIOS
    ARRUMAR O BANCO DE DADOS COM DADOS NESCESSARIOS
    */

    // Criação de estados para o formulário
    // const [title, setTitle] = useState(''),
    //     [edition, setEdition] = useState(''),
    //     [category, setCategory] = useState(''),
    //     [idiom, setIdiom] = useState(''),
    //     [year, setYear] = useState(''),
    //     [author, setAuthor] = useState(''),
    //     [isbn, setIsbn] = useState(''),
    //     [cdd, setCdd] = useState('')

    // // Função para cadastrar o livro
    // async function sendBook(){
    //     const data = {
    //         title: title,
    //         edition: edition,
    //         isbn: isbn,
    //         year: year,
    //         category: category,
    //         cdd: cdd,
    //         idiom: idiom
    //     }

    //     console.log(data)

    //     // Envia os dados para o backend
    //     const res = await api.post('/book/insert', data)
    //     console.log(res)
    //     alert(res.data.message)
    // }

  return (
    <div>

        <label id="Label-CadastroLivro">CADASTRO DE LIVRO</label>
        
        <div id='AreaForm-CadastroLivro'>
            <Form>
                <div id="AreaFormGroup">

                    <Form.Group className='Form-group'>
                        <Form.Label className='Form-Label'>TÍTULO</Form.Label>
                        <Form.Control className='Form-control' type="text" required 
                        onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='Form-group'>
                        <Form.Label className='Form-Label'>EDIÇÃO/VOLUME</Form.Label>
                        <Form.Control className='Form-control' type="text" required
                        onChange={e => setEdition(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='Form-group'>
                        <Form.Label className='Form-Label'>CATEGORIA</Form.Label>
                        <Form.Control className='Form-control' type="text" required
                        onChange={e => setCategory(e.target.value)}/>
                    </Form.Group>


                    <Form.Group className='Form-group'>
                        <Form.Label className='Form-Label'>IDIOMA</Form.Label>
                        <Form.Control className='Form-control' type="text" required
                        onChange={e => setIdiom(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='Form-group'>
                        <Form.Label className='Form-Label'>AUTOR</Form.Label>
                        <Form.Control className='Form-control' type="text" required
                        onChange={e => setAuthor(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='Form-group'>
                        <Form.Label className='Form-Label'>ANO LANÇAMENTO</Form.Label>
                        <Form.Control className='Form-control' type="number" maxLength={4} required
                        onChange={e => setYear(e.target.value)}/>
                    </Form.Group>


                    <Form.Group className='Form-group'>
                        <Form.Label className='Form-Label'>ISBN</Form.Label>
                        <Form.Control className='Form-control' type="text" required
                        onChange={e => setIsbn(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className='Form-group'>
                        <Form.Label className='Form-Label'>CDD</Form.Label>
                        <Form.Control className='Form-control' type="text" required
                        onChange={e => setCdd(e.target.value)}/>
                    </Form.Group>


                    <div id="AreaButton-CadastrarLivro">
                        <Button id="FormButton-CadastrarLivro" onClick={sendBook} type="submit">ENVIAR</Button>
                    </div>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default Index