import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tang, giam, binhPhuong,reset} from './action'

const ViewApp = () => {
    const count = useSelector(state => state.dem);
    const dispatch = useDispatch();
    
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>Dem: {count}</Text>
          <View style={{marginTop: 10}}>
            <Button
              title='Tăng biến đếm'
              onPress={() => dispatch(tang())}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Button
              title='Giảm biến đếm'
              onPress={() => dispatch(giam())}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Button
              title='Mũ bình phương biến đếm'
              onPress={() => dispatch(binhPhuong())}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Button
              title='Reset biến đếm'
              onPress={() => dispatch(reset())}
            />
          </View>
        </View>
      );
    
}

export default ViewApp

