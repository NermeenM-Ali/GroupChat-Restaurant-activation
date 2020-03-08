import React, {Component} from 'react'
import {View, Text, 
        StatusBar, Dimensions,
        TextInput, TouchableOpacity,
        FlatList, Image, SafeAreaView, KeyboardAvoidingView, KeyboardAvoidingViewComponent} from 'react-native'
import {responsiveWidth,
        responsiveHeight, 
        moderateScale, 
        responsiveFontSize} from '../utils/responsiveDimensions'
import { Thumbnail, Icon } from 'native-base'
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust'
import * as color from '../assets/colors'
import HeaderChatImgs  from '../data/HeaderChatImgs'
import RenderHeaderChatImgs from '../components/RenderHeaderChatImgs'
import RenderChatContent from '../components/RenderChatContent'
import { RNToasty } from 'react-native-toasty'
import {checkChatUser} from '../actions/CheckChatUser'
import {ChatterExist, ChatterImageAction} from '../actions/ChatterImageAction'
import {chatMessagesAction} from '../actions/ChatMessagesAction'
import {connect} from 'react-redux'
import AdminContent from '../components/AdminContent'
import User1Content from '../components/User1Content'
import User2Content from '../components/User2Content'
import User3Content from '../components/User3Content'


const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

 class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state={
            allMsgs:[],
            placeholderText: 'Type your message..',
            msg:'',
            isKeyboardPressed: false
        }

       // AndroidKeyboardAdjust.setAdjustPan()
    }


    renderChatters=()=>{
        return(

              <View style={{alignItems:'center'}}>
                   <FlatList
                        data={HeaderChatImgs}
                        renderItem={({item, index})=>{
                            return <RenderHeaderChatImgs item={item} index={index}/>
                        }}

                        keyExtractor={(item, index)=> item.id}
                        horizontal
               />
              </View>

        )
    }
    renderHeaderPart=()=> {
        return(
            
                <View style={{width:WIDTH, alignSelf:'center', height: responsiveHeight(10), flexDirection:'row',
                          backgroundColor:'white', elevation: responsiveWidth(1),
                          justifyContent:'center', alignItems:'center'}}>
                {this.renderChatters()}
                
            </View>
        )
    } 

    renderContent=()=>{
        console.log(this.props.chatMessages)
        return(    
            
                <View style={{backgroundColor: 'white'}}>
                    
                <FlatList
                        data={this.props.chatMessages}
                        keyExtractor={(item, index)=> String(index)}
                        renderItem={({item, index})=>(
                            <RenderChatContent item={item} index={index}/>
                        )}
                        style={{marginBottom: moderateScale(50)}}
                        inverted={false}
                />
            </View>

        )
    }

    renderFooterPart=()=> {
        return(
            <View style={{
                                position:'absolute', flexDirection:'row',
                                left:0, right:0, 
                                bottom:0, height:responsiveHeight(7), 
                                backgroundColor:'white', elevation: responsiveWidth(3)
                                  
                            }}>
                
                <View style={{width: responsiveWidth(85),
                              height: responsiveHeight(6),
                              backgroundColor: color.INPUT_COLOR, alignSelf:'center', 
                              marginLeft: moderateScale(2), borderRadius: responsiveWidth(6)}}>

                     <TextInput
                          ref={t=> this.ref= t}
                          allowFontScaling
                          autoCapitalize='none'
                          autoCorrect={false}
                          keyboardAppearance='dark'
                          multiline
                          placeholder={this.state.placeholderText}
                          placeholderTextColor='gray'  
                          keyboardType='default'
                          style={{marginLeft: moderateScale(4)}}  
                          onChangeText={(msg)=> {
                            this.setState({msg})
                           // alert(this.props.chatterId)
                            
                            
                          }}
                          onFocus={()=>{
                              this.setState({isKeyboardPressed: true})
                          }}
                     />             
                </View>

                <TouchableOpacity activeOpacity={0.9}
                             onPress={()=>{
                                 console.log(this.props.chatterId)
                                    //this.setState({allMsgs: [...this.state.allMsgs, this.state.msg]})
                                this.props.chatMessagesAction(
                                    this.props.chatterIdnum,
                                    this.props.chatterId=== 'ADMIN'?'ADMIN':
                                    this.props.chatterId=== 'USER1'?'USER1':
                                    this.props.chatterId=== 'USER2'?'USER2':
                                    this.props.chatterId=== 'USER3'?'USER3':null

                                , this.state.msg)
                                
                                requestAnimationFrame(() => {
                                    this.props.ChatterExist(this.props.chatterId)
                                    console.log(this.props.chatterallUsers)
                                })
                                
                                this.ref.clear()
                                
                                
                             }}  
                              style={{width:responsiveWidth(11),marginLeft: moderateScale(0),
                                height: responsiveHeight(6), alignSelf:'center', backgroundColor:'white',
                                justifyContent:'center', alignItems:'center', 
                                }}>
                    <Icon name='location-arrow' type='FontAwesome' style={{fontSize: responsiveFontSize(14),color:'#6b7b8c', transform:[{rotate:'40deg'}]}}/>               
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return(
                
                    <View style={{flex:1, backgroundColor:'white'}}>
                    <StatusBar hidden/>
                    {this.renderHeaderPart()}
                    {this.renderContent()}
                    {this.renderFooterPart()}
                </View> 
                
        )
    }
}

const mapStateToProps = state =>({
    CheckAdmin: state.CheckChatUser.isAdmin,
    CheckisUser1: state.CheckChatUser.isUser1,
    CheckisUser2: state.CheckChatUser.isUser2,
    CheckisUser3: state.CheckChatUser.isUser3,
    chatterId: state.chatterImg.id,
    chatterIdnum: state.chatterImg.idNum,
    chatterallUsers: state.chatterImg.allUsers,
    chatMessages: state.ChatMessages.allMessages
})

const mapDispatchToProps ={
    checkChatUser,
    ChatterExist,
    ChatterImageAction,
    chatMessagesAction
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)