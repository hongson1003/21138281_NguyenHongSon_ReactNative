import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // Import hàm v4 từ uuid

const Home = () => {
  // Fetch dữ liệu từ API bằng React Query
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/api/v1/users`);
      return res.json();
    },
  });

  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
  });

  const handleOnClickAdd = async () => {
    const id = uuidv4();
    await fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, ...user }),
    });
    refetch();

    setUser({ name: '', email: '' });
  };

  const handleDeleteUser = async () => {
    const ids = data.map((item) => item.id);
    const id = ids[Math.floor(Math.random() * ids.length)];
    await fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: 'DELETE',
    });

    refetch();
  };

  const handleEditUser = async () => {
    await fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    refetch();
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-semibold">Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500 font-semibold">Error fetching users</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 max-h-full bg-gray-700">
      <View className="w-full bg-blue-300 p-2 justify-center items-center">
        <Text className="uppercase">Step2</Text>
      </View>
      <View className="gap-3 mb-4 p-2 flex-row">
        {/* Nút Thêm user */}
        <TouchableOpacity
          className="flex-1  bg-blue-400 py-3 rounded-lg"
          onPress={handleOnClickAdd}
        >
          <Text className="text-white text-center font-semibold uppercase">
            Thêm user
          </Text>
        </TouchableOpacity>
        {/* Nút Edit user */}
        <TouchableOpacity
          className="flex-1  bg-yellow-500 py-3 rounded-lg"
          onPress={handleEditUser}
        >
          <Text className="text-white text-center font-semibold uppercase">
            Edit user
          </Text>
        </TouchableOpacity>
        {/* Nút Delete user */}
        <TouchableOpacity className="flex-1 bg-red-500 py-3 rounded-lg">
          <Text
            className="text-white text-center font-semibold uppercase"
            onPress={handleDeleteUser}
          >
            Delete user
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-full gap-2">
        <View className="px-2">
          <Text className="text-white">Name</Text>
          <TextInput
            className="flex-1 border border-teal-100 p-2 color-white"
            onChangeText={(value) => {
              setUser({ ...user, name: value });
            }}
            value={user.name}
          />
        </View>

        <View className="px-2">
          <Text className="text-white">Email</Text>

          <TextInput
            className="flex-1 border border-teal-100 p-2 color-white"
            onChangeText={(value) => {
              setUser({ ...user, email: value });
            }}
            value={user.email}
          />
        </View>
      </View>

      {/* Hiển thị danh sách người dùng */}
      <View className="flex-1 p-2">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setUser({
                  id: item.id,
                  name: item.name,
                  email: item.email,
                });
              }}
            >
              <View className="bg-white p-4 mb-3 rounded-lg shadow">
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text className="text-gray-600">{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View className="h-10 bg-violet-300 justify-center items-center">
        <Link href={'/week7/screen'}>
          <Text className="uppercase">Go to Step3</Text>
        </Link>
      </View>
    </View>
  );
};

export default Home;
