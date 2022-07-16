import Seo from '../../components/Seo';

export default function Detail({params}: {params: [string, string]}) {
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading"}</h4>
    </div>
  )
}

export function getServerSideProps({params: {params}}: {params: {params: [string, string]}}) {
  return {
    props: {
      params
    }
  }
}