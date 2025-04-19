import React from 'react'
import Welcome from '../landing/Welcome'
import Carrier from '../landing/Carrier'
import Courses from '../landing/Courses'
import OurWork from '../landing/OurWork'
import OurService from '../landing/OurService'
import ExcellenceJourney from '../landing/ExcellenceJourney'
import ExcellenceValuesSection from '../landing/ExcellenceValuesSection'
import Instructors from '../landing/Instructors'
import Feedback from '../landing/FeedBack'
import FAQSection from '../landing/FaqSection'
import Contact from '../landing/Contact'
// import Test from '../landing/Test'



export default function Home() {
  return (
    <div className="">
     <Welcome/>
     <Carrier/>
      <Courses/>                     
     <OurWork/>
     <OurService/>
     <ExcellenceJourney/>
     <ExcellenceValuesSection/>
     <Instructors/>                   
     <Feedback/>                     
     <FAQSection/>
     <Contact/>
    </div>
  )
}
