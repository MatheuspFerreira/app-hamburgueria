import styled from 'styled-components/native'

export const OverLay = styled.View`
  width: 100%;
  flex: 1;
`

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 22px;
  font-weight: bold;
`

export const SectionContainer = styled.View`
  width: auto;
  height: 130px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: left;
`

export const TextContainer = styled.View`
  width: 55%;
  height: auto;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`

export const ProductName = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 18px;
  font-weight: 500;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
`

export const Image = styled.Image`
  width: 30%;
  height: 120px;
  border-radius: 14px;
`
