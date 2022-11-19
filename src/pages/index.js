// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from './layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Inicio">
      <p>Estoy haciendo este sitio siguiendo el tutorial de Gatsby.</p>
      <StaticImage
        alt='Clifford, un pitbull marrón rojizo, posa en un sofá y mira estoicamente a la cámara.'
        src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Inicio</title>

// Step 3: Export your component
export default IndexPage