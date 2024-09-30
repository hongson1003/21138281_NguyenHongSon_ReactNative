import { FlatList, Text, View } from 'react-native';
import productJson from '@/assets/data/product.json';
import { useState } from 'react';
import ProductItem from '../../components/week6/productItem';

const Home = () => {
  const [data, setData] = useState(productJson);
  return (
    <View className="flex-1">
      <View className="flex-row justify-between bg-blue-200 p-2">
        <Text className="text-[20px]">⇦</Text>
        <Text className="text-[20px]">Chat</Text>
        <Text className="text-[20px]">🛒</Text>
      </View>
      <View className="p-2 border-b border-gray-500">
        <Text className="text-center">
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngần ngại để lại tin nhắn
          cho chúng tôi.
        </Text>
      </View>
      <View className="flex-1">
        <FlatList
          data={data}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Home;
