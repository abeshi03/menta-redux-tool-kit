import {useState} from "react";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../../firebase";
import {useRouter} from "next/router";
import {Router} from "../../router/router";

const SignUpPage = () => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const router = useRouter()

  const onClickRegister = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user)
        router.push(Router.top.path);
      })
      .catch((error) => {
        console.error(error.code, error.message);
      })
  }

  return (
    <div>
      <h1>会員登録のページです</h1>
      <p>メールアドレス</p>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

      <p>パスワード</p>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <div>
        <button onClick={onClickRegister}>登録</button>
      </div>
    </div>
  )
}

export default SignUpPage
