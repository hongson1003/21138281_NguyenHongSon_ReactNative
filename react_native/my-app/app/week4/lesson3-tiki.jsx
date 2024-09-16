import LangTuImage from "@/assets/images/lang-tu.jpg";
import { useState } from "react";
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { getCurrencyVNDWithDots } from "../../utils/currency";

const Lesson3Tiki = () => {
  const [book, setBook] = useState({
    title: "Nguyên hàm tích phân và ứng dụng",
    price: 100000,
    order: 1,
    applyDiscount: false,
  });

  const handleOnIncrease = () => {
    setBook({ ...book, order: book.order + 1 });
  };

  const handleOnDecrease = () => {
    if (book.order > 0) {
      setBook({ ...book, order: book.order == 1 ? 1 : book.order - 1 });
    }
  };

  const handleApplyDiscount = () => {
    setBook({ ...book, applyDiscount: !book.applyDiscount });
  };

  return (
    <View className="p-2 gap-2">
      <View className="flex-row gap-2">
        <Image source={LangTuImage} className="w-[150px] h-52 rounded-sm" />
        <View className="flex-wrap gap-2 flex-1">
          <Text className="font-bold text-[16px]">{book.title}</Text>
          <Text className="font-bold">
            {getCurrencyVNDWithDots(book.price)} VNĐ
          </Text>
          <View className="flex-row justify-between">
            <View className="flex-row justify-center items-center gap-5">
              <TouchableOpacity
                className="rounded-md bg-orange-800 p-2"
                onPress={handleOnDecrease}
              >
                <Text className="text-white">-</Text>
              </TouchableOpacity>
              <Text>{book.order}</Text>
              <TouchableOpacity
                className="rounded-md bg-orange-800 p-2"
                onPress={handleOnIncrease}
              >
                <Text className="text-white">+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="rounded-md bg-orange-400 p-2">
              <Text className="text-white">Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-row justify-between gap-2 items-center">
        <View className="flex-row gap-2 border-grey-400 border py-2 flex-1 items-center">
          {!book.applyDiscount ? (
            <>
              <View className="w-8 h-4 bg-yellow-500"></View>
              <Text>Mã giảm giá</Text>
            </>
          ) : (
            <Text className="text-orange-700">Đã áp dụng mã giảm giá</Text>
          )}
        </View>
        <TouchableHighlight
          className="bg-orange-500 p-2 rounded-t-md"
          onPress={handleApplyDiscount}
        >
          <Text className="text-white">
            {!book.applyDiscount ? (
              <Text>Áp dụng</Text>
            ) : (
              <Text>Bỏ áp dụng</Text>
            )}
          </Text>
        </TouchableHighlight>
      </View>
      <View className="border-b-8 border-gray-500"></View>

      <View className="flex-row gap-2">
        <Text>Bạn có phiếu quà tặng Tiki ?</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://tiki.vn/")}>
          <Text style={{ color: "blue" }}>Tiki.vn</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row gap-2 items-center justify-between">
        <Text>Tạm tính</Text>
        <Text className="text-red-400">
          {getCurrencyVNDWithDots(book.price * book.order)} VNĐ
        </Text>
      </View>
      <View className="h-32 bg-gray-400"></View>
      <View className="flex-row gap-2 items-center justify-between">
        <Text>Tạm tính</Text>
        <Text className="text-red-400">
          Thành tiền: {getCurrencyVNDWithDots(book.price * book.order)} VNĐ
        </Text>
      </View>
      <View className="justify-center">
        <TouchableOpacity className="rounded-md p-2 mx-auto bg-orange-400 w-full">
          <Text className="text-center text-white">Tiến hành đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lesson3Tiki;
