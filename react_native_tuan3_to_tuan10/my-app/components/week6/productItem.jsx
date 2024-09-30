import { Image, Pressable, Text, View } from 'react-native';

const ProductItem = ({ product }) => {
  return (
    <View className="flex-row flex-1 max-w-full p-2">
      <View className="w-20 aspect-square">
        <Image
          source={{ uri: product.image }}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View className="p-2 flex-row flex-1 flex-wrap">
        <View className="flex-1">
          <Text>{product.name}</Text>
          <Text>{String(product.price).toLocaleUpperCase()}</Text>
        </View>
        <View className="p-2">
          <Pressable className="p-2 bg-red-400 rounded-md">
            <Text>Chat</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
