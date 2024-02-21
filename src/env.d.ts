/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_ROLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
