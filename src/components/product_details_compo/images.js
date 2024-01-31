import React, {useState} from 'react';
import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export default function Product_images({images}) {
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [index, setindex] = useState(0);
  const RenderItem = ({item, index}) => {
    return (
      <Image
        key={index}
        resizeMode="contain"
        source={{uri: item}}
        style={{width: width, height: width / 2}}
      />
    );
  };

  return (
    <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
      {images.map((item, index) => {
        return <RenderItem item={item} key={index} />;
      })}
    </ScrollView>
  );
}
