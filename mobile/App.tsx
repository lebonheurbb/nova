import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// 导入页面组件
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import WorkflowScreen from './src/screens/WorkflowScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f8f9fa',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: '600',
              },
            }}>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ title: 'AI Workflow Assistant' }}
            />
            <Stack.Screen 
              name="Chat" 
              component={ChatScreen}
              options={{ title: 'Chat' }}
            />
            <Stack.Screen 
              name="Workflow" 
              component={WorkflowScreen}
              options={{ title: 'Workflow' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
