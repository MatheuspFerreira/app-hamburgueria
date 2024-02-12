import styled from 'styled-components/native'
import FeatherIcon from '@expo/vector-icons/Feather'

export const OverLay = styled.View`
  width: 100%;
  height: 18%;
  padding: 15px 15px;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
`

export const Container = styled.View`
  width: 90%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const FirstContent = styled.View`
  width: 100%;
  height: auto;
`
export const Image = styled.Image`
  width: 42%;
  height: 50px;
`

export const Text = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
`

export const ToucheAbleOpacity = styled.TouchableOpacity`
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Badge = styled.View`
  width: 17px;
  height: 17px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  position: absolute;
  left: 18px;
  bottom: 16px;
  z-index: 1000;
`

export const BadgeText = styled.Text`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: bold;
  font-size: 13px;
`

export const Icon = styled(FeatherIcon)`
  font-size: 27px;
  color: ${({ theme }) => theme.colors.icons.primary};
`
