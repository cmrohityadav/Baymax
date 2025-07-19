

# Dependecy packages and its discription
```bash
npm install react-native-svg

```

react-native-svg is a popular React Native library that lets you use SVG (Scalable Vector Graphics) in your app.

It provides native bindings to draw SVG shapes like <Circle>, <Rect>, <Path>, <Text>, etc.

It works cross-platform (Android, iOS, and web if you use React Native for Web).

You can draw icons, illustrations, graphs, charts, or any custom vector graphics without using PNG images.

SVG is resolution-independent — so your graphics look sharp on all screen sizes and pixel densities.
It’s useful for:

Custom icons

Logos

Animations

Charts or graphs

Illustrations that need to scale cleanly

```bash
npm install react-native-svg
npm install --save-dev react-native-svg-transformer

```

What is react-native-svg-transformer?
react-native-svg-transformer is a Metro bundler transformer.

It lets you import .svg files as React components in your React Native project.

It works together with react-native-svg under the hood.

So instead of drawing shapes manually, you can use ready-made .svg files like icons or illustrations as components.

✅ Why use it?
Without react-native-svg-transformer, React Native can’t handle .svg files by default — it doesn’t know how to bundle them.
This transformer:

Reads the .svg file.

Converts it into a React Native component.

Uses react-native-svg to render it.

So you write:

jsx
Copy
Edit
import Logo from './assets/logo.svg';

<Logo width={120} height={40} />
Just like web React (create-react-app).

✅ How to set it up
Here’s the full step-by-step for React Native CLI:

✅ 1️⃣ Install the dependencies
bash
Copy
Edit
npm install react-native-svg
npm install --save-dev react-native-svg-transformer
✅ 2️⃣ Configure Metro
Create or update metro.config.js in your project root:

js
Copy
Edit
const { getDefaultConfig } = require('expo/metro-config'); // If using Expo
// OR:
// const { getDefaultConfig } = require('metro-config'); // If using plain React Native CLI

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { assetExts, sourceExts } = config.resolver;

  config.resolver.assetExts = assetExts.filter(ext => ext !== 'svg');
  config.resolver.sourceExts = [...sourceExts, 'svg'];

  config.transformer = {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  return config;
})();
⚠️ If you’re not using Expo, replace the first line with:

js
Copy
Edit
const { getDefaultConfig } = require('metro-config');
✅ 3️⃣ Use an .svg file
Save an SVG file in your project:

Copy
Edit
assets/
 └── logo.svg
Use it:

jsx
Copy
Edit
import React from 'react';
import { View } from 'react-native';
import Logo from './assets/logo.svg';

export default function App() {
  return (
    <View>
      <Logo width={200} height={200} />
    </View>
  );
}
✅ 4️⃣ Rebuild your app
Run:

bash
Copy
Edit
npx react-native run-android
# or
npx react-native run-ios
✅ How does this work?
The .svg is transformed into a component at build time.

It renders using the react-native-svg native bindings.

So you get scalable, customizable icons/graphics with props like width, height, fill.


##


Installs the react-native-vector-icons library in your React Native project.

Adds it to your package.json under dependencies (--save is technically optional with modern npm).

react-native-vector-icons gives you a big collection of icon fonts like:

FontAwesome

MaterialIcons

Ionicons

Feather

And more…

These icons are font-based, so they scale cleanly — no blurry icons on different screen sizes.

✅ How do you use it?
After installing, you can do:

jsx
Copy
Edit
import Icon from 'react-native-vector-icons/FontAwesome';

<Icon name="rocket" size={30} color="#900" />
✅ Do you need to link it?
React Native 0.60+: Uses auto-linking, so you usually don’t have to run react-native link manually.

BUT: The icon fonts are native resources. For them to work:

Android: The Gradle config handles this automatically.
Make sure your android/app/build.gradle has:

gradle
Copy
Edit
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
iOS: Sometimes you must drag the fonts to your Xcode project:

Open ios/YourProject.xcworkspace in Xcode.

Drag the folder node_modules/react-native-vector-icons/Fonts into your project.

Ensure the .ttf files are in Build Phases → Copy Bundle Resources.

✅ Do you need react-native.config.js for this?
No, not just for react-native-vector-icons — the Gradle script and Xcode copy steps handle the fonts.
You only add a react-native.config.js if you’re adding custom fonts too.

Example for custom fonts:

js
Copy
Edit
module.exports = {
  assets: ['./assets/fonts/'],
};
You don’t need to include react-native-vector-icons/Fonts there — the library does it via Gradle/Xcode.

✅ How to check it works
Test with:

jsx
Copy
Edit
import Icon from 'react-native-vector-icons/MaterialIcons';

<Icon name="home" size={40} color="blue" />;
If you see no icon:

Try rebuilding the app: npx react-native run-android or npx react-native run-ios.

For iOS, double-check Copy Bundle Resources.

That’s it!
If you want, I can help you:

Add custom fonts together with vector icons.

Show how to use icons inside buttons, tabs, or headers.

Just tell me what you want to do next!



##
npm i lottie-react-native
✅ What does this do?
This command installs the lottie-react-native library in your project.
lottie-react-native is a wrapper for Lottie, an animation library by Airbnb for rendering beautiful vector animations exported as JSON from Adobe After Effects.

📌 What does lottie-react-native do?
Plays high-quality animations using a small JSON file.

Great for fancy loading spinners, onboarding screens, success states, empty states, etc.

Vector animations → scale perfectly, tiny file size compared to video/gifs.

✅ How do you install it correctly?
For React Native CLI:
You usually also need the native Lottie library:

bash
Copy
Edit
npm install lottie-react-native lottie-ios
Then, link the native dependencies:

📌 For iOS:
Install pods:

bash
Copy
Edit
npx pod-install
# or:
cd ios && pod install
👉 lottie-ios is required for iOS builds!

✅ How do you use it?
Example usage:

jsx
Copy
Edit
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/animation.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});
You put your .json animation file in your assets folder.

✅ For Expo
If you use Expo SDK 50+, Lottie is built in:

bash
Copy
Edit
npx expo install lottie-react-native
(No lottie-ios — Expo handles the native bits for you.)

⚠️ Common issues
Don’t forget pod install for iOS or you’ll get Native module cannot be null.

Always use .json files exported with Bodymovin plugin for After Effects.

Make sure the source is require('./path/to/animation.json') or a remote URL.


##
 What is react-native-responsive-fontsize?
It’s a small helper library that makes your font sizes scale automatically to fit different screen sizes and resolutions.

React Native does not resize text by default — so 16 might look fine on an iPhone 12 but tiny on an iPad or huge on a small Android.
This library fixes that by making font sizes proportional to the device screen dimensions.

✅ Why use it?
Ensures text stays readable on all devices.

Helps you avoid manually tweaking sizes for different screens.

Works well for pixel-perfect designs.

✅ How to install
bash
Copy
Edit
npm install react-native-responsive-fontsize
# or
yarn add react-native-responsive-fontsize
✅ How to use
It exports a simple function: RFValue or RFPercentage.

📌 1️⃣ RFValue
Scales a fixed font size relative to screen height.

jsx
Copy
Edit
import { RFValue } from "react-native-responsive-fontsize";

<Text style={{ fontSize: RFValue(16) }}>
  This text scales responsively.
</Text>
So RFValue(16) means:

“Make this text roughly look like 16px on a standard phone, but scale it up/down for bigger/smaller screens.”

📌 2️⃣ RFPercentage
Scales based on a percentage of the screen’s height.

jsx
Copy
Edit
import { RFPercentage } from "react-native-responsive-fontsize";

<Text style={{ fontSize: RFPercentage(2.5) }}>
  This is 2.5% of screen height.
</Text>
✅ Under the hood
It uses:

js
Copy
Edit
Dimensions.get('window').height
and a standard guideline height (e.g. 680 for phones) to compute the relative value.

✅ Example
jsx
Copy
Edit
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Responsive text size!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: RFValue(20), // Scales nicely
  }
});
✅ Key point
You don’t need to configure anything — just import and wrap your sizes.

You can use it for margins, paddings, icons, etc. too — not just fonts.

⚡️ Alternatives
react-native-size-matters → Also has moderateScale for padding/margin.

react-native-responsive-dimensions → Similar but focused on width/height.

✅ Bottom line
Without	fontSize: 20 — same on every screen
With	fontSize: RFValue(20) — scales by screen size



##

What is react-native-linear-gradient?
react-native-linear-gradient is a popular library for React Native that lets you add beautiful gradients as backgrounds or overlays.
It supports:

Linear gradients (from one color to another)

Multiple colors (multi-stop)

Custom angles & directions

React Native does not have native gradient support out of the box — so this library provides native bindings for both iOS and Android.

✅ Why use it?
You want pretty backgrounds (login screens, splash screens, buttons).

You want smooth gradients instead of blocky color transitions.

You need performance — it’s rendered natively, so it’s smooth and fast.

✅ How to install
For React Native CLI:

bash
Copy
Edit
npm install react-native-linear-gradient
📌 Link the native module
React Native 0.60+ — auto-linking should handle it automatically.
For iOS:

bash
Copy
Edit
npx pod-install
# or:
cd ios && pod install
✅ How to use it
Here’s a basic example:

jsx
Copy
Edit
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.gradient}
    >
      <Text style={styles.text}>Linear Gradient Example</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
✅ Key props
colors — Array of color stops.

js
Copy
Edit
colors={['#FF0000', '#00FF00', '#0000FF']}
start & end — Direction of the gradient.

js
Copy
Edit
start={{ x: 0, y: 0 }} // top-left
end={{ x: 1, y: 1 }}   // bottom-right
(x: 0, y: 0) is top-left.

(x: 1, y: 1) is bottom-right.

locations — Optional array of stop positions (0 → 1).

js
Copy
Edit
locations={[0, 0.5, 1]}
✅ Usage examples
Button with gradient:
jsx
Copy
Edit
<LinearGradient
  colors={['#4c669f', '#3b5998']}
  style={{ padding: 15, borderRadius: 5 }}>
  <Text style={{ backgroundColor: 'transparent', fontSize: 15, color: '#fff' }}>
    Sign in with Facebook
  </Text>
</LinearGradient>
✅ Expo?
If you use Expo, you should not use react-native-linear-gradient directly — use Expo’s built-in expo-linear-gradient instead:

bash
Copy
Edit
npx expo install expo-linear-gradient
Then:

jsx
Copy
Edit
import { LinearGradient } from 'expo-linear-gradient';
Same API!

✅ Troubleshooting
Android: Sometimes needs a rebuild:

bash
Copy
Edit
npx react-native run-android
iOS: Always run pod install if you get native errors.

Z-index issues: Wrap content properly — the gradient is just a View.

🔑 Key takeaway
react-native-linear-gradient makes it super easy to build beautiful, native-quality gradients in your RN apps.

##

@react-native-community/blur is a React Native library that lets you add native blur effects to your UI.
You can blur:

Background images

Views behind modals or cards

Any content, just like iOS’s UIBlurEffect or Android’s native blur APIs.

✅ Why use it?
Creates smooth, native blur — unlike manually faking blur with semi-transparent overlays.

Good for frosted glass or fancy modals, headers, or background blur behind popups.

✅ How to install
bash
Copy
Edit
npm install @react-native-community/blur
For iOS:

bash
Copy
Edit
npx pod-install
# or:
cd ios && pod install
✅ How to use it
Import it:

jsx
Copy
Edit
import { BlurView } from '@react-native-community/blur';
Basic example:

jsx
Copy
Edit
import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'https://placekitten.com/800/800' }}
      style={styles.background}
    >
      <BlurView
        style={styles.absolute}
        blurType="light" // 'dark', 'light', 'xlight'
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      >
        <Text style={styles.text}>Hello with blur!</Text>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    top: 100,
    left: 50,
    right: 50,
    bottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});
✅ Key props
Prop	What it does
blurType	The style of blur: "light" "dark" "xlight"
blurAmount	How strong the blur is (higher = blurrier)
reducedTransparencyFallbackColor	Fallback color for Android if transparency effects aren’t available
overlayColor	(Android only) Overlay color for the blur

✅ Does it work on Android?
Yes, but with limitations — older Android versions don’t fully support native blur.

Android uses RenderScript or fallback — it’s not as smooth as iOS’s UIBlurEffect.

For guaranteed cross-platform, people sometimes combine this with semi-transparent overlays.

✅ Expo?
Expo does not include @react-native-community/blur in the managed workflow.
Instead, use expo-blur:

bash
Copy
Edit
npx expo install expo-blur
Then:

jsx
Copy
Edit
import { BlurView } from 'expo-blur';
API is very similar!

✅ Common gotchas
Always wrap BlurView inside an element with a background/image — it blurs what’s behind it.

iOS is super smooth — Android may not be as good.

Always pod install for iOS if you see missing native module errors.

✅ When to use
Frosted glass cards

Blurred headers/footers

Background blur when a modal opens

Fancy onboarding screens




## 
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
      
      'react-native-reanimated/plugin',
    ],
};

##

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);

##

