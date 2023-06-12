import React,{ useState } from "react"
export const ApiContext = React.createContext()

export default function ApiProvider({children}) {
    const [apiToUse, setApiToUse] = useState("api")
    const apiContextValue = {
        apiToUse: apiToUse,
        toggleApi: toggleApi
    }

    // alternates the source of the API between public folder"apiMock" and backend regular "api"
    function toggleApi(){
        
        setApiToUse((prevApi) => (prevApi === "api" ? "apiMock" : "api"))
    }
    

    return(
    <ApiContext.Provider value={apiContextValue}>
        {children}
    </ApiContext.Provider>
    )
}