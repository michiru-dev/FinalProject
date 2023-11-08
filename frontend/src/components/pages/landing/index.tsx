import { Search } from '../Search'
import { LinkButton } from '../../common/UI/LinkButton'
import Layout from '../../common/UI/Layout'
import LoadingSpinner from '../../common/UI/LoadingSpinner'
import { useQueryEmployeeData } from '../../../apiHooks/useQueryEmployeeData'

function LandingPage() {
  const { isLoading } = useQueryEmployeeData()
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Layout>
        <div className="landingPageWrapper">
          <div className="menu">
            <LinkButton link={'employeeList'} text={'List'} />
            <LinkButton link={'register'} text={'Register'} />
            <LinkButton link={'setting'} text={'Setting'} />
          </div>
          <div className="searchWrapper">
            <Search />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default LandingPage
