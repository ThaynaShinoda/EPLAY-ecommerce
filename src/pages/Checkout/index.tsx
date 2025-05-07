import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { InputGroup, Row } from './styles';

export function Checkout() {
  return (
    <div className="wrapper">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input type="text" name="" id="fullName" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="" id="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" name="" id="cpf" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dado de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="email" name="" id="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input type="email" name="" id="confirmDeliveryEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <p>Ao optar por essa forma de pagamento, é importante lembrar que a confirmação pode levar até 3 dias úteis, devido aos prazos estabelecidos pelas instituições financeiras. Portanto, a liberação do código de ativação do jogo adquirido ocorrerá somente após a aprovação do pagamento do boleto.</p>
        </div>
      </Card>
      <Button type='button' title='Clique aqui para finalizar a compra'>
        Finalizar compra
      </Button>
    </div>
  );
}
