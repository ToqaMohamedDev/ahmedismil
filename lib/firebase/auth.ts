import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./config";

export interface UserData {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<UserData | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // التحقق من وجود بيانات المستخدم في Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      // إنشاء بيانات جديدة للمستخدم
      const userData: UserData = {
        name: user.displayName || "",
        email: user.email || "",
        phone: "",
        dateOfBirth: "",
      };
      await setDoc(userDocRef, userData);
      return userData;
    } else {
      return userDoc.data() as UserData;
    }
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const signInWithEmail = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Error signing in with email:", error);
    throw error;
  }
};

export const signUpWithEmail = async (
  email: string,
  password: string,
  userData: UserData
): Promise<User> => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    // حفظ بيانات المستخدم في Firestore
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, userData);

    return user;
  } catch (error) {
    console.error("Error signing up with email:", error);
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export const getUserData = async (uid: string): Promise<UserData | null> => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      return userDoc.data() as UserData;
    }
    return null;
  } catch (error) {
    console.error("Error getting user data:", error);
    return null;
  }
};

