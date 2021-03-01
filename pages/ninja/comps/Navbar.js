import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <nav>
        <div className="logo">
            <Image src="/bike.jpg" width={500} height={400}/>
            <h1> dream bike</h1>
        </div>
        <Link href="/"><a>home</a></Link>
        <Link href="/about"><a> about </a></Link>

        <Link href="/ninja"><a> ninja </a></Link>
        </nav>
      );
}
 
export default Navbar;
