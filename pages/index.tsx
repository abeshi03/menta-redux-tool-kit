import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { Router } from "../router/router";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href={Router.signUp.path}>
        <a>
          {Router.signUp.pageName}
        </a>
      </Link>
    </div>
  )
}

export default Home
