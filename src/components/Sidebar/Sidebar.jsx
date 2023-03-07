import Navigation from '../Navigation'
import Attribution from '../Attribution'

function Sidebar({ navigationConfig }) {
  return (
    <div className="border border-solid border-gray-200 px-4 py-2 min-w-[320px] max-h-screen flex flex-col justify-between">
      <Navigation {...navigationConfig} />
      <Attribution />
    </div>
  )
}

export default Sidebar
