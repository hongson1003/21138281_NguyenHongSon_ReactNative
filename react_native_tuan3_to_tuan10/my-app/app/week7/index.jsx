import { useQuery } from '@tanstack/react-query';
import { Link, useRouter } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // Import hàm v4 từ uuid

const Home = () => {
  const router = useRouter();
  // Fetch dữ liệu từ API bằng React Query
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/api/v1/users`);
      return res.json();
    },
  });

  const handleOnClickAdd = async () => {
    const id = uuidv4();
    const name = 'New user ' + id;
    const email = 'newuser' + id + '@gmail.com';
    await fetch(`http://localhost:3000/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, email }),
    });
    refetch();
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
    const ids = data.map((item) => item.id);
    const router = useRouter();
    const id = ids[Math.floor(Math.random() * ids.length)];
    const name = 'Edit user ' + id + uuidv4();
    const email = 'edituser' + id + uuidv4() + '@gmail.com';
    await fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
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
    <View className="flex-1 bg-gray-700">
      <View className="w-full bg-blue-300 p-2 justify-center items-center">
        <Text className="uppercase">Step1</Text>
      </View>
      <View className="gap-3 mb-4 p-4">
        {/* Nút Thêm user */}
        <TouchableOpacity
          className="w-full bg-blue-400 py-3 rounded-lg"
          onPress={handleOnClickAdd}
        >
          <Text className="text-white text-center font-semibold uppercase">
            Thêm user
          </Text>
        </TouchableOpacity>
        {/* Nút Edit user */}
        <TouchableOpacity
          className="w-full bg-yellow-500 py-3 rounded-lg"
          onPress={handleEditUser}
        >
          <Text className="text-white text-center font-semibold uppercase">
            Edit user
          </Text>
        </TouchableOpacity>
        {/* Nút Delete user */}
        <TouchableOpacity className="w-full bg-red-500 py-3 rounded-lg">
          <Text
            className="text-white text-center font-semibold uppercase"
            onPress={handleDeleteUser}
          >
            Delete user
          </Text>
        </TouchableOpacity>
      </View>

      {/* Hiển thị danh sách người dùng */}
      <View className="p-2 flex-1">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View className="bg-white p-4 mb-3 rounded-lg shadow">
              <Text className="text-lg font-bold">{item.name}</Text>
              <Text className="text-gray-600">{item.email}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View className="h-10 bg-violet-300 justify-center items-center">
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: '/input',
              params: { data: data },
            });
          }}
        >
          <Text className="uppercase">Sang step 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
