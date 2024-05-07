export default function Banner({children}) {
    return (
        <div className="banner">
          <button className='close'>x</button>
          {children}
        </div>
    )
}