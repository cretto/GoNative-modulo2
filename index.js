import { AppRegistry } from 'react-native';
import App from '~/Index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// adb shell input keyevent 82
