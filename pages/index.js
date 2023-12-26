// pages/index.js
import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Next.js!</h1>
      <Link href="/sobre">
        Acesse a pagina Home
      </Link>
    </div>
  )
}

export default Home;