import { Stack } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import QueryClientWrapper from '../../components/week7/queryClientWrapper';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function Layout() {
  return (
    <QueryClientWrapper>
      <Stack 
        screenOptions={{
          headerShown: false
        }}
      />
    </QueryClientWrapper>
  );
}
