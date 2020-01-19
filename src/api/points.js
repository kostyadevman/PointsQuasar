import instance from './instance'

function getPoints () {
  return instance.get('/api/v1/points.json')
}
export { getPoints }
