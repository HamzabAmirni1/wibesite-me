# تطوير تطبيقات الموبايل بـ React Native

**التاريخ:** 20 ديسمبر 2024  
**الكاتب:** حمزة اعمرني  
**وقت القراءة:** 12 دقائق  
**التصنيف:** موبايل

---

## مقدمة

React Native هي إطار عمل قوي من Facebook يتيح لك بناء تطبيقات موبايل أصلية لنظامي iOS و Android باستخدام JavaScript و React. في هذا الدليل الشامل، سنتعلم كيفية البدء في تطوير تطبيقات الموبايل باستخدام React Native.

---

## لماذا React Native؟

### المميزات الرئيسية

#### 1. كود واحد لمنصتين 📱

```javascript
// نفس الكود يعمل على iOS و Android!
import { View, Text } from "react-native";

function App() {
  return (
    <View>
      <Text>مرحباً بالعالم!</Text>
    </View>
  );
}
```

#### 2. أداء قريب من Native

- استخدام مكونات أصلية حقيقية
- ليس WebView مثل Cordova
- تجربة مستخدم سلسة

#### 3. Hot Reloading ⚡

- رؤية التغييرات فوراً
- لا حاجة لإعادة بناء التطبيق
- تطوير أسرع بكثير

#### 4. مجتمع ضخم 🌍

- آلاف المكتبات الجاهزة
- دعم قوي من Facebook
- موارد تعليمية وفيرة

### المقارنة مع البدائل

| الميزة       | React Native | Flutter    | Native       |
| ------------ | ------------ | ---------- | ------------ |
| اللغة        | JavaScript   | Dart       | Swift/Kotlin |
| الأداء       | ⭐⭐⭐⭐     | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐   |
| سهولة التعلم | ⭐⭐⭐⭐⭐   | ⭐⭐⭐     | ⭐⭐         |
| المجتمع      | ضخم          | متنامي     | كبير         |
| وقت التطوير  | سريع         | سريع       | بطيء         |

---

## البدء مع React Native

### 1. المتطلبات الأساسية

**المعرفة المطلوبة:**

- ✅ JavaScript (ES6+)
- ✅ React Basics
- ✅ HTML & CSS (مفيد)

**الأدوات المطلوبة:**

```bash
# Node.js (v14 أو أحدث)
node --version

# npm أو yarn
npm --version

# Git
git --version
```

### 2. إعداد البيئة

#### Windows/Mac/Linux:

```bash
# تثبيت Expo CLI (الطريقة الأسهل)
npm install -g expo-cli

# إنشاء مشروع جديد
npx create-expo-app MyFirstApp

# الدخول للمشروع
cd MyFirstApp

# تشغيل التطبيق
npm start
```

#### للتطوير Native (اختياري):

**Android:**

- Android Studio
- Android SDK
- Java JDK

**iOS (Mac فقط):**

- Xcode
- CocoaPods

### 3. هيكل المشروع

```
MyFirstApp/
├── App.js              # نقطة البداية
├── app.json            # إعدادات التطبيق
├── package.json        # التبعيات
├── assets/             # الصور والخطوط
│   ├── images/
│   └── fonts/
├── components/         # المكونات القابلة لإعادة الاستخدام
│   ├── Button.js
│   └── Card.js
├── screens/            # الشاشات
│   ├── HomeScreen.js
│   └── ProfileScreen.js
└── navigation/         # التنقل
    └── AppNavigator.js
```

---

## المكونات الأساسية

### 1. View - الحاوية الأساسية

```javascript
import { View, StyleSheet } from "react-native";

function Container() {
  return <View style={styles.container}>{/* المحتوى هنا */}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
```

### 2. Text - عرض النصوص

```javascript
import { Text, StyleSheet } from "react-native";

function MyText() {
  return (
    <>
      <Text style={styles.title}>عنوان رئيسي</Text>
      <Text style={styles.subtitle}>عنوان فرعي</Text>
      <Text style={styles.body}>هذا نص عادي يمكن أن يكون طويلاً جداً...</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: "#888",
    lineHeight: 20,
  },
});
```

### 3. Image - عرض الصور

```javascript
import { Image, StyleSheet } from "react-native";

function MyImage() {
  return (
    <>
      {/* صورة محلية */}
      <Image source={require("./assets/logo.png")} style={styles.logo} />

      {/* صورة من الإنترنت */}
      <Image
        source={{ uri: "https://example.com/image.jpg" }}
        style={styles.networkImage}
      />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  networkImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
```

### 4. Button & TouchableOpacity - الأزرار

```javascript
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
```

### 5. TextInput - إدخال النصوص

```javascript
import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="كلمة المرور"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
});
```

### 6. ScrollView & FlatList - القوائم

```javascript
import { FlatList, Text, View, StyleSheet } from "react-native";

function UserList() {
  const users = [
    { id: "1", name: "أحمد" },
    { id: "2", name: "فاطمة" },
    { id: "3", name: "محمد" },
  ];

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
```

---

## التنقل (Navigation)

### React Navigation - المكتبة الأشهر

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

### مثال كامل للتنقل:

```javascript
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";

const Stack = createNativeStackNavigator();

// الشاشة الرئيسية
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>الشاشة الرئيسية</Text>
      <Button
        title="اذهب للملف الشخصي"
        onPress={() => navigation.navigate("Profile", { userId: 123 })}
      />
    </View>
  );
}

// شاشة الملف الشخصي
function ProfileScreen({ route, navigation }) {
  const { userId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>الملف الشخصي للمستخدم: {userId}</Text>
      <Button title="رجوع" onPress={() => navigation.goBack()} />
    </View>
  );
}

// التطبيق الرئيسي
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "الرئيسية" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "الملف الشخصي" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## إدارة الحالة (State Management)

### 1. useState - للحالات البسيطة

```javascript
import { useState } from "react";
import { View, Text, Button } from "react-native";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>العدد: {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
  );
}
```

### 2. Context API - للحالات المشتركة

```javascript
import { createContext, useContext, useState } from "react";

// إنشاء Context
const AuthContext = createContext();

// Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook للاستخدام
export function useAuth() {
  return useContext(AuthContext);
}

// الاستخدام في المكونات
function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View>
      <Text>مرحباً {user?.name}</Text>
      <Button title="تسجيل الخروج" onPress={logout} />
    </View>
  );
}
```

---

## التعامل مع APIs

```javascript
import { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>خطأ: {error}</Text>;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 16, borderBottomWidth: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
}
```

---

## مشروع عملي: تطبيق قائمة المهام

```javascript
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: task, done: false },
      ]);
      setTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>قائمة المهام</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="أضف مهمة جديدة"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity
              style={styles.taskText}
              onPress={() => toggleTask(item.id)}
            >
              <Text
                style={[styles.taskTextContent, item.done && styles.taskDone]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTask(item.id)}
            >
              <Text style={styles.deleteButtonText}>×</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#007AFF",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  taskItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  taskText: {
    flex: 1,
  },
  taskTextContent: {
    fontSize: 16,
    color: "#333",
  },
  taskDone: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  deleteButton: {
    backgroundColor: "#ff3b30",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
```

---

## النشر والتوزيع

### 1. بناء التطبيق

**Android (APK):**

```bash
# باستخدام Expo
eas build -p android

# أو Native
cd android
./gradlew assembleRelease
```

**iOS (IPA):**

```bash
# باستخدام Expo
eas build -p ios

# أو Native (Mac فقط)
cd ios
xcodebuild archive
```

### 2. النشر على المتاجر

**Google Play Store:**

1. إنشاء حساب مطور ($25 لمرة واحدة)
2. تحضير الأصول (أيقونة، لقطات شاشة)
3. رفع APK/AAB
4. ملء معلومات التطبيق
5. إرسال للمراجعة

**Apple App Store:**

1. حساب Apple Developer ($99/سنة)
2. App Store Connect
3. تحضير الأصول
4. رفع IPA
5. إرسال للمراجعة

---

## نصائح وأفضل الممارسات

### الأداء:

- ✅ استخدم `FlatList` بدلاً من `ScrollView` للقوائم الطويلة
- ✅ استخدم `React.memo` للمكونات الثقيلة
- ✅ تجنب العمليات الثقيلة في render
- ✅ استخدم `useMemo` و `useCallback`

### التصميم:

- ✅ اتبع إرشادات Material Design (Android)
- ✅ اتبع Human Interface Guidelines (iOS)
- ✅ استخدم مكتبات UI جاهزة (React Native Paper, NativeBase)

### الأمان:

- ✅ لا تخزن معلومات حساسة في AsyncStorage
- ✅ استخدم مكتبات آمنة للتخزين (react-native-keychain)
- ✅ فعّل ProGuard (Android) و Code Obfuscation

---

## الخلاصة

React Native هو خيار ممتاز لتطوير تطبيقات الموبايل:

- 📱 كود واحد لمنصتين
- ⚡ تطوير سريع
- 💰 توفير في التكلفة
- 🌍 مجتمع ضخم

**ابدأ اليوم وابنِ تطبيقك الأول!** 🚀

---

**الكلمات المفتاحية:** React Native، تطوير تطبيقات، موبايل، iOS، Android، JavaScript

**موارد مفيدة:**

- [React Native Docs](https://reactnative.dev)
- [Expo Docs](https://docs.expo.dev)
- [React Navigation](https://reactnavigation.org)
