import Head from 'next/head'
import Link from 'next/link'

export function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name='keywords' content='next, nextjs, javascript, react' />
        <meta name='description' content='this is youtube tutorial for next' />
        <meta charSet='utf-8' />
      </Head>
      <nav>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/posts'}><a>Posts</a></Link>
      </nav >
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 60px;
          top: 0;
          right: 0;
          left: 0;
          background: darkblue;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}
