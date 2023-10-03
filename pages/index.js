import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  const cardList = new Array(200).fill(0);
  console.log('test');

  return (
    <div>
      <Head>
        <title>200 Free Card Design Image</title>
        <meta name="description" content="200 Free Card Design Image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1 className='text-center my-8 text-3xl font-semibold text-slate-600'>200 Free Card Design Image</h1>
          <div className='px-8 mb-8 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-8'>
            {
              cardList.map((item, key) => (
                <div className='card' key={key}>
                  <img src={`/min/${key}.webp`} alt={`${key}.webp`} />
                  <a href={`/cards/${key}.png`} target="_blank" rel="noreferrer" className='arrow'></a>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </div>
  )
}
