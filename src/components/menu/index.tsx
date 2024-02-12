import { Button, ButtonText, OverLay } from './styled'
import { CATEGORIES } from '@/src/utils/data/products'
import { FlatList } from 'react-native'

type MenuProps = {
    isSelected:string;
    handleIsSelected:(value:string)=>void;
}

export function Menu({ isSelected, handleIsSelected }:MenuProps) {
  return (
    <OverLay>
      <FlatList
        data={CATEGORIES}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Button isSelected={item === isSelected} onPress={() => handleIsSelected(item)}>
            <ButtonText>{item}</ButtonText>
          </Button>
        )}
        contentContainerStyle={{ 
            gap: 10, 
            paddingRight: 30 
        }}
        style={{ 
            padding: 15 
        }}
      />
    </OverLay>
  )
}
