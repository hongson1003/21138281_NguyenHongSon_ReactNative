import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

const Lesson2Array = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5])

    const handleOnPress = () => {
        const newArr = arr.map(item => item + 1)
        setArr(newArr)
    }

    const handleOnReset = () => {
        setArr([1, 2, 3, 4, 5])
    }


    return (
        <View className='flex-1 justify-center items-center gap-2'>
          <Text className='text-green-800 font-bold text-lg'>
             Array:; {arr.join(', ')}
         </Text>
         <TouchableOpacity onPress={handleOnPress} className='bg-slate-500 rounded-md p-2'>
             <Text>Click to increase</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={handleOnReset} className='bg-orange-300 rounded-md p-2'>
             <Text>Click to reset</Text>
         </TouchableOpacity>
        </View>
     )
}

export default Lesson2Array