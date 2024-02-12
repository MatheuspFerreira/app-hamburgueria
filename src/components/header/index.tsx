import Logo from '../../assets/logo.png'
import { Divider } from '../divider'
import {
  Container,
  Image,
  FirstContent,
  Text,
  Icon,
  OverLay,
  ToucheAbleOpacity,
  Badge,
  BadgeText,
} from './styles'


type HeaderProps = {
  title: string
  numberItens?: number
}

export function Header({ title, numberItens }: HeaderProps) {
  return (
    <OverLay>
      <Container>
        <FirstContent>
          <Image source={Logo} resizeMode="contain" />
          <Text>{title}</Text>
        </FirstContent>
        {numberItens && (
          <ToucheAbleOpacity>
            <Badge>
              <BadgeText>1</BadgeText>
            </Badge>

            <Icon name="shopping-bag" />
          </ToucheAbleOpacity>
        )}
      </Container>
      <Divider />
    </OverLay>
  )
}
