import React from 'react';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import Router from './src/navigation/Router';
import Globals from './src/Globals';

export default class App extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <NavigationProvider router={Router}>
          <StackNavigation
            initialRoute={Router.getRoute('home')}
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: Globals.colors.primary_black,
                tintColor: Globals.colors.primary_blue,
              },
            }}
          />
        </NavigationProvider>
      </ActionSheetProvider>
    );
  }
}