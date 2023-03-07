import { Outlet, useLoaderData } from 'react-router-dom'

import Navigation from '../../components/Navigation'

import { getLabsData } from '../Lab/service'

export async function loader({ params }) {
  let labsData = await getLabsData()

  return {
    labsData,
    activeLabNumber: Number(params.labNumber),
  }
}

export async function action() {
  console.log('action!!!!!!!!')
  return await getLabsData()
}

function Root() {
  const { labsData, activeLabNumber } = useLoaderData()

  return (
    <div className="grid grid-cols-[minmax(auto,_300px)_1fr] min-h-screen items-stretch">
      <Navigation
        labsData={labsData}
        activeLabNumber={activeLabNumber}
      />
      <Outlet />
    </div>
  )
}

export default Root
