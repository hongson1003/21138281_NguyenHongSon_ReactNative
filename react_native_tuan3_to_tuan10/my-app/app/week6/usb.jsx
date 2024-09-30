import { FlatList, Image, Text, TextInput, View } from 'react-native';
import usbJson from '@/assets/data/usb.json';
import { useState } from 'react';

const UsbItem = ({ usb }) => {
  return (
    <View className="flex-1 p-2 aspect-square">
      <View className="w-full aspect-video">
        <Image
          source={{ uri: usb.image }}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View>
        <Text>{usb.name}</Text>
      </View>
      <View className="flex-row flex-1 items-end">
        {Array.from({ length: usb.rate }).map((_, index) => (
          <Text key={index}>⭐</Text>
        ))}
      </View>
      <View>
        <Text>{usb.price.toLocaleString()}</Text>
      </View>
    </View>
  );
};

const Usb = () => {
  const [data, setData] = useState(usbJson);

  return (
    <View className="flex-1">
      <View className="flex-row justify-between bg-blue-200 p-2">
        <Text className="text-[20px]">⇦</Text>
        <TextInput
          className="max-w-3xl h-8 rounded-md px-2 bg-white"
          defaultValue="Dây cáp USB"
        />
        <Text className="text-[20px]">🛒</Text>
        <Text className="text-[20px]">⋯</Text>
      </View>

      <View className="flex-1">
        <FlatList
          data={data}
          renderItem={({ item }) => <UsbItem usb={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Usb;
