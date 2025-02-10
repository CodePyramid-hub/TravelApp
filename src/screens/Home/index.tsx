import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Title from '../../components/Title/index'

const Home = () => {

  return (
    <SafeAreaView>
      <View>
        <Title />

      </View>
    </SafeAreaView>
  )
}

export default React.memo(Home)
