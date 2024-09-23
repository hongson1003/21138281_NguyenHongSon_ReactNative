import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { Checkbox } from "react-native-paper";

const GeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [listCheck, setListCheck] = useState([
    {
      key: "lowercase",
      title: "Include lower case letters",
      value: false,
    },
    {
      key: "uppercase",
      title: "Include upcase letters",
      value: false,
    },
    {
      key: "number",
      title: "Include numbers",
      value: false,
    },
    {
      key: "special",
      title: "Include special symbols",
      value: false,
    },
  ]);

  const handleGeneratePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const special = "!@#$%^&*()_+";
    let characters = "";
    let result = "";

    listCheck.forEach((item) => {
      if (item.value) {
        switch (item.key) {
          case "lowercase":
            characters += lowerCase;
            break;
          case "uppercase":
            characters += upperCase;
            break;
          case "number":
            characters += number;
            break;
          case "special":
            characters += special;
            break;
          default:
            break;
        }
      }
    });

    if (!characters) {
      const randomKey = Math.floor(Math.random() * 4);
      switch (randomKey) {
        case 0:
          characters = lowerCase;
          break;
        case 1:
          characters = upperCase;
          break;
        case 2:
          characters = number;
          break;
        case 3:
          characters = special;
          break;
        default:
          break;
      }
    }

    // Tạo mật khẩu ngẫu nhiên
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(result);
  };

  return (
    <View className="bg-violet-500 flex-1 p-5">
      <View className="bg-violet-800 flex-1 items-center p-2 gap-2">
        <View>
          <Text className="text-white font-bold text-lg">PASSWORD</Text>
          <Text className="text-white font-bold text-lg">GENERATOR</Text>
        </View>
        <TextInput
          className="h-10 w-full border border-gr p-2 bg-gray-800 text-white"
          placeholder="Your Password"
          value={password}
          editable={false}
        />

        <View className="flex items-center gap-2 flex-row justify-between w-full">
          <Text className="text-white font-semibold text-lg">Length</Text>
          <TextInput
            className="h-10 w-1/2 border border-gr p-2 bg-gray-800 text-white"
            placeholder="Nhập nội dung..."
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
        </View>
        {listCheck.map((item) => (
          <View
            key={item.key}
            className="flex items-center gap-2 flex-row justify-between w-full"
          >
            <Text className="text-white font-semibold text-lg">
              {item.title}
            </Text>
            <Checkbox
              status={item.value ? "checked" : "unchecked"}
              onPress={() => {
                const newList = listCheck.map((i) => {
                  if (i.key === item.key) {
                    return { ...i, value: !i.value };
                  }
                  return i;
                });
                setListCheck(newList);
              }}
              color="green"
              uncheckedColor="pink"
            />
          </View>
        ))}
        <TouchableOpacity
          className="bg-green-500 p-2 rounded-lg w-full mt-2"
          onPress={handleGeneratePassword}
        >
          <Text className="text-white font-semibold text-lg">Generate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GeneratePassword;
