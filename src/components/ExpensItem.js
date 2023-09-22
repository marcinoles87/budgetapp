import React from 'react'

function ExpensItem({id , name , cost}) {
  return (
    <tr key={id}>
    <th scope='row' >
        <td>{name}</td>
        <td>{cost}</td>

        </th>
        </tr>
  )
}

export default ExpensItem