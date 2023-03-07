import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div
      id="error-page"
      className="min-h-screen grid grid-cols-[max-content] content-start justify-center p-4"
    >
      <h1 className="text-5xl mb-2">Oops!</h1>
      <p className="text-3xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-xl mt-8 font-medium text-rose-700">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
