import { lazy } from 'react';
import { iSiteMap, iSiteMapTypes } from "./interface"

const siteMap: Record<iSiteMapTypes, iSiteMap> = {
  HomePage: {
    title: 'Home',
    path: '/',
    Component: lazy(() => import('../pages/Home'))
  },
  NotePage: {
    title: 'Notepad',
    path: '/:name',
    Component: lazy(() => import('../pages/Notepad'))
  },
}

export default siteMap