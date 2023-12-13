import Header from '../components/Header'
import Filters from '../components/Filters'
import Table from '../components/Table'

const Workspace = (): React.JSX.Element => {
  return (
    <>
      <Header />

      <Filters />

      <Table />
    </>
  )
}

export default Workspace
