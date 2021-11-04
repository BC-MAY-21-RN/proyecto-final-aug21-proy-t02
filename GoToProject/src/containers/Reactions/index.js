import React from 'react';
import {Layout} from '../../components/styled';
import reactions from '../../library/images/reactions.json';
import {ScrollView} from 'react-native';
import {Menu} from '../../components/menu';
import {ReactionList} from '../../components/Reactions';
export const Reactions = () => {
  return (
    <Layout aline="flex-start">
      <ScrollView style={{width: '100%'}}>
        {reactions.map(value => {
          return <ReactionList key={value.id} {...value} />;
        })}
      </ScrollView>
      <Menu />
    </Layout>
  );
};
