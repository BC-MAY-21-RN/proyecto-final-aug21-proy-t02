import React from 'react';
import {Layout} from '../../components/styled';
import reactions from '../../library/images/reactions.json';
import {ScrollView, View} from 'react-native';
import {Menu} from '../../components/menu';
import {ReactionList} from '../../components/Reactions';
export const Reactions = () => {
  return (
    <Layout aline="flex-start">
      <View style={{ width: '100%', height:'97%'}}>
        <ScrollView style={{width: '100%',marginBottom:20}}>
          {reactions.map(value => {
            return <ReactionList key={value.id} {...value} />;
          })}
        </ScrollView>
      </View>
      <Menu stateReact="true" />
    </Layout>
  );
};
