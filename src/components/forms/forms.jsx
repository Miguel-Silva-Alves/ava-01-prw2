import './forms.css';

import { useState } from 'react';
import Button from '../button/button';
import DropDown from '../drop_down/drop_down';
import FieldText from "../field_text/field_text";

const Forms = (props) => {

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [condition, setCondition] = useState('')
    const [sectionName, setSectionName] = useState('')
    const [brandName, setBrandName] = useState('')
    const [brandImage, setBrandImage] = useState('')
    const [userImage, setUserImage] = useState('')

    const toSave = (evento) => {
        evento.preventDefault()

        // 🔥 busca a section completa pelo nome
        const selectedSection = props.sections.find(
            (s) => s.name === sectionName
        )

        props.onAddProduct({
            productName,
            price,
            condition,
            sectionName,
            sectionImage: selectedSection?.image || '',
            brandName,
            brandImage,
            userImage
        })

        // limpar form
        setProductName('')
        setPrice('')
        setCondition('')
        setSectionName('')
        setBrandName('')
        setBrandImage('')
        setUserImage('')
    }

    return (
        <section className="forms">
            <form onSubmit={toSave}>
                <h2>Cadastro de Produto</h2>

                <FieldText 
                    label="Nome do Produto" 
                    placeholder="Digite o nome" 
                    value={productName} 
                    onChange={setProductName} 
                />

                <FieldText 
                    label="Preço" 
                    placeholder="Ex: 199.90" 
                    value={price} 
                    onChange={setPrice} 
                />

                <DropDown 
                    label="Condição" 
                    itens={["new", "used"]} 
                    value={condition} 
                    toChange={setCondition} 
                />

                {/* 🔥 agora escolhe a seção existente */}
                <DropDown 
                    label="Seção" 
                    itens={props.itens} 
                    value={sectionName} 
                    toChange={setSectionName} 
                />

                <FieldText 
                    label="Marca" 
                    placeholder="Ex: Apple" 
                    value={brandName} 
                    onChange={setBrandName} 
                />

                <FieldText 
                    label="Imagem da Marca" 
                    placeholder="URL da imagem" 
                    value={brandImage} 
                    onChange={setBrandImage} 
                />

                <FieldText 
                    label="Imagem do Usuário" 
                    placeholder="URL da imagem" 
                    value={userImage} 
                    onChange={setUserImage} 
                />

                <Button text="Salvar Produto" />
            </form>
        </section>
    )
}

export default Forms;