import * as Styled from './ButtonWidget.styled';

//@ts-ignore
export const ButtonWidget = ({ onClick }) => {
  return (
    <Styled.Button onClick={onClick}>
      Sugerencias de tiendas
    </Styled.Button>
  )
}