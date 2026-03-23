import './forms.css';

import { useState } from 'react';
import Button from '../button/button';
import DropDown from '../drop_down/drop_down';
import FieldText from "../field_text/field_text";

const Forms = (props) => {

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [condition, setCondition] = useState('new')
    const [sectionName, setSectionName] = useState(props.itens?.[0] || '')
    const [brandName, setBrandName] = useState(props.brands?.[0]?.name || '')
    const [productImage, setProductImage] = useState('')

    const toSave = (evento) => {
        evento.preventDefault()

        // brand selecionada
        const selectedBrand = props.brands.find(
            (b) => b.name === brandName
        )

        props.onAddProduct({
            productName,
            price,
            condition,
            sectionName,
            brandName,
            brandImage: selectedBrand?.image || '',
            productImage
        })

        // limpar form
        setProductName('')
        setPrice('')
        setCondition('new')
        setSectionName(props.itens?.[0] || '')
        setBrandName(props.brands?.[0]?.name || '')
        setProductImage('')
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
                    placeholder="Ex: R$ 199.90" 
                    value={price} 
                    onChange={setPrice} 
                />

                <DropDown 
                    label="Condição" 
                    itens={["new", "used"]} 
                    value={condition} 
                    toChange={(valor) => setCondition(valor)} 
                />

                <DropDown 
                    label="Seção" 
                    itens={props.itens} 
                    value={sectionName} 
                    toChange={(valor) => setSectionName(valor)} 
                />

                <DropDown 
                    label="Marca" 
                    itens={props.brands.map(b => b.name)} 
                    value={brandName} 
                    toChange={(valor) => setBrandName(valor)} 
                />

                <FieldText 
                    label="Imagem do Produto" 
                    placeholder="URL da imagem" 
                    value={productImage} 
                    onChange={setProductImage} 
                />

                <Button text="Salvar Produto" />
            </form>
        </section>
    )
}

export default Forms;