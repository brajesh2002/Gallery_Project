import './App.css'
import Header from './components/Header'
import ImageContainer from './components/ImageContainer'
import ImagesOnSearch from './components/ImagesOnSearch'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FetchImages from './contextApi/FetchImages'
import MyGithub from './components/MyGithub'

const router = createBrowserRouter([
  {
    path: "/",
    element: [
      <Navbar />,
      <SearchBar />,
      <Header />,
      <ImageContainer searchQuery='mountain' />
    ]
  },
  {
    path: "/beaches",
    element: [
      <Navbar />,
      <SearchBar />,
      <Header />,
      <ImageContainer searchQuery='beach' />
    ]
  },
  {
    path: "/birds",
    element:
      [
        <Navbar />,
        <SearchBar />,
        <Header />,
        <ImageContainer searchQuery='bird' />
      ]
  },
  {
    path: "/food",
    element: [
      <Navbar />,
      <SearchBar />,
      <Header />,
      <ImageContainer searchQuery='food' />
    ]
  },
  {
    path: "/search/:searchInput",
    element: [
      <Navbar />,
      <SearchBar />,
      <Header />,
      <ImagesOnSearch/>
    ]
  }
])

function App() {

  return (
    <FetchImages>
      <div className='mainContainer'>
        <RouterProvider router={router} />
      </div>
    </FetchImages>
  )
}

export default App
