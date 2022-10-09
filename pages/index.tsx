import type { NextPage } from 'next'
import Link from "next/link";
import { Router } from "../router/router";
import {useDispatch, useSelector} from "react-redux";
import {updateUser, User} from "../features/userSlice";
import {RootState} from "../store";
import {signOut} from "@firebase/auth";
import {auth} from "../firebase";

const Home: NextPage = () => {

  const user: User = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch()

  const logout = async () => {
    try {
      await signOut(auth)

      dispatch(updateUser({
        uid: "",
        email: ""
      }))

      alert("ログアウトしました")

    } catch (error: unknown) {
      console.log(error)
    }
  }

  const isLogin = user.uid !== ""

  return (
    <div>
      <h1>トップページです</h1>
      <p>ログインしていますか？？ { isLogin ? "している" : "していない" }</p>
      {isLogin && (
        <>
          <p>user_id: {user.uid}</p>
          <p>user_name: {user.email}</p>
        </>
      )}
      <div>
        {!isLogin && (
          <Link href={Router.signUp.path}>
            <a>
              {Router.signUp.pageName}
            </a>
          </Link>
        )}
      </div>

      <div>
        {!isLogin && (
          <Link href={Router.signIn.path}>
            <a>
              {Router.signIn.pageName}
            </a>
          </Link>
        )}
      </div>

      <button onClick={logout}>ログアウト</button>

    </div>
  )
}

export default Home
