import styles from '../styles/Home.module.css'
import Image from "next/image";
import {BaseLayout} from "../layouts/base";

export type HomeProps = {
    posts: any[]
}

export const Home: React.FC<HomeProps> = ({posts, currentUser}) => {
    return (
        <BaseLayout>
            <div className={styles.container}>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h1>

                    <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.tsx</code>
                    </p>

                    <p>{JSON.stringify(currentUser)}</p>

                    <div className={styles.grid}>
                        {posts?.map(post => (
                            <a href="src/pages/index#" key={post._id} className={styles.card}>
                                <h2>{post.name} &rarr;</h2>
                                <p>{post.id} : {post._id}</p>
                            </a>
                        ))}
                    </div>
                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
                    </a>
                </footer>
            </div>
        </BaseLayout>
    )
}