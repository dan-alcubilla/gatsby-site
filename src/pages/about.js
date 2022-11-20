// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Acerca de mi">
        <p>¡Hola! Soy el creador de este sitio, el cual construí con Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Acerca de mi" />

// Step 3: Export your component
export default AboutPage