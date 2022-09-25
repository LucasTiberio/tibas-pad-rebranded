import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { iSiteMapTypes } from './interface';
import siteMap from './siteMap';

const siteMapKeys = Object.keys(siteMap)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {siteMapKeys.map(siteMapName => {
          const route = siteMap[siteMapName as iSiteMapTypes];
          const { path, Component, ...rest } = route;

          if (!Component) return null;

          return <Route
            key={siteMapName}
            path={path}
            element={<Component {...rest} />}
          />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;