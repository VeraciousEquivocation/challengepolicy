import React, { useEffect, useState } from "react";
import axios from 'axios';
// import cloneDeep from 'lodash.clonedeep'

import {PolicySchematic} from '../Interfaces/Schematic'

interface AppContextInterface {
  policyList: PolicySchematic[];
}

const tempData = {
  "policies": [
    {
      "id": "TRAVEL-COVER-INS",
      "type": "travel",
      "title": "London to Paris",
      "description": "Baggage Cover; Medical Cover; Cancellation Cover",
      "status": "active",
      "premium": 106.65,
      "premium_formatted": "AUD $106.65",
      "payment_date": "2019-10-10T13:29:38.814849Z",
      "coverage_start_date": "2019-11-17",
      "coverage_end_date": "2019-11-19",
      "renewal": null,
      "partner": {
        "id": "labore",
        "name": "Labore Inc.",
        "logo": "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/labore.svg"
      }
    },
    {
      "id": "PRODUCT-COVER-INS",
      "type": "product",
      "title": "Sony Laptop, Mitsubishi Laptop, Mitsubishi Laptop",
      "description": "Full Product Cover",
      "status": "active",
      "premium": 50.15,
      "premium_formatted": "AUD $50.15",
      "payment_date": "2019-11-10T13:29:38.814849Z",
      "coverage_start_date": "2019-12-11",
      "coverage_end_date": "2020-12-11",
      "renewal": "annual",
      "partner": {
        "id": "aliqua",
        "name": "Aliqua Pty Ltd",
        "logo": "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/aliqua.svg"
      }
    },
    {
      "id": "PARCEL-COVER-INS",
      "type": "parcel",
      "title": "Parcel shipment to America",
      "description": "Parcel Insurance",
      "status": "expired",
      "premium": 10.65,
      "premium_formatted": "AUD $10.65",
      "payment_date": "2019-01-01T13:29:38.814849Z",
      "coverage_start_date": "2019-01-17",
      "coverage_end_date": null,
      "renewal": null,
      "partner": {
        "id": "magna",
        "name": "Magna Co.",
        "logo": "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/magna.svg"
      }
    }
  ]
}

// I am more familiar these days with Context than with Redux. This Challenge required a simple call to an API to fetch data, and nothing else.
// So below the context is very minimal.
// It exports the provider as the default, for wrapping the <App /> Component
// It exports the Context as GlobalContext, for the components to destructure what they need from it.
// In this case, it's the the policy list.
// If the API allowed, say purchasing a policy from a list of policies, then this context may have included
// a method called handlePolicyPurchase that would take the ID of the policy, and other relevant info, and call the appropriate API method with a post

export const GlobalContext = React.createContext<Partial<AppContextInterface>>({});

function GlobalContextProvider(props:any) {
    const [policyList, setpolicylist] = useState<PolicySchematic[]>([]);
    // const [apiErr,setapierr] = useState<boolean>(false)

    useEffect(()=> {
      axios.get(`[OMITTED]`)
      .then((response) => {
        // setpolicylist(response.data.policies)
      })
      .catch(e=>{
        // This is where I would set an error variable that I can pass to the app 
        // so it can render the appropriate image/message alerting the user that something went wrong
        // setapierr(true)
        setpolicylist(tempData.policies)
      });
    },[])

    const contextMemoData = React.useMemo(() => (
        {
          policyList,
        }), 
        [
          policyList
        ]
    );

    return (
        <GlobalContext.Provider value={contextMemoData}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default React.memo(GlobalContextProvider);