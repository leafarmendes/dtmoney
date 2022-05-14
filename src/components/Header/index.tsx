import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onNewTransactionModal: () => void
}

export function Header({ onNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button type="button" onClick={onNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}