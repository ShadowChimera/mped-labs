import NavigationSection from './components/NavigationSection'
import LabsList from './components/LabsList'

function Navigation({ labsData }) {
  return (
    <nav className=" overflow-y-auto">
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
