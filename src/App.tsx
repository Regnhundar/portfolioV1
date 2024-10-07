import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
function App() {
    return (
        <>
            <Header />
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
