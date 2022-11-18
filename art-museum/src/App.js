import harvardArt from './data/harvardArt'
import GalleryNavigation from './components/GalleryNavigation/index'
import GalleryView from './components/GalleryView/index'
import { Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records}/>
      <Switch>
      <Route path={'/galleries/:galleryId'}>
        <GalleryView galleries={harvardArt.records} />
      </Route>
      <Route path="/">
        <div><h1>HOME</h1></div>
      </Route>

      </Switch>
    </div>
  );
}

<GalleryView/>
export default App;
