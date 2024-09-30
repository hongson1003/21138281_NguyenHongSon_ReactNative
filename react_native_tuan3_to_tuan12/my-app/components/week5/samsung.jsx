import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import SamsungImage from '@/assets/images/samsung.png';
import dataJSON from '../../app/week5/samsung.json';
import Star from '@/assets/images/star.png';
import InfoImage from '@/assets/images/info.png';
import RightIconImage from '@/assets/images/right-icon.png';
import { useNavigation } from 'expo-router';
import { useState } from 'react';

const SamsungScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(dataJSON);

  return (
    <View className="flex-1 p-2">
      <View className="w-full items-center bg-transparent">
        <Image
          source={SamsungImage}
          style={{ width: '200px', height: '300px' }}
        />
      </View>
      <Text className="font-bold text-lg">{data.name}</Text>
      <View className="flex-row gap-2">
        {Array.from({ length: data.rating }).map((_, index) => (
          <Image
            key={index}
            source={Star}
            style={{ width: '20px', height: '20px' }}
          />
        ))}
        <Text className="font-medium">(Xem {data.reviews} đánh giá)</Text>
      </View>
      <View className="my-2 flex-row justify-between">
        <Text className="font-bold">{data.price.toLocaleString()} VNĐ</Text>
        <Text className="line-through">{data.oldPrice.toLocaleString()}</Text>
      </View>
      <View className="flex-row gap-2">
        <Text className="uppercase text-red-600 font-semibold">
          Ở đâu rẻ hơn hoàn tiền
        </Text>
        <Image
          source={InfoImage}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </View>

      <TouchableOpacity
        className="w-full text-center bg-green-300 p-2 rounded-md mt-2"
        onPress={() =>
          navigation.navigate('Detail', {
            data: data,
            setData: setData,
          })
        }
      >
        <View className="flex-row justify-center gap-2">
          <Text className="font-bold">4 màu - chọn màu</Text>
          <Image
            source={RightIconImage}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
      </TouchableOpacity>

      <View className="flex-1 my-2">
        <Text className="font-bold">Màu đã chọn</Text>
        <View className="flex-1 items-center justify-center bg-gray-300 mt-2">
          <View
            className="w-8 h-8 rounded-md"
            style={{
              backgroundColor: data.color,
            }}
          />
        </View>
      </View>

      <View className="justify-end">
        <Pressable
          className="bg-orange-400 py-2 rounded-md 
        items"
        >
          <Text className="font-bold text-center">Chọn mua</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SamsungScreen;
