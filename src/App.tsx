import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Post, PostProps } from "./Components/Post";

import styles from "./App.module.css";

import "./global.css";

interface Posts extends PostProps {
  id: number;
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marlisonmourao.png',
      name: 'Marlison Mourão',
      role: 'Developer Mobile'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content:`Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`},
        { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-11 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraaa 👋' },
        { type: 'paragraph', content:`Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare :) 🚀`},
        { type: 'link', content: 'jane.design/doctorcaree' },
    ],
    publishedAt: new Date('2022-10-11 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}