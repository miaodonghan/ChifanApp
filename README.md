## ChifanApp in React Native

### Setting things up
install js dependencies
```bash
npm install
```
you will need XCode installed for iOS development and Android SDK installed for Android development.
compile and deploy your application
#### iOS
```bash
react_native run-ios
```
#### Android
  Set ANDROID SDK path first
```  
export ANDROID_HOME=/Users/donghan/Library/Android/sdk
```
  then start
```bash
react_native run-android
```
### How to Debug
   Modified source code can be reloaded without fresh deployment
#### iOS
   Cmd + R will reload your updated code.
#### Android
  use `adb` tool to trigger debug menu. ``` $ANDROID_SDK/platform-tools/adb shell input keyevent 82```
  
  However, If new source files are created, reloading page won't work. you will have to redeploy your application.
