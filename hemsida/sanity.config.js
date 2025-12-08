import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'hemsida',

  // projectId: import.meta.env.SANITY_PROJECT_ID,
  // dataset: import.meta.env.SANITY_DATASET,
  projectId: '2wf26oig',
  dataset: 'production',

  deployment: {
    appId: 'zc58v5vlqvidr8731jzmmzk8',
  },

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
