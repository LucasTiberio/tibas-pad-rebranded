export type iSiteMapTypes = 'HomePage' | 'NotePage'

export interface iReactRoutePage {
  title: string;
}

export interface iSiteMap extends iReactRoutePage {
  path: string;
  Component?: any;
}