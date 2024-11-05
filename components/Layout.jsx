import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <div className="bg-purple-200">
            <Navbar />
            <div className="md:w-[900px] m-auto p-5">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;