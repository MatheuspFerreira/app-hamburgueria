import { useMenuSelected } from '../hooks/useMenuSelected';
import { CATEGORIES, MENU } from '../utils/data/products';
import { Header } from '../components/header';
import { SectionList } from 'react-native';
import { Menu } from '../components/menu';
import { useRef } from 'react';
import {
  OverLay,
  SectionTitle,
  SectionContainer,
  TextContainer,
  ProductName,
  Description,
  Image,
} from '../styles/home';

export default function Home() {
  const { isSelected, setIsSelected } = useMenuSelected();
  const SectionListRef = useRef<SectionList>(null);

  function handleCategoriSection(SelectedCategory: string) {
    setIsSelected(SelectedCategory)

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === SelectedCategory,
    )

    if (SectionListRef.current) {
      SectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  };

  return (
    <OverLay>
      <Header numberItens={2} title="Faça seu pedido" />
      <Menu isSelected={isSelected} handleIsSelected={handleCategoriSection} />

      <SectionList
        sections={MENU}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        renderItem={({ item }) => (
          <SectionContainer>
            <Image source={item.thumbnail} resizeMode="contain" />
            <TextContainer>
              <ProductName>{item.title}</ProductName>
              <Description>{item.description}</Description>
            </TextContainer>
          </SectionContainer>
        )}
        style={{ paddingLeft: 15, marginTop: 30 }}
        contentContainerStyle={{ paddingBottom: 20, gap: 20 }}
        ref={SectionListRef}
      />
    </OverLay>
  )
}
