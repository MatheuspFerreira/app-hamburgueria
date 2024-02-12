import styled from "styled-components/native";

type ButtonProps = {
    isSelected:boolean;
}

export const OverLay = styled.View`
    width: auto;
    height: auto;

`

export const Button = styled.TouchableOpacity<ButtonProps>`
    width: auto;
    height: auto;
    background-color: ${({ theme }) => theme.colors.menu.primary};
    border-radius: 8px;
    padding: 8px 8px;
    border: ${(props) => props.isSelected ? `2px solid ${props.theme.colors.secondary}` : "none"};

`

export const ButtonText= styled.Text`
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: bold;
    font-size: 17px;

`