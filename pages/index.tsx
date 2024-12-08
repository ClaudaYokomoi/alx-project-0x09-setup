import type { NextPage } from 'next'
import Head from 'next/head'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="An Airbnb clone listing page" />
      </Head>

      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Property Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Luxury Apartment" description="2 bed, 1 bath, city view" />
          <Card title="Beachfront Villa" description="3 bed, 2 bath, ocean view" />
          <Card title="Cozy Cottage" description="1 bed, 1 bath, countryside view" />
        </div>
        <Button label="See All Listings" />
      </main>
    </>
  )
}

export default Home
