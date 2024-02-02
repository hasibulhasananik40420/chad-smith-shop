/* eslint-disable react/prop-types */

const Container = ({children}) => {
  return (
    <div className="max-w-container mx-auto px-4 md:px-8 lg:px-0 xl:px-0 2xl:px-0">
        {children}
    </div>
  )
}

export default Container