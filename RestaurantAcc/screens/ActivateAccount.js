import React, {Component} from 'react'
import {View, StatusBar, ImageBackground, Dimensions, Text, TextInput, TouchableOpacity} from 'react-native'
import { Icon } from 'native-base'
import {connect} from 'react-redux'
import {responsiveWidth,
    responsiveHeight, 
    moderateScale, 
    responsiveFontSize} from '../utils/responsiveDimensions'
import {UpdateInfoAction} from '../actions/AccountInfoAction'
import { RNToasty } from 'react-native-toasty'
import { Navigation } from 'react-native-navigation'


const WIDTH = Dimensions.get('screen').width    

class ActivateAccount extends Component {
    constructor(props) {
        super(props)
        this.state={
            restaurantName: this.props.accountData[this.props.rowIndex].name,
            phone:this.props.accountData[this.props.rowIndex].phone,
            location:this.props.accountData[this.props.rowIndex].location,
            email: this.props.accountData[this.props.rowIndex].email,
            nameRequired: false,
            phoneRequired: false,
            locationRequired: false,
            emailRequired: false,
            phoneError: false,
            emailError: false
        }
    }
    renderLogo=()=>{
        return(
            <ImageBackground source={require('../assets/imgs/food.jpg')} resizeMode='stretch'
                             style={{ backgroundColor:'white', height: responsiveHeight(50), width: WIDTH, justifyContent:'flex-end', alignItems:'center'}}>

                    <Text style={{color:'green', opacity:0.7, marginBottom: moderateScale(20), fontSize: responsiveFontSize(18), fontFamily:'ArianaVioleta'}}>Account activation</Text>             
                </ImageBackground>
        )
    }
    renderContent=()=>{
        console.log(this.props.rowIndex)
        return(
            <View style={{width: WIDTH, height: responsiveHeight(70), backgroundColor:'white'}}>
                <View style={{width: responsiveWidth(80), height: responsiveHeight(7),
                             backgroundColor:'white', alignSelf:'center', marginTop: moderateScale(10)}}>
                    <View style={{flexDirection:'row'}}>
                    <Icon name='chef-hat' type='MaterialCommunityIcons' style={{color:'gray', fontSize: responsiveFontSize(8), marginTop: moderateScale(4), marginLeft: moderateScale(4)}}/>
                    <TextInput
                             ref={t=> this.resName= t}
                             allowFontScaling
                             autoCapitalize='none'
                             autoCorrect={false}
                             keyboardAppearance='dark'
                             multiline={false}
                             defaultValue={this.props.accountData[this.props.rowIndex].name}
                             placeholderTextColor='black'  
                             keyboardType='default'
                             blurOnSubmit
                             style={{marginLeft: moderateScale(4), fontFamily:'Cairo-SemiBold', width: responsiveWidth(100)}}  
                             onChangeText={(restaurantName)=> {
                               this.setState({restaurantName, nameRequired: false})
                              // alert(this.props.chatterId)
                             }}
                             onBlur={()=>{
                                 this.state.restaurantName === ''?
                                 this.setState({nameRequired: true})
                                 :
                                 this.setState({nameRequired: false})
                             }}
                            onSubmitEditing={()=>{
                                this.state.restaurantName === ''?
                                 this.setState({nameRequired: true})
                                 :
                                 this.setState({nameRequired: false})
                            }} 
                                
                    />

                    </View>
                    <View style={{width: responsiveWidth(73), height: responsiveHeight(0.1), backgroundColor:'black', alignSelf:'center', marginTop: moderateScale(-5)}}/>
                </View>

                      {
                          this.state.nameRequired?
                          <View style={{width: responsiveWidth(80), height: responsiveHeight(2),
                                 backgroundColor:'white', alignSelf:'center',alignItems:'flex-end', marginTop: moderateScale(-7)}}>
                              <Text style={{color:'red', fontFamily:'Cairo-Regular', fontSize: responsiveFontSize(4)}}>Required</Text>
                          </View>
                          :
                          null
                      }      

                <View style={{width: responsiveWidth(80), height: responsiveHeight(7),
                             backgroundColor:'white', alignSelf:'center', marginTop: moderateScale(5)}}>
                    <View style={{flexDirection:'row'}}>
                    <Icon name='phone' type='MaterialCommunityIcons' style={{color:'gray', fontSize: responsiveFontSize(8), marginTop: moderateScale(4), marginLeft: moderateScale(4)}}/>
                    <TextInput
                             ref={t=> this.resPhone= t}
                             allowFontScaling
                             autoCapitalize='none'
                             autoCorrect={false}
                             keyboardAppearance='dark'
                             multiline={false}
                             defaultValue={ this.props.accountData[this.props.rowIndex].phone}
                             placeholderTextColor='black'  
                             keyboardType='number-pad'
                             blurOnSubmit
                             style={{marginLeft: moderateScale(4), fontFamily:'Cairo-SemiBold', width: responsiveWidth(100)}}  
                             onChangeText={(phone)=> {
                               this.setState({phone, phoneRequired: false})

                             }}  
                             
                             onBlur={()=>{
                                this.state.phone === ''?
                                this.setState({phoneRequired: true})
                                :
                                this.setState({phoneRequired: false})
                            }}
                           onSubmitEditing={()=>{
                               this.state.phone === ''?
                                this.setState({phoneRequired: true})
                                :
                                !(/^\(?([0-1]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/.test(this.state.phone))?
                                this.setState({phoneError: true})
                                :
                                this.setState({phoneRequired: false, phoneError: false})
                           }}
                    />

                    </View>
                    <View style={{width: responsiveWidth(73), height: responsiveHeight(0.1), backgroundColor:'black', alignSelf:'center', marginTop: moderateScale(-5)}}/>
                </View>

                {
                          this.state.phoneRequired || this.state.phoneError?
                          <View style={{width: responsiveWidth(80), height: responsiveHeight(2),
                                 backgroundColor:'white', alignSelf:'center',alignItems:'flex-end', marginTop: moderateScale(-7)}}>
                              <Text style={{color:'red', fontFamily:'Cairo-Regular', fontSize: responsiveFontSize(4)}}>{this.state.phoneRequired? 'Required': this.state.phoneError? 'Phone format incorrect..': null}</Text>
                          </View>
                          :
                          null
                      }    

                <View style={{width: responsiveWidth(80), height: responsiveHeight(7),
                             backgroundColor:'white', alignSelf:'center', marginTop: moderateScale(5)}}>
                    <View style={{flexDirection:'row'}}>
                    <Icon name='location-on' type='MaterialIcons' style={{color:'gray', fontSize: responsiveFontSize(8), marginTop: moderateScale(4), marginLeft: moderateScale(4)}}/>
                    <TextInput
                             ref={t=> this.resLocation= t}
                             allowFontScaling
                             autoCapitalize='none'
                             autoCorrect={false}
                             keyboardAppearance='dark'
                             multiline={false}
                             defaultValue={this.props.accountData[this.props.rowIndex].location}
                             placeholderTextColor='black'  
                             keyboardType='default'
                             blurOnSubmit
                             style={{marginLeft: moderateScale(4), fontFamily:'Cairo-SemiBold', width: responsiveWidth(100)}}  
                             onChangeText={(location)=> {
                               this.setState({location, locationRequired: false})
                               //console.log(location)
                             }}   
                             onBlur={()=>{
                                this.state.location === ''?
                                this.setState({locationRequired: true})
                                :
                                this.setState({locationRequired: false})
                            }}
                           onSubmitEditing={()=>{
                               this.state.location === ''?
                                this.setState({locationRequired: true})
                                :
                                this.setState({locationRequired: false})
                           }}  
                    />

                    </View>
                    <View style={{width: responsiveWidth(73), height: responsiveHeight(0.1), backgroundColor:'black', alignSelf:'center', marginTop: moderateScale(-5)}}/>
                </View>

                {
                          this.state.locationRequired?
                          <View style={{width: responsiveWidth(80), height: responsiveHeight(2),
                                 backgroundColor:'white', alignSelf:'center',alignItems:'flex-end', marginTop: moderateScale(-7)}}>
                              <Text style={{color:'red', fontFamily:'Cairo-Regular', fontSize: responsiveFontSize(4)}}>Required</Text>
                          </View>
                          :
                          null
                      }    

                <View style={{width: responsiveWidth(80), height: responsiveHeight(7),
                             backgroundColor:'white', alignSelf:'center', marginTop: moderateScale(5)}}>
                    <View style={{flexDirection:'row'}}>
                    <Icon name='email' type='Entypo' style={{color:'gray', fontSize: responsiveFontSize(7), marginTop: moderateScale(5), marginLeft: moderateScale(4)}}/>
                    <TextInput
                             ref={t=> this.resEmail= t}
                             allowFontScaling
                             autoCapitalize='none'
                             autoCorrect={false}
                             keyboardAppearance='dark'
                             multiline={false}
                             defaultValue={this.props.accountData[this.props.rowIndex].email}
                             placeholderTextColor='black'  
                             keyboardType='email-address'
                             blurOnSubmit
                             style={{marginLeft: moderateScale(4), fontFamily:'Cairo-SemiBold', width: responsiveWidth(120)}}  
                             onChangeText={(email)=> {
                               this.setState({email, emailRequired: false})
                             }}   

                             onBlur={()=>{
                                this.state.email === ''?
                                this.setState({emailRequired: true})
                                :
                                this.setState({emailRequired: false})
                            }}
                           onSubmitEditing={()=>{
                               this.state.email === ''?
                                this.setState({emailRequired: true})
                                :
                                !(/^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(this.state.email))?
                                this.setState({emailError: true})
                                :
                                this.setState({emailRequired: false, emailError: false})
                           }}
                    />

                    </View>
                    <View style={{width: responsiveWidth(73), height: responsiveHeight(0.1), backgroundColor:'black', alignSelf:'center', marginTop: moderateScale(-5)}}/>
                </View> 

                {
                          this.state.emailRequired || this.state.emailError?
                          <View style={{width: responsiveWidth(80), height: responsiveHeight(2),
                                 backgroundColor:'white', alignSelf:'center',alignItems:'flex-end', marginTop: moderateScale(-7)}}>
                              <Text style={{color:'red', fontFamily:'Cairo-Regular', fontSize: responsiveFontSize(4)}}>{this.state.emailRequired? 'Required': 'Email format incorrect..'}</Text>
                          </View>
                          :
                          null
                      }    


                {this.renderButton()}           
            </View>
        )
    }

    renderButton=()=>{
        return(
            <TouchableOpacity onPress={()=> this.checkData()} activeOpacity={0.8}
                        style={{width: responsiveWidth(80), height: responsiveHeight(8), 
                        backgroundColor:'green', borderColor:'gray', borderWidth: responsiveWidth(0.2),
                        alignSelf:'center', marginTop: moderateScale(15), borderRadius: responsiveWidth(2), justifyContent:'center', alignItems:'center'}}
            >
                <Text style={{fontFamily:'Cairo-SemiBold', fontSize: responsiveFontSize(10), color:'white', opacity:0.8}}>Activate</Text>
            </TouchableOpacity>
        )
    }

    checkData=()=>{
        const {restaurantName, phone, location, email}= this.state
        {
            if(restaurantName ==='' && phone ==='' && location === '' && email===''){
                   // RNToasty.Warn({title: 'Please enter all data..'})
                    this.setState({nameRequired: true, emailRequired: true, phoneRequired: true, locationRequired: true})

            }else if(restaurantName ===''){
                this.setState({nameRequired: true})
            }else if(phone=== ''){
                this.setState({phoneRequired: true})
            }else if(email=== ''){
                this.setState({emailRequired: true})
            }else if(location=== ''){
                this.setState({locationRequired: true})
            }
            else{
                this.props.UpdateInfoAction(this.props.rowIndex,restaurantName, phone, location, email)
                console.log(this.props.accountData)
                console.log(this.props.isActivated)
                this.setState({nameRequired: false, emailRequired: false,
                               phoneRequired: false, locationRequired: false,
                               phoneError: false, emailError: false
                            })
                Navigation.pop('AppStack')            
                this.resName.clear()
                this.resPhone.clear()
                this.resLocation.clear()
                this.resEmail.clear()
                
            }    
            
        }
        
    }
    render() {
        return(
           <View style={{flex:1}}>
                <StatusBar hidden/>
                {this.renderLogo()}
                {this.renderContent()}
                
           </View>
        )
    }
}
const mapStateToProps= state=>({
    accountData: state.AccountInfo.data,
    isActivated: state.AccountInfo.isActive
    
})

const mapDispatchToProps={
    UpdateInfoAction,
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccount)