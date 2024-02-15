import { HelmetProvider } from "react-helmet-async"
import MainLayout from "./components/layout/MainLayout"


const App = () => {
  return (
    <div>
       <HelmetProvider>
      <MainLayout/>
      </HelmetProvider>
    </div>
  )
}

export default App