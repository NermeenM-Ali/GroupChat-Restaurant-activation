import React, {Component} from 'react'
import {View, Text, Dimensions, TouchableOpacity} from 'react-native'
import { responsiveHeight, moderateScale, responsiveWidth, responsiveFontSize } from '../utils/responsiveDimensions'
import { Thumbnail, Icon } from 'native-base'
import {connect} from 'react-redux'
import { Navigation } from 'react-native-navigation'


const WIDTH = Dimensions.get('screen').width  
const HEIGHT = Dimensions.get('screen').height  

class RenderAccountRow extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.accountData)
        const {id, name, phone, location, email} = this.props.item
        return(
            <TouchableOpacity activeOpacity={0.8}
                          onPress={()=>{
                              Navigation.push('AppStack', {
                                  component:{
                                      name:'ActivateAccount',
                                      options:{
                                          topBar:{
                                              visible: false,
                                              drawBehind: true
                                          },
                                          statusBar:{
                                              visible: false
                                          }
                                      },
                                      passProps:{
                                          rowIndex: id
                                      }
                                  }
                              })
                          }}  
                          style={{width: WIDTH- responsiveWidth(3), alignSelf:'center', height: responsiveHeight(11), 
                          backgroundColor:this.props.accountData[id].activated? 'white':'#F2F2F2', borderWidth: responsiveWidth(0.1),marginTop: moderateScale(2), marginBottom: moderateScale(3),elevation: responsiveWidth(1), borderRadius: responsiveWidth(1)}}>
                
                <View style={{width: responsiveWidth(20), height:HEIGHT,flexDirection:'row',
                              marginLeft: moderateScale(1)}}>

                    <Thumbnail large source={require('../assets/imgs/food.jpg')} style={{marginTop: moderateScale(1.2)}} />
                    
                    <View style={{width: responsiveWidth(50), height: HEIGHT, marginLeft: moderateScale(5)}}>
                        <Text style={{fontSize: responsiveFontSize(9), fontFamily:'Cairo-Regular', marginTop: moderateScale(4)}}>{name}</Text>
                        <Text style={{fontSize: responsiveFontSize(6), fontFamily:'Cairo-Regular'}}>{location}</Text>
                    </View>

                    <View style={{width: responsiveWidth(20), height: HEIGHT, marginLeft: moderateScale(5)}}>
                        <Icon name='checkcircle' type='AntDesign' 
                            style={{marginTop: moderateScale(10), marginLeft: moderateScale(10), color: this.props.accountData[id].activated? 'green': 'gray'}}/>
                        <Text style={{color:this.props.accountData[id].activated? 'green' :'gray', fontSize: responsiveFontSize(4), alignSelf:'center', marginTop: moderateScale(3)}}>
                            {this.props.accountData[id].activated?'Activated':'Not Activated'}</Text>    
                    </View>
                </View>           
            </TouchableOpacity>
        )
    }
}


const mapStateToProps= state=>({
    //isActivated: state.AccountInfo.isActive,
    accountData: state.AccountInfo.data,
})

const mapDispatchToProps={
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderAccountRow)
