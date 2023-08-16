import {Route, Switch, BrowserRouter, Link, withRouter} from 'react-router-dom'

import {useState} from 'react'
import {GiMedicines} from 'react-icons/gi'
import {BiSolidUserCircle} from 'react-icons/bi'
import {AiFillMedicineBox} from 'react-icons/ai'

import {FaUserDoctor} from 'react-icons/fa6'
// import {FaDisease, FaDiagnoses} from 'react-icons/fa'

import BmiCalculator from './components/BmiCalculator'
import Medicine from './components/Medicine'
import ImpDetails from './components/importantDetails'

import './index.css'

import {GlobalStyle} from './styledComponents'

const tabs = {
  medicine: 'MEDICINE',
  nutrition: 'NUTRITION',

  bmi: 'BMI',
}

const App = () => {
  const paths = window.location.pathname

  const getDetails = () => {
    if (paths === '/') {
      return tabs.medicine
    }
    if (paths === '/bmi') {
      return tabs.bmi
    }
    if (paths === '/nutrition') {
      return tabs.nutrition
    }
    return ''
  }

  const [tabSelected, changeTab] = useState(getDetails())

  const medicineTab = tabSelected === tabs.medicine ? 'listItem1' : 'listItem'
  const nutritionTab = tabSelected === tabs.nutrition ? 'listItem1' : 'listItem'
  const bmiTab = tabSelected === tabs.bmi ? 'bmiDetails1' : 'bmiDetails'

  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <div className="headerBackground">
          <div className="topHeader">
            <div className="leftMedicineSection">
              <GiMedicines className="image1" />

              <h1 className="siteName">Health Is Wealth</h1>
            </div>

            <BiSolidUserCircle className="image2" />
          </div>
          <div className="bottomBox">
            <div className="tabsHeader">
              <ul className="unList">
                <Link to="/" style={{'text-decoration': 'none'}}>
                  <li
                    className={medicineTab}
                    onClick={() => {
                      changeTab(tabs.medicine)
                    }}
                  >
                    <AiFillMedicineBox className="icon" />
                    <p className="tabName">Medicine</p>
                  </li>
                </Link>

                <Link to="/nutrition" style={{'text-decoration': 'none'}}>
                  <li
                    className={nutritionTab}
                    onClick={() => {
                      changeTab(tabs.nutrition)
                    }}
                  >
                    <FaUserDoctor className="icon" />
                    <p className="tabName">Nutrition</p>
                  </li>
                </Link>
              </ul>

              <div className="bmiBox">
                <Link to="/bmi">
                  <button
                    className={bmiTab}
                    type="button"
                    onClick={() => {
                      changeTab(tabs.bmi)
                    }}
                  >
                    BMI Calculator
                  </button>
                </Link>
              </div>
            </div>
            <div className="RightBox">
              <Switch>
                <Route exact path="/" component={withRouter(Medicine)} />
                <Route
                  exact
                  path="/bmi"
                  component={withRouter(BmiCalculator)}
                />
                <Route
                  exact
                  path="/nutrition"
                  component={withRouter(ImpDetails)}
                />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
