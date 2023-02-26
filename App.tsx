import { Text, View } from 'react-native'
import React from 'react'
import Navigation from './Components/Navigation'
import { AuthProvider } from './context/AuthContext'

const App = () => {
    return (
      <AuthProvider>
        <Navigation></Navigation>
      </AuthProvider>

    )
}

export default App