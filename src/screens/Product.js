import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Get_products} from '../Action';
import Render_items from '../components/Product_list';

const Product = ({navigation}) => {
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([]);
  const [error_code, seterror_code] = useState('');

  useEffect(() => {
    Get_products(setloading, setproducts, seterror_code);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <StatusBar barStyle="light-content" backgroundColor={'blue'} />
      {loading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <Render_items item={item} index={index} />;
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Product;
