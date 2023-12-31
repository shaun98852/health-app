import {useState} from 'react'
import * as loader from 'react-loader-spinner'

import './index.css'

const medicinesToShow = {
  showMedicine: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  noMedicinesFound: 'NOT FOUND',
  initial: 'INITIAL',
}

const Medicine = () => {
  const [requiredMedicine, medicineChange] = useState('')
  const [medicine, changeMedicine] = useState([])
  const [showOrHideMedicine, changeShow] = useState(medicinesToShow.initial)

  const getMedicineDetails = async () => {
    changeShow(medicinesToShow.loading)
    const url = `https://medicine-name-and-details.p.rapidapi.com/?medicineName=${requiredMedicine}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2b70e93060msh21c3e3d511037ecp1d884bjsnf4c7a95dee3a',
        'X-RapidAPI-Host': 'medicine-name-and-details.p.rapidapi.com',
      },
    }

    const details = await fetch(url, options)
    const finalDetails = await details.json()
    if (details.ok === true) {
      if (finalDetails.length > 0) {
        changeShow(medicinesToShow.showMedicine)
        changeMedicine(finalDetails)
      } else {
        changeShow(medicinesToShow.noMedicinesFound)
      }
    } else {
      changeShow(medicinesToShow.failure)
    }
  }

  const noMedicinesFound = () => (
    <div className="noMedicines">
      <h1 className="noMedicinesFound">No Medicines Found</h1>
    </div>
  )

  const Loading = () => (
    <div className="loader-container" data-testid="loader">
      <loader.Bars type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  const Failed = () => (
    <div className="noMedicines">
      <h1 className="noMedicinesFound">Found An Error!</h1>
    </div>
  )

  const FindDetailsHere = () => (
    <div className="noMedicines">
      <h1 className="noMedicinesFound">Find Details Here</h1>
    </div>
  )

  const showMedicineDetails = () => (
    <ul className="listUl">
      {medicine.map(eachItem => (
        <li className="itemList">
          <div>
            <img
              src={eachItem.medicineImage}
              alt="Medicine"
              className="medicineImage"
            />
          </div>
          <div className="detailBox">
            <h1 className="medicineName">{eachItem.medicineName}</h1>
            <a href={eachItem.detailsUrl} target="_blank" rel="noreferrer">
              <button className="getDetails" type="button">
                Get Details
              </button>
            </a>
          </div>
        </li>
      ))}
    </ul>
  )

  const switchFunction = () => {
    switch (showOrHideMedicine) {
      case medicinesToShow.showMedicine:
        return showMedicineDetails()
      case medicinesToShow.failure:
        return Failed()
      case medicinesToShow.loading:
        return Loading()
      case medicinesToShow.initial:
        return FindDetailsHere()
      case medicinesToShow.noMedicinesFound:
        return noMedicinesFound()
      default:
        return null
    }
  }

  return (
    <div className="contentBox">
      <div className="imageBoxes">
        <h1 className="heading">Your Online Pharmacist</h1>
      </div>

      <div className="searchContainer">
        <input
          type="text"
          className="inputBox"
          value={requiredMedicine}
          onChange={e => {
            medicineChange(e.target.value)
          }}
          placeholder="Enter Medicine"
        />
        <button className="buttons" type="button" onClick={getMedicineDetails}>
          Search
        </button>
      </div>

      {switchFunction()}
    </div>
  )
}

export default Medicine
