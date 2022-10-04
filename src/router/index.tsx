import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { iSiteMapTypes } from './interface';
import siteMap from './siteMap';

const siteMapKeys = Object.keys(siteMap)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {siteMapKeys.map(siteMapKey => {
          const route = siteMap[siteMapKey as iSiteMapTypes];
          const { path, Component, ...rest } = route;

          if (!Component) return null;

          return <Route
            key={siteMapKey}
            path={path}
            element={<Component {...rest} />}
          />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;