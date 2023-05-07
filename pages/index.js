import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
    return (
        <>
            <Head>
                <title>Next Title Index Hello</title>
                <meta name='keywords' content='next, nextjs, javascript, react' />
                <meta name='description' content='this is youtube tutorial for next' />
                <meta charset='utf-8' />
            </Head>
            <h1>Hello NextJS!</h1>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href='/posts'><a>Posts</a></Link></p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </>
    )
}
