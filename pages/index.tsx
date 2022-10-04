import type { NextPage } from 'next'
import TopComponent from '../components/topComponent/TopComponentSection'
import MiddleComponent from '../components/middleComponent/MiddleComponentSection'


const Home: NextPage = () => {
  return (
    <>
      <TopComponent />
      <MiddleComponent />
    </>
  )
}

export default Home
