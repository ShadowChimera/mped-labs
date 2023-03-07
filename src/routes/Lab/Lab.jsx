import { useLoaderData } from 'react-router-dom'
import { getLabsData } from './service'

export async function loader({ params }) {
  const labData = await getLabsData(params.labNumber)

  return labData
}

function Lab() {
  const labData = useLoaderData()

  return (
    <div className="max-w-7xl p-4 mx-auto">
      <h1>
        Задача {labData.number}. {labData.title}
      </h1>
    </div>
  )
}

export default Lab
