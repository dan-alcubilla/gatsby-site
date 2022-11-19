// Step 1: Import React
import * as React from 'react'
import Layout from './layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Acerca de mi">
        <p>¡Hola! Soy el creador de este sitio, el cual construí con Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>Acerca de mi</title>

// Step 3: Export your component
export default AboutPage