import * as S from './styles'

const Main = ({
  title = 'Abner Fonseca',
  description = 'Poc de Typescript, styled-components, Reactjs, NextJs'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="imagem de um àtomo do react avançado" />
    <S.Title>{title}</S.Title>
    <S.Subtitle>{description}</S.Subtitle>
    <S.Ilustrator
      src="/img/illustration.svg"
      alt="um desenvolvedor olhando para tela do computador"
    />
  </S.Wrapper>
)

export default Main
