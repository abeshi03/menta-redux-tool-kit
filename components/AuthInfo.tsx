import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "../firebase";
import {updateUser} from "../features/userSlice";

export const AuthInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(updateUser({
          uid: user.uid,
          email: user.email!
        }))
      } else {
        dispatch(updateUser({
          uid: "",
          email: ""
        }))
      }
    })
  })

  return null
}
