import React from 'react';
import {colors} from '../../library/constants/colors';
import {CustomIcon} from '../CustomIcon';
import { RowTitle, ColTitle, Section, TitleReaction, Title, BoxReaction,} from '../../containers/DetailsScreen/styled';
export const SectionTitle = ({title, categorie, data}) => {
  const reactionIcons = [
    {name: 'star', value:data.stars},
    {name: 'eye', value:data.views},
    {name: 'heart', value:data.hearts},
  ];
  const iconList = reactionIcons.map((names,data) => (
    <BoxReaction key={names.name}>
      <TitleReaction color={colors.lettersGray} fonz="25px">
        {names.name==="star"? ` ${names.value}    `:`${names.value } `} 
        <CustomIcon name={names.name} color={colors.white} size={31} />
      </TitleReaction>
    </BoxReaction>
  ));
  return (
    <RowTitle>
      <ColTitle w="60%">
        <Title h="130px" fontt="600" top="10px" color={colors.white} left="15px">{title}</Title>
        <Section>
          <Title h="40px" fonz="30px" fontt="500" color={colors.white} w="200px">Categorie</Title>
          <Title color={colors.lettersGray} h="30px" top="-3px" left="10px" fontt="300" fonz="21px"
           w="200px"> {categorie} 
           </Title>
        </Section>
      </ColTitle>
      <ColTitle mt="15px" h="200px" w="35%">
        {iconList}
      </ColTitle>
    </RowTitle>
  );
};
