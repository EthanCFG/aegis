import React from 'react'
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
import axios from 'axios'
import { useFetch, Async } from "react-async"

const FormSponsorSearch = (props) => {
	let data = JSON.parse(localStorage.getItem('orglist'));

  return <ComboBox options={data} enableAutocomplete onChange={} />
}

export default FormSponsorSearch;

/*[
    'America',
    'India',
    'Australia',
    'Argentina',
    'Ireland',
    'Indonesia',
    'Iceland',
    'Japan'
  ]*/