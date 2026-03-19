import './forms.css';

import { useState } from 'react';
import Button from '../button/button';
import DropDown from '../drop_down/drop_down';
import FieldText from "../field_text/field_text";

const Forms = (props) => {

    // Criando os estados
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [area, setArea] = useState('')

    const toSave = (evento) => {
        evento.preventDefault()
        // console.log('Form foi submetido => ', name, title, image, area)
        props.onAddProf({
            "name": name,
            "title": title,
            "image": image,
            "area": area
        })
    }
    return (
        <section className="forms">
            <form onSubmit={toSave}>
                <h2>Dados do professor:</h2>
                <FieldText label="Nome" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e)} />
                <FieldText label="Título" placeholder="Digite seu título" value={title} onChange={(e) => setTitle(e)} />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem" value={image} onChange={(e) => setImage(e)} />
                <DropDown label="Área de atuação" itens={props.itens} value={area} toChange={setArea} />
                <Button text="Salvar" />
            </form>
        </section>
    )
}
export default Forms;