/// <reference types="vite/client" />

//avoid the any problem when trying to use the env variables

interface ImportMetaEnv {
  VITE_NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
