function Section({ title, children }) {
  return (
    <section className="border-b last:border-b-0 border-gray-200 py-4">
      <h2 className="mb-2 px-4 font-medium text-sm text-gray-500">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
