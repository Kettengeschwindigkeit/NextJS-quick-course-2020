import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

export default function Posts() {
    return (
        <MainLayout>
            <Head>
                <title>Posts Page | Next Course</title>
            </Head>
            <h1>Posts Page</h1>
        </MainLayout>
    )
}
