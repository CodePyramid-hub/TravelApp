import React , {useEffect, useState} from 'react'
import { Text } from 'react-native'
import styles from './styles'

const Title = () => {
  const [stateText, setText] = useState('');

  const onTextPress = () => {
    setText('Updated state');
  }
  return (
    <Text onPress={ onTextPress} style={styles.title}>{stateText}</Text>
  )
}

Title.defaultProps = {
  text: "Default Text"
}

export default React.memo(Title)
