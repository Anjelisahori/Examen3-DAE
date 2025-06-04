import { useState, useEffect } from 'react'
import itemsData from '../data/items'
import ItemCard from './ItemCard'
import useDebounce from '../hooks/useDebounce'

function ItemList() {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search, 300)
  const [filtered, setFiltered] = useState(itemsData)

  useEffect(() => {
    setFiltered(
      itemsData.filter(item =>
        item.title.toLowerCase().includes(debounced.toLowerCase())
      )
    )
  }, [debounced])

  return (
    <>
      <input
        type="text"
        placeholder="Buscar función..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="item-list">
        {filtered.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default ItemList
