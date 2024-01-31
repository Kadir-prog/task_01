import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Get_products_details} from '../Action';
import Product_images from '../components/product_details_compo/images';
import {AirbnbRating, Button} from 'react-native-elements';

const Product_detail = ({navigation, route}) => {
  const {product_id} = route.params;
  const [loading, setloading] = useState(true);
  const [product_details, setproduct_details] = useState(null);
  const [error_code, seterror_code] = useState('');

  useEffect(() => {
    Get_products_details(
      setloading,
      setproduct_details,
      seterror_code,
      product_id,
    );
  }, [product_id]);

  console.log(product_details);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <StatusBar barStyle="light-content" backgroundColor="blue" />
      {!loading && product_details != null ? (
        <ScrollView>
          <View
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: '3%',
              paddingVertical: '2%',
            }}>
            <Product_images images={product_details.images} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: '2%',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  fontSize: 19,
                  color: '#000',
                  flex: 1,
                }}>
                {product_details.title}
              </Text>
              <AirbnbRating
                showRating={false}
                size={14}
                defaultRating={Number(product_details.rating)}
                count={5}
              />
            </View>
            <Text
              style={{
                fontWeight: '700',
                fontStyle: 'normal',
                fontSize: 16,
                color: '#aaa',
              }}>
              {product_details.brand} {product_details.category}
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontStyle: 'normal',
                fontSize: 16,
                color: '#aaa',
                flex: 1,
              }}>
              {product_details.description}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '0.8%',
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontStyle: 'normal',
                  fontSize: 16,
                  color: '#171717',
                }}>
                ₹{product_details.price}
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontStyle: 'normal',
                  fontSize: 16,
                  color: '#aaa',
                  paddingHorizontal: 7,
                }}>
                {product_details.discountPercentage}%
              </Text>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Product_detail;
