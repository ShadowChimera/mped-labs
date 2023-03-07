import NavigationLink from './NavigationLink'

function LabsList({ labs }) {
  const labsList = labs
    .map((lab) => {
      if (lab.isDone) {
        return (
          <li
            key={`${lab.number}`}
            className="mb-1 last:mb-0"
          >
            <NavigationLink to={`labs/${lab.number}`}>
              {`Задача ${lab.number}`}
            </NavigationLink>
          </li>
        )
      }
    })
    .filter((lab) => typeof lab !== 'undefined')

  return (
    <ul>
      {labsList.length ? (
        labsList
      ) : (
        <p className=" text-gray-500 opacity-60 px-4 py-2">
          No labs yet
        </p>
      )}
    </ul>
  )
}

export default LabsList
