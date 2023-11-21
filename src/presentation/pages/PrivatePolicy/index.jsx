import { Container } from './styles'
import { WhatsappButton } from '../../components/WhatsappButton'
import { useBrokerProfile } from '../../../data/BrokerData'

export function PrivatePolicy() {
  const { phone } = useBrokerProfile()
  return (
    <Container>
      <main>
        <h1>Política de Privacidade</h1>
        <section>
          <strong>1. Instituição responsável</strong>
          <p>
            A empresa responsável por coletar, processar e usar dados pessoais
            nos termos da Lei Geral de Proteção de Dados Pessoais (LGPDP) é:
            <span>
              RK Imóveis Rua das Gaivotas, 1709 – Salas 102 e 104 – Ingleses do
              Rio Vermelho | 88058-500 | Florianópolis | SC Telefone: (48)
              3266-0866 E-mail: contato@rkimoveis.com.br
            </span>
            Esta declaração de privacidade de dados tem como objetivo divulgar
            informações sobre a coleta, o processamento e o uso (doravante
            denominado “uso”) de dados pessoais.
          </p>
          <strong>2. Coleta e uso de dados pessoais</strong>
          <p>
            Dados pessoais são informações que permitem identificação, tais como
            o nome, e-mail, telefone ou endereço. A RK Imóveis não coleta dados
            pessoais, exceto quando especificamente fornecidos (p. ex., no
            cadastro para recebimento de newsletters, solicitação de orçamento
            ou solicitações de contato comercial) e salvo consentimento para a
            sua utilização. Armazenamos, usamos ou transferimos seus dados
            pessoais apenas com seu consentimento e em situações específicas
            como, por exemplo, para responder às suas perguntas, pedidos de
            informações ou para informá-lo sobre novidades.
          </p>
        </section>
      </main>
      <WhatsappButton phoneNumber={phone} />
    </Container>
  )
}
