import {useState} from "react";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../../firebase";
import {useRouter} from "next/router";
import {Router} from "../../router/router";

const SignInPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const onClickSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      await router.push(Router.top.path)

      alert("ログインしました")
    } catch (error: unknown) {
      console.log(error)
      alert("ログインに失敗しました")
    }
  }

  return (
    <div>
      <h1>ログインページ</h1>
      <p>メールアドレス</p>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

      <p>パスワード</p>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <div>
        <button onClick={onClickSignIn}>登録</button>
      </div>
    </div>
  )
}

export default SignInPage
