const getBaseApi = () => {
  let base_url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : `https://${process.env.VERCEL_URL}/api`
  return base_url
}

export default getBaseApi
