import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import Navbar from './ninja/comps/Navbar'
//import Footer from './ninja/comps/Footer'
import Link from 'next/link'
export default function Home() {
  return (
    
    <div>
      <h1>home page</h1>
      <p> revanth we or on the home page so we going to ge the project well</p> 
      <Link href="/ninja"><a> ninja component seperate folder</a></Link>
    </div>
  )
}
