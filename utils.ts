import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { auth} from "./firebase";
import { UserDataType } from "./types";


const updateUserInfo = async (user: User, firstName: string | undefined) => {
    try {
      updateProfile(user,{
          displayName: firstName
      } )
    } catch (err) {
      throw err;
    }
  };
export const createAccount = async (user: UserDataType) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    await updateUserInfo(res.user, user.firstName)
    return res
  } catch (err) {
    throw err;
  }
};
export const logIntoAccount = async(user: UserDataType) => {
    try {
        const res = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        return res
      } catch (err) {
        throw err;
      }
}

export const logOutOfApp = async() => {
    await signOut(auth)
}
