"use client"

import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Dashboard = () => {
  
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

 
  
  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard