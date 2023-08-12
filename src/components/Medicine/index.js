import {useState} from 'react'

import './index.css'

const Medicine = () => {
  const [requiredMedicine, medicineChange] = useState('')
  const [medicine, changeMedicine] = useState([])
  const [showOrHideMedicine, changeShow] = useState(false)

  const getMedicineDetails = async () => {
    const url = `https://api.fda.gov/drug/label.json?search=${requiredMedicine}&limit=1`
    // const params = {
    //   search: `f generic_name:${requiredMedicine}`,
    //   limit: 10,
    // }

    const details = await fetch(url)
    const finalDetails = await details.json()

    if (details.ok === true) {
      //   const {results} = finalDetails
      //   console.log(results)
      const newObject = finalDetails.results[0]

      if (newObject.length !== 0) {
        changeShow(true)
        changeMedicine([])
        changeMedicine(Object.entries(newObject))
      }
    }
  }

  const showMedicineDetails = () => {
    if (medicine.length !== 0) {
      return medicine.map(eachItem => {
        if (typeof eachItem[1] === 'object') {
          return (
            <li className="listItem">
              {/* <span className="spanText">{eachItem[0]}</span>:{eachItem[1][0]} */}
              <p className="spanText">{eachItem[0]}:</p>
              <p>{eachItem[1][0]}</p>
            </li>
          )
        }
        if (typeof (eachItem[1] === 'string')) {
          return (
            <li className="listItem">
              {/* <span className="spanText">{eachItem[0]}</span>:{eachItem[1]} */}
              <p className="spanText">{eachItem[0]}:</p>
              <p>{eachItem[1]}</p>
            </li>
          )
        }
        return null
      })
    }

    return null
  }

  return (
    <div className="contentBox">
      {/* <img
        src="https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_640.jpg"
        className="topImage"
      /> */}

      <div className="imageBox">
        <h1 className="heading">Your Online Dermatologist</h1>
      </div>

      <div className="searchContainer">
        <input
          type="text"
          className="inputBox"
          value={requiredMedicine}
          onChange={e => {
            medicineChange(e.target.value)
          }}
        />
        <button className="buttons" onClick={getMedicineDetails}>
          Search
        </button>
      </div>

      {showOrHideMedicine && showMedicineDetails()}
    </div>
  )
}

export default Medicine
