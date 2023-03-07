import {
  Outlet,
  useLoaderData,
  useNavigation,
} from 'react-router-dom'

import Navigation from '../../components/Navigation'
import Sidebar from '../../components/Sidebar'

import { getLabsData } from '../Lab/service'

export async function loader({ params }) {
  let labsData = await getLabsData()

  return { labsData }
}

export async function action() {
  console.log('action!!!!!!!!')
  return await getLabsData()
}

const LOADING_STYLE = 'opacity-50'

function Root() {
  const { labsData } = useLoaderData()
  const navigation = useNavigation()

  return (
    <div className="grid grid-cols-[minmax(auto,_300px)_1fr] min-h-screen items-stretch">
      <Sidebar navigationConfig={{ labsData }} />
      <div
        className={
          navigation.state === 'loading'
            ? LOADING_STYLE
            : ''
        }
      >
        <Outlet />
      </div>
    </div>
  )
}

export default Root
