import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

const Lesson1 = () => {
    const [count, setCount] = useState(0)

    const handleOnPress = () => {
        setCount(prev => prev + 1)
    }

    const handleOnReset  = () => {
        setCount(0)
    }

    return (
       <View className='flex-1 justify-center items-center gap-2'>
         <Text className='text-green-800 font-bold text-lg'>
            Count: {count}
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

export default Lesson1
