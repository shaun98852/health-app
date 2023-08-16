import {useState} from 'react'
import * as loader from 'react-loader-spinner'

import './index.css'

const foodsToShow = {
  showFood: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  noFoodsFound: 'NOT FOUND',
  initial: 'INITIAL',
}

const ImpDetails = () => {
  const [requiredFood, FoodChange] = useState('')
  const [foodList, changeFoodList] = useState([])
  const [showHideFood, changeShow] = useState(foodsToShow.initial)

  const getMedicineDetails = async () => {
    changeShow(foodsToShow.loading)

    // const query = 'orange'

    const options = {
      method: 'GET',

      headers: {
        'X-Api-Key': '4WXbQTmDCTUdLBgb57B0pg==c6RZIJzuPdBegkT6',
      },
      contentType: 'application/json',
    }

    const url = `https://api.api-ninjas.com/v1/nutrition?query=${requiredFood}`

    const details = await fetch(url, options)
    const finalDetails = await details.json()

    if (details.ok === true) {
      if (finalDetails.length > 0) {
        const nutrition = finalDetails.map(eachItem => ({
          Name: eachItem.name,
          Calories: eachItem.calories,
          Carbohydrates: eachItem.carbohydrates_total_g,
          'Cholesterol(mg)': eachItem.cholesterol_mg,
          'FatSaturate(g)': eachItem.fat_saturated_g,
          'FatTotal(g)': eachItem.fat_total_g,
          'Fiber(g)': eachItem.fiber_g,

          'Potassium(mg)': eachItem.potassium_mg,
          'Protein(g)': eachItem.protein_g,
          'ServingSize(g)': eachItem.serving_size_g,
          'Sodium(mg)': eachItem.sodium_mg,
          'Sugar(g)': eachItem.sugar_g,
        }))
        const nutritionSet = nutrition.map(eachItem =>
          Object.keys(eachItem).map(key => [key, eachItem[key]]),
        )

        changeShow(foodsToShow.showFood)

        changeFoodList(nutritionSet)
      } else {
        changeShow(foodsToShow.noFoodsFound)
      }
    } else {
      changeShow(foodsToShow.failure)
    }
  }

  const noFoundFood = () => (
    <div className="noMedicines">
      <h1 className="noMedicinesFound">No Food Found</h1>
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

  const showFoodDetails = () => (
    <ul className="listUl">
      {foodList.map(eachItem => (
        <li className="itemList">
          <ul className="detailBox">
            {eachItem.map(everyItem => (
              <li className="Items">
                <p className="name">{`${everyItem[0]} : `}</p>
                <p className="value">{everyItem[1]}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )

  const switchFunction = () => {
    switch (showHideFood) {
      case foodsToShow.showFood:
        return showFoodDetails()
      case foodsToShow.failure:
        return Failed()
      case foodsToShow.loading:
        return Loading()
      case foodsToShow.initial:
        return FindDetailsHere()
      case foodsToShow.noFoodsFound:
        return noFoundFood()
      default:
        return null
    }
  }

  return (
    <div className="contentBox">
      <div className="imageBox">
        <h1 className="heading">Your Online Nutritionist</h1>
      </div>

      <div className="searchContainer">
        <input
          type="text"
          className="inputBox"
          value={requiredFood}
          onChange={e => {
            FoodChange(e.target.value)
          }}
          placeholder="Enter Food"
        />
        <button className="buttons" type="button" onClick={getMedicineDetails}>
          Search
        </button>
      </div>

      {switchFunction()}
    </div>
  )
}

export default ImpDetails
