import React from "react"
import * as S from "./styled"
import Form from "./Form"

import precos from "../../../data/precos.json"

const Inscricao = () => {
  return (
    <S.InscricaoWrapper>
      <S.InscricaoContainer>
        {/* <S.Title>Título</S.Title> */}
        <S.ButtonsContainer>
          <S.Button to="https://www.even3.com.br/samevufv" /* to="/inscricao" */ target="_blank" /* onClick={() => alert("Em manutenção, desculpe o incômodo")} */>
            <S.Img>
              <Form />
            </S.Img>
            Preencha o formulário
          </S.Button>
        </S.ButtonsContainer>
        <S.Title>Instruções</S.Title>
        <S.Description>
          <strong>1.</strong> Clique no botão “Preencha o formulário” e siga os passos abaixo:
          <br />
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;a.	Realize o pagamento de sua inscrição clicando em “aqui” na página do formulário, depois disso, uma nova página será aberta.
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;b.	Clique em “participar”
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;c.	Realize o cadastro no site da FUNARBE inserindo o número do seu CPF
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;d.	Preencha os campos que estão marcados com asterisco
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;e.	Se estiver tudo correto, confirme os dados para que possa continuar o cadastro para o pagamento
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;f.	Faça o login
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;g.	Confirme os dados novamente
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;h.	Escolha a modalidade de inscrição na qual se encaixa
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;i.	Selecione a forma de pagamento: boleto ou cartão de crédito
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;j.	Clique em “Enviar”
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;k.	Realize o pagamento via boleto ou cartão de crédito
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;l.	Faça o download do seu comprovante, caso tenha pagado via app, ou tire um print de tela do mesmo.
          <br />
          <br />
          <strong>2.</strong> Retorne para a outra aba contendo o formulário de inscrição.
          <br />
          <br />
          <strong>3.</strong> Escolha sua categoria graduação ou pós-graduação/profissional.
          <br />
          <br />
          <strong>4.</strong> Ao clicar em “Realizar inscrição” você terá 30 minutos para
          preencher os seus dados que variam de acordo com a categoria
          escolhida. Lembre-se de conferir TODOS os dados pois uma vez enviados
          não é possível alterar.
          <br />
          <br />
          <strong>5.</strong> Aperte o botão continuar.
          <br />
          <br />
          <strong>6.</strong> Aparecerá o resumo do pedido e do participante apresentando o nome
          completo e o email utilizado no cadastro. Caso tenha algum dado errado
          aperte o botão “Voltar”, caso contrário, aperte o botão de “Concluir
          inscrição”.
          <br />
          <br />
          <strong>7.</strong> Imprima seu comprovante ou salve no seu smartphone. Não esqueça de
          adicionar nosso evento no seu calendário!
          <br />
          <br />
          <strong>8.</strong> Após seguir esses passos
          você receberá um email de confirmação de inscrição e, caso algum comprovante esteja incorreto, um membro de nossa equipe entrará em contato.
        </S.Description>
        <S.Title style={{textAlign: "center"}}>Tabela de Preços</S.Title>
        <S.TableContainer>
          {precos.map(el => {
            return (
              <S.TableBox key={Math.random()}>
                <S.TitleBox>
                  <S.TableTitle>{el.modalidade}</S.TableTitle>
                </S.TitleBox>
                <S.GridContainer>
                  {el.tabela.map((tabela, i) => {
                    return (
                      <S.Row
                        style={i % 2 !== 0 ? { backgroundColor: "#eee" } : {}}
                        key={Math.random()}
                      >
                        <S.Column>
                          <strong>{tabela.lote}</strong>
                          <br />
                          <S.Obs>{tabela.observacao} </S.Obs>
                        </S.Column>
                        <S.Column>
                          <strong>{tabela.data}</strong>
                          <br />
                          <S.Obs>{tabela.obs} </S.Obs>
                        </S.Column>
                        <S.Column>
                          <strong>{tabela.preco}</strong>
                        </S.Column>
                      </S.Row>
                    )
                  })}
                </S.GridContainer>
              </S.TableBox>
            )
          })}
        </S.TableContainer>
      </S.InscricaoContainer>
    </S.InscricaoWrapper>
  )
}

export default Inscricao
