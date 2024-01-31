import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {Avatar} from '@rneui/themed';
import {AirbnbRating} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';

const Render_items = memo(({item, index}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {product_id: item.id})
      }
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: '1%',
        paddingHorizontal: '3%',
        paddingVertical: '3%',
        alignItems: 'center',
      }}>
      <Avatar
        size={80}
        avatarStyle={{resizeMode: 'cover', borderRadius: 8}}
        source={{uri: item.thumbnail}}
      />
      <View style={{flex: 1, paddingLeft: '3%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            numberOfLines={1}
            style={{
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontSize: 19,
              color: '#000',
              flex: 1,
            }}>
            {item.title}
          </Text>
          <AirbnbRating
            showRating={false}
            size={14}
            defaultRating={Number(item.rating)}
            count={5}
          />
        </View>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: '700',
            fontStyle: 'normal',
            fontSize: 16,
            color: '#aaa',
          }}>
          {item.brand}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: '500',
            fontStyle: 'normal',
            fontSize: 16,
            color: '#aaa',
            flex: 1,
          }}>
          {item.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '0.8%',
          }}>
          <Text
            numberOfLines={2}
            style={{
              fontWeight: '700',
              fontStyle: 'normal',
              fontSize: 16,
              color: '#171717',
            }}>
            ₹{item.price}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontWeight: '600',
              fontStyle: 'normal',
              fontSize: 16,
              color: '#aaa',
              paddingHorizontal: 7,
              flex: 1,
            }}>
            {item.discountPercentage}%
          </Text>
          <Button
            type="clear"
            disabled
            buttonStyle={{paddingHorizontal: 0, paddingVertical: 0}}
            icon={{
              name: 'right',
              type: 'antdesign',
              size: 14,
              color: '#171717',
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default Render_items;
