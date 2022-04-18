import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {sagaHandlerAction} from '../Redux/Constants/APIActions';

const CommentsSreen = () => {
  const dispatch = useDispatch();
  //   const onPressTapped = () => {
  //   use
  //   };
  useEffect(() => {
    dispatch(sagaHandlerAction.user);
  }, [dispatch]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
      // onPress={() => {
      //   onPressTapped();
      // }}
      >
        <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    user: state.users,
  };
};

export default connect(mapStateToProps, null)(CommentsSreen);
