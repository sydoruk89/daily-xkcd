import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props) {
  return (
    <>
      <div className='indent'>
        <Header/>
        <h1>XKCD</h1>
        <h2>{props.comic.title}</h2>
        <img src={props.comic.img} alt={props.comic.alt}></img>
        <Footer comicNum={props.comic.num}/>
      </div>
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch(`http://xkcd.com/info.0.json`);
  const data = await res.json();
  return { 
    props: { 
      comic: data 
    } 
  }
}