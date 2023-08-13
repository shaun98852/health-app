import {useState} from 'react'
import * as loader from 'react-loader-spinner'

import './index.css'

const requiredObject = [
  {
    medicineName: 'IMPROLYTE INFUSION',
    detailsUrl: 'https://1mg.com/drugs/improlyte-infusion-224871',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1625228213/hx2gxivwmeoxxxsc1hix.png',
  },
  {
    medicineName: 'Prolyte Powder Orange',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-powder-orange-otc664176',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1626978493/tutslpjwirnxj1z5u8hj.jpg',
  },
  {
    medicineName: 'Prolyte Powder Orange',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-powder-orange-otc664176',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1626978493/tutslpjwirnxj1z5u8hj.jpg',
  },
  {
    medicineName: 'Prolyte Powder Orange',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-powder-orange-otc664176',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1626978493/tutslpjwirnxj1z5u8hj.jpg',
  },
  {
    medicineName: 'Prolyte Orange',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-orange-otc601566',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1632883897/tzi3gqqwam1vrfr5wmda.png',
  },
  {
    medicineName: 'Prolyte ORS Powder Refreshing Orange',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-powder-refreshing-orange-otc324897',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1593596466/piadxqb9yimy1d9czrc8.png',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Apple',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-apple-otc573187',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1612349636/rxfg7prnf140peo4wdxl.jpg',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Orange',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-orange-otc573188',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1614084909/lyssph0tahzw21ls0vbq.jpg',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Lemon',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-lemon-otc579511',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1612349726/rckjank5k5yj0i7kzeha.jpg',
  },
  {
    medicineName: 'Prolyte  Apple',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-apple-otc601565',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1592901391/lqlcnnkhpxzoicp17nnr.png',
  },
  {
    medicineName: 'Prolyte Powder Orange',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-powder-orange-otc664176',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1626978493/tutslpjwirnxj1z5u8hj.jpg',
  },
  {
    medicineName: 'Prolyte ORS Powder Refreshing Orange',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-powder-refreshing-orange-otc324897',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1593596466/piadxqb9yimy1d9czrc8.png',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Apple',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-apple-otc573187',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1612349636/rxfg7prnf140peo4wdxl.jpg',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Orange',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-orange-otc573188',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1614084909/lyssph0tahzw21ls0vbq.jpg',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Lemon',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-lemon-otc579511',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1612349726/rckjank5k5yj0i7kzeha.jpg',
  },
  {
    medicineName: 'Prolyte Orange',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-orange-otc601566',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1632883897/tzi3gqqwam1vrfr5wmda.png',
  },
  {
    medicineName: 'Prolyte  Apple',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-apple-otc601565',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1592901391/lqlcnnkhpxzoicp17nnr.png',
  },
  {
    medicineName: 'Prolyte ORS Powder Refreshing Orange',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-powder-refreshing-orange-otc324897',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1593596466/piadxqb9yimy1d9czrc8.png',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Apple',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-apple-otc573187',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1612349636/rxfg7prnf140peo4wdxl.jpg',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Orange',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-orange-otc573188',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1614084909/lyssph0tahzw21ls0vbq.jpg',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Lemon',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-lemon-otc579511',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1612349726/rckjank5k5yj0i7kzeha.jpg',
  },
  {
    medicineName: 'Prolyte Orange',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-orange-otc601566',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1632883897/tzi3gqqwam1vrfr5wmda.png',
  },
  {
    medicineName: 'Prolyte Powder Orange',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-powder-orange-otc664176',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1626978493/tutslpjwirnxj1z5u8hj.jpg',
  },
  {
    medicineName: 'Prolyte  Apple',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-apple-otc601565',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1592901391/lqlcnnkhpxzoicp17nnr.png',
  },
  {
    medicineName: 'Prolyte ORS Powder Refreshing Orange',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-powder-refreshing-orange-otc324897',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1593596466/piadxqb9yimy1d9czrc8.png',
  },
  {
    medicineName: 'Prolyte Powder Orange',
    detailsUrl: 'https://www.1mg.com/otc/prolyte-powder-orange-otc664176',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1626978493/tutslpjwirnxj1z5u8hj.jpg',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Apple',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-apple-otc573187',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1612349636/rxfg7prnf140peo4wdxl.jpg',
  },
  {
    medicineName: 'Prolyte ORS Ready To Drink Orange',
    detailsUrl:
      'https://www.1mg.com/otc/prolyte-ors-ready-to-drink-orange-otc573188',
    medicineImage:
      'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1614084909/lyssph0tahzw21ls0vbq.jpg',
  },
]

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
      <div className="imageBox">
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
