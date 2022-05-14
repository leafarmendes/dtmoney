import Modal from "react-modal";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TrasactionTypeContainer } from "./style";
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type , setType] = useState('deposit');
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    function handleCreateNewTransation(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        }

        api.post ('/transactions', data)
    }

    return(
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >  

        <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar Modal" />
        </button>

        <Container onSubmit={handleCreateNewTransation}>
            <h2>Cadastrar transação.</h2>

            <input type="text"
                placeholder="Titulo"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input type="number"
                placeholder="Valor" 
                value={value}
                onChange={event => setValue(Number(event.target.value))}
            />

            <TrasactionTypeContainer>
                <RadioBox 
                    type="button" 
                    onClick={() => {setType('deposit'); }}
                    isActive={type === 'deposit'}
                    activeColors="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                    type="button" 
                    onClick={() => {setType('withdraw'); }}
                    isActive={type === 'withdraw'}
                    activeColors="red"
                >
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saída</span>
                </RadioBox>
            </TrasactionTypeContainer>

            <input
                placeholder="Categoria" 
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
        </Container>
    </Modal>  
    );
}