import Router from 'next/dist/next-server/lib/router/router';
import Link from 'next/link'
import { useEffect } from 'react';
import {useRouter} from 'next/router';

const notfound = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])
    return ( 
        <div className="not-found">
            <h1>ooops...</h1>
            <h2>the page is not found..</h2>
            <p> go back to <Link href="/"><a>homepage</a></Link></p></div>
     );
}
 
export default notfound;