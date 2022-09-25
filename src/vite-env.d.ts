/// <reference types="vite/client" />

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

interface ImportMetaEnv {
  readonly VITE_API_HOST: string
}

interface iReactComponent {
  children: React.ReactChild;
}