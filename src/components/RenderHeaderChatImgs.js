import React, {Component} from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import { moderateScale, responsiveWidth } from '../utils/responsiveDimensions'
import {ChatterImageAction} from '../actions/ChatterImageAction'
import {checkChatUser} from '../actions/CheckChatUser'
import {connect} from 'react-redux'
import {RNToasty} from 'react-native-toasty'

class RenderHeaderChatImgs extends Component {
    constructor(props) {
        super(props)
        /*if( this.props.chatterallUsers.indexOf('ADMIN') >-1 &&this.props.chatterallUsers.indexOf('USER1') > -1) {
            this.props.checkChatUser(true, true, false, false) 
            RNToasty.Warn({title: 'ADMIN & USER1'})
        } else if ( this.props.chatterallUsers.indexOf('ADMIN') >-1 &&this.props.chatterallUsers.indexOf('USER2') > -1) {
            this.props.checkChatUser(true, false, true, false) 
            RNToasty.Warn({title: 'ADMIN & USER2'})
        }else if ( this.props.chatterallUsers.indexOf('ADMIN') >-1 &&this.props.chatterallUsers.indexOf('USER3') > -1) {
            this.props.checkChatUser(true, false, false, true) 
            RNToasty.Warn({title: 'ADMIN & USER3'})
        }else if ( this.props.chatterallUsers.indexOf('USER1') >-1 &&this.props.chatterallUsers.indexOf('USER2') > -1) {
            this.props.checkChatUser(false, true, true, false) 
            RNToasty.Warn({title: 'USER1 & USER2'})
        }else if ( this.props.chatterallUsers.indexOf('USER1') >-1 &&this.props.chatterallUsers.indexOf('USER3') > -1) {
            this.props.checkChatUser(false, true, false, true) 
            RNToasty.Warn({title: 'USER1 & USER3'})
        }else if ( this.props.chatterallUsers.indexOf('USER2') >-1 &&this.props.chatterallUsers.indexOf('USER3') > -1) {
            this.props.checkChatUser(false, false, true, true) 
            RNToasty.Warn({title: 'USER2 & USER3'})
        }
        else if ( this.props.chatterallUsers.indexOf('ADMIN') >-1 &&this.props.chatterallUsers.indexOf('USER1') > -1 &&this.props.chatterallUsers.indexOf('USER2') > -1) {
            this.props.checkChatUser(true, true, true, false) 
            RNToasty.Warn({title: 'ADMIN & USER1 & USER2'})
        }else if ( this.props.chatterallUsers.indexOf('ADMIN') >-1 &&this.props.chatterallUsers.indexOf('USER1') > -1&&this.props.chatterallUsers.indexOf('USER3') > -1) {
            this.props.checkChatUser(true, true, false, true) 
            RNToasty.Warn({title: 'ADMIN & USER1 & USER3'})
        }else if ( this.props.chatterallUsers.indexOf('ADMIN') >-1 &&this.props.chatterallUsers.indexOf('USER2') > -1&&this.props.chatterallUsers.indexOf('USER3') > -1) {
            this.props.checkChatUser(true, false, true, true) 
            RNToasty.Warn({title: 'ADMIN & USER2 & USER3'})
        }else if ( this.props.chatterallUsers.indexOf('USER1') >-1 &&this.props.chatterallUsers.indexOf('USER2') > -1&&this.props.chatterallUsers.indexOf('USER3') > -1) {
            this.props.checkChatUser(false, true, true, true) 
            RNToasty.Warn({title: 'USER1 & USER2 & USER3'})
        }else{
            RNToasty.Warn({title: 'NO ONE'})
        }*/


    }
    render() {
        const {id, img} = this.props.item
        
        return(
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <TouchableOpacity 
                                     onPress={()=> {
                                        //alert(this.props.CheckAdmin)
                                         if(id ===0) {
                                            this.props.checkChatUser(true, false, false, false) 
                                            requestAnimationFrame(() => {
                                                this.props.ChatterImageAction('ADMIN',0)
                                                console.log(this.props.chatterallUsers)
                                            })
                                            
                                         }

                                          if(id ===1 ) {
                                            this.props.checkChatUser(false, true, false, false)
                                            requestAnimationFrame(() => {
                                                this.props.ChatterImageAction('USER1',1)
                                                console.log(this.props.chatterallUsers)
                                            }) 
                                         }
                                          if(id ===2 ) {
                                            this.props.checkChatUser(false, false, true, false) 
                                            requestAnimationFrame(() => {
                                                this.props.ChatterImageAction('USER2',2)
                                            })
                                         }
                                          if(id ===3) {
                                            this.props.checkChatUser(false, false, false, true)
                                            requestAnimationFrame(() => {
                                                this.props.ChatterImageAction('USER3',3)
                                            })
                                         }

                                         
                                         
                                         
                                        
                                        // RNToasty.Warn({title: 'Sorry'})
                                         
                                        }}   
                                     activeOpacity={0.9}
                                     style={{width:60, height:60, 
                                             borderRadius:30, marginRight:moderateScale(1), elevation: responsiveWidth(1)}}
                    >
                        <Image source={img} style={{width:60, height:60, borderRadius:30}}/>
                    </TouchableOpacity>
            </View>

        )
    }
}

const mapStateToProps = state=>({
    CheckAdmin: state.CheckChatUser.isAdmin,
    chatterId: state.chatterImg.id,
    chatterallUsers: state.chatterImg.allUsers,
})

const mapDispatchToProps = {
    ChatterImageAction,
    checkChatUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderHeaderChatImgs)