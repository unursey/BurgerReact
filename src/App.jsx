import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Navigation } from "./components/Navigation/Navigation"
import { Catalog } from "./components/Catalog/Catalog"
import { ModalDelivery } from "./components/ModalDelivery/ModalDelivery"
import { Provider } from "react-redux"
import { store } from "./store/index.js"

export const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
      <ModalDelivery />
    </Provider>
  )
}
