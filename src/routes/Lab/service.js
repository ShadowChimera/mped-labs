import { labsData } from './data'

export async function getLabsData(labNumber = null) {
  if (labNumber === null) {
    return labsData
  }

  return getLabData(labNumber)
}

function getLabData(labNumber) {
  labNumber = Number(labNumber)

  let labTopic, lab

  for (const topic of labsData.topics) {
    lab = topic.labs.find((lab) => lab.number === labNumber)

    if (lab) {
      labTopic = topic
      break
    }
  }

  return { topic: labTopic, ...lab }
}
