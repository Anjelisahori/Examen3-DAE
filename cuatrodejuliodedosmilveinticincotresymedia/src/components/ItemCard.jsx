import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

function ItemCard({ item }) {
  const [fav, setFav] = useState(false)

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('fav-items')) || []
    setFav(favs.some(f => f.id === item.id))
  }, [item.id])

  const toggleFav = () => {
    let favs = JSON.parse(localStorage.getItem('fav-items')) || []
    if (fav) {
      favs = favs.filter(f => f.id !== item.id)
      toast.info('Eliminado de favoritos')
    } else {
      favs.push(item)
      toast.success('Agregado a favoritos')
    }
    localStorage.setItem('fav-items', JSON.stringify(favs))
    setFav(!fav)
  }

  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span onClick={toggleFav}>{fav ? '★' : '☆'}</span>
    </div>
  )
}

export default ItemCard
