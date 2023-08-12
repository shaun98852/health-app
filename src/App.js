import {Route, Switch, BrowserRouter} from 'react-router-dom'

import {useState} from 'react'
import {GiMedicines} from 'react-icons/gi'
import {BiSolidUserCircle} from 'react-icons/bi'
import {AiFillMedicineBox} from 'react-icons/ai'
import {MdHealthAndSafety} from 'react-icons/md'
import {FaUserDoctor} from 'react-icons/fa6'
import {FaDisease, FaDiagnoses} from 'react-icons/fa'

import BmiCalculator from './components/BmiCalculator'
import Medicine from './components/Medicine'
// import Header from './components/Header'

import './index.css'

import {GlobalStyle} from './styledComponents'

const App = () => (
  <>
    <GlobalStyle />
    {/* <BmiCalculator /> */}
    {/* <Header /> */}
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
            <li className="listItem">
              <AiFillMedicineBox className="icon" />
              <p className="tabName">Medicine</p>
            </li>
            <li className="listItem">
              <MdHealthAndSafety className="icon" />
              <p className="tabName">HealthBox</p>
            </li>
            <li className="listItem">
              <FaUserDoctor className="icon" />
              <p className="tabName">Doctor</p>
            </li>
            <li className="listItem">
              <FaDisease className="icon" />
              <p className="tabName">Disease Prediction</p>
            </li>
            <li className="listItem">
              <FaDiagnoses className="icon" />
              <p className="tabName">Diagnosis</p>
            </li>
          </ul>
        </div>
        <div className="RightBox">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Medicine} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  </>
)

export default App
