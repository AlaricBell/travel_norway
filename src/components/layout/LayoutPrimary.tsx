import Navbar from '../base/Navbar'
import Footer from '../base/Footer'

const Layout: React.FC = ({children}) => {
    return (
        <div className="layout">
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;