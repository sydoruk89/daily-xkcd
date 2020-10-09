import Header from '../../components/Header'

export default function  ComicDetail(props){
    return(
        <>
          <div className='indent'>
            <Header/>
                <h1>{props.comic.title}</h1>
                <img src={props.comic.img} alt={props.comic.alt}></img>
          </div>
        </>
    )
}

export async function getServerSideProps(context){
    const num = context.query.id
    const res = await fetch(`http://xkcd.com/${num}/info.0.json`);
    const comic = await res.json();
    return { 
      props: { 
        comic
      } 
    }
  }