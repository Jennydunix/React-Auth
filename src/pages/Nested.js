import Navigation from "../components/Navigation"

const Nested = () => {
  throw new Error ("Oops! There's an error")
  return (
    <>
      <Navigation />
      <div>
        <h2> Nested Page</h2>
      </div>
    </>
  )
}

export default Nested