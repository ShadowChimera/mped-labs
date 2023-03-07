import NavigationSection from './components/NavigationSection'
import LabsList from './components/LabsList'

function Navigation({ labsData }) {
  return (
    <nav className="border border-solid border-gray-200 px-4 py-2 min-w-[320px]">
      {labsData.topics.map((topic, index) => (
        <NavigationSection
          key={`${index}.${topic.name}`}
          title={topic.name}
        >
          <LabsList labs={topic.labs} />
        </NavigationSection>
      ))}
    </nav>
  )
}

export default Navigation
