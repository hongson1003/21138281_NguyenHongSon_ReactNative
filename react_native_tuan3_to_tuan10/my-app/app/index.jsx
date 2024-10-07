import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-500 gap-2">
      <Link href={'/week5'}>
        <Pressable className="bg-blue-500 p-2 rounded-md">
          <Text className="text-white">Đi đến tuần 5</Text>
        </Pressable>
      </Link>

      <Link href={'/week6'}>
        <Pressable className="bg-blue-600 p-2 rounded-md">
          <Text className="text-white">Đi đến tuần 6</Text>
        </Pressable>
      </Link>

      <Link href={'/week7'}>
        <Pressable className="bg-blue-600 p-2 rounded-md">
          <Text className="text-white">Đi đến tuần 7</Text>
        </Pressable>
      </Link>
    </View>
  );
}
