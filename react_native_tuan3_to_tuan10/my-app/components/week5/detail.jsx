import { useNavigation } from 'expo-router';
import { Image, Pressable, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import SamsungImage from '@/assets/images/samsung.png';
import InfoImage from '@/assets/images/info.png';
import { useState } from 'react';

const DetailSamsung = ({ route }) => {
  const { data, setData } = route.params;
  const navigation = useNavigation();

  const [colorSelected, setColorSelected] = useState('');

  const handleOnPress = (color) => {
    setColorSelected(color);
  };

  const handleOnDone = () => {
    setData({
      ...data,
      color: colorSelected,
    });
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <View className="border border-gray-400 p-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>🡸</Text>
        </TouchableOpacity>
      </View>
      <View className="p-2 flex-1">
        <View className="p-4 flex-row gap-2">
          <View className="aspect-[9/16] w-16">
            <Image
              source={SamsungImage}
              width={600}
              height={900}
              alt="detail samsung"
              className="w-full h-full"
            />
          </View>
          <Text className="pt-2 font-bold">{data.name}</Text>
        </View>
        <View className="p-4 bg-gray-500 flex-1">
          <Text className="text-white">Chọn 1 màu bên dưới</Text>
          <View className="p-2 items-center flex-1 gap-2">
            {data.colors.map((color, index) => (
              <View className="relative" key={index}>
                <TouchableOpacity onPress={() => handleOnPress(color)}>
                  <View
                    className={`w-16 h-16 rounded-md`}
                    style={{
                      backgroundColor: color,
                    }}
                  />
                </TouchableOpacity>
                {colorSelected === color && (
                  <View className="absolute bottom-2 right-2">
                    <Text>✅</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
          <Pressable
            className="bg-blue-500 p-2 rounded-md"
            onPress={handleOnDone}
          >
            <Text className="text-center">Xong</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default DetailSamsung;
