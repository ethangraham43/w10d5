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
        <Route exact path="/">
          <div>
            <h2>Harvard Art Museum</h2>
            <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
          </div>
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

<GalleryView/>
export default App;
