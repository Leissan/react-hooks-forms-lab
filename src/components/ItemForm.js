import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({setItems, items}) {
const [name, setName] = useState('')
const [category, setCategory] = useState('Produce')

function handleName (e) {
  setName(e.target.value)
}
function handleCategory (e) {
  setCategory(e.target.value)
}

function handleSubmit (e) {
  e.preventDefault()
  setItems([{name: name, category: category, id: uuid()}, ...items ]) //name, category - could just use it once

}

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleName} value={name} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategory} value={category} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
