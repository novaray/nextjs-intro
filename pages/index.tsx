import Seo from '../components/Seo';

interface PopularMovie {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Home({results}: { results: PopularMovie[] }) {
  return (
    <div className="container">
      <Seo title="Home"/>
      {results?.map(movie => (
        <div key={movie.id} className="movie">
          <img alt={`${movie.original_title} image`} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }

        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }

        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }

        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const {results}: { results: PopularMovie[] } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  // props로써 page 컴포넌트에 넘겨주게 된다.
  return {
    props: {
      results
    }
  };
}
