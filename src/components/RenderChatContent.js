import React, {Component} from 'react'
import {View, Image, Text} from 'react-native'
import {connect} from 'react-redux'
import { responsiveWidth, moderateScale, responsiveHeight, responsiveFontSize } from '../utils/responsiveDimensions'
import AdminContent from './AdminContent'
import User1Content from './User1Content'
import User2Content from './User2Content'
import User3Content from './User3Content'
import { RNToasty } from 'react-native-toasty'

class RenderChatContent extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        const {newMessage, type, id} = this.props.item
        //console.log(this.props.item.msgs)
        return(
            <View style={{flex:1,alignItems: this.props.CheckAdmin? 'flex-end':'flex-start'}}>
               {
                   this.props.chatterallUsers.indexOf('ADMIN')>-1 && this.props.chatterallUsers.length===1  ?
                            
                     id ===0?<AdminContent  msg ={newMessage }/>: null
                   :
                   this.props.chatterallUsers.indexOf('USER1')>-1 && this.props.chatterallUsers.length===1?
                    id===1? <User1Content msg ={newMessage }/>: null
                   :

                   this.props.chatterallUsers.indexOf('USER2')>-1 && this.props.chatterallUsers.length===1?
                   id ===2? <User2Content msg ={newMessage }/>: null
                   :
                   this.props.chatterallUsers.indexOf('USER3')>-1 && this.props.chatterallUsers.length===1?
                   id ===3 ?<User3Content msg ={newMessage }/>: null
                   :
                   this.props.chatterallUsers.indexOf('ADMIN')>-1 &&this.props.chatterallUsers.indexOf('USER1')>-1  && this.props.chatterallUsers.length===2?
                   <View style={{flex:1}}>
                        {id ===0?<AdminContent  msg ={newMessage }/>: null}
                        {id ===1? <User1Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   this.props.chatterallUsers.indexOf('ADMIN')>-1 &&this.props.chatterallUsers.indexOf('USER2')>-1  && this.props.chatterallUsers.length===2?
                   <View style={{flex:1}}>
                        {id ===0?<AdminContent  msg ={newMessage }/>: null}
                        {id ===2?<User2Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   this.props.chatterallUsers.indexOf('ADMIN')>-1 &&this.props.chatterallUsers.indexOf('USER3')>-1  && this.props.chatterallUsers.length===2?
                   <View style={{flex:1}}>
                        {id ===0?<AdminContent  msg ={newMessage }/>: null}
                        {id ===3?<User3Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   this.props.chatterallUsers.indexOf('USER1')>-1 &&this.props.chatterallUsers.indexOf('USER2')>-1  && this.props.chatterallUsers.length===2?
                   <View style={{flex:1}}>
                        {id ===1? <User1Content msg ={newMessage }/>: null}
                        {id ===2?<User2Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   this.props.chatterallUsers.indexOf('USER1')>-1 &&this.props.chatterallUsers.indexOf('USER3')>-1  && this.props.chatterallUsers.length===2?
                   <View style={{flex:1}}>
                        {id===1?<User1Content msg ={newMessage }/>: null}
                        {id ===3?<User3Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   
                   this.props.chatterallUsers.indexOf('USER2')>-1 &&this.props.chatterallUsers.indexOf('USER3')>-1  && this.props.chatterallUsers.length===2?
                   <View style={{flex:1}}>
                        {id ===2?<User2Content msg ={newMessage }/>: null}
                        {id ===3?<User3Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   
                   this.props.chatterallUsers.indexOf('ADMIN')>-1 &&this.props.chatterallUsers.indexOf('USER1')>-1 &&this.props.chatterallUsers.indexOf('USER2')>-1  && this.props.chatterallUsers.length===3?
                   <View style={{flex:1}}>
                       {id ===0?<AdminContent msg ={newMessage }/>: null}
                        {id ===1?<User1Content msg ={newMessage }/>: null}
                        {id ===2?<User2Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   this.props.chatterallUsers.indexOf('ADMIN')>-1 &&this.props.chatterallUsers.indexOf('USER1')>-1 &&this.props.chatterallUsers.indexOf('USER3')>-1  && this.props.chatterallUsers.length===3?
                   <View style={{flex:1}}>
                       {id===0?<AdminContent msg ={newMessage }/>: null}
                        {id===1?<User1Content msg ={newMessage }/>: null}
                        {id ===3?<User3Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   this.props.chatterallUsers.indexOf('ADMIN')>-1 &&this.props.chatterallUsers.indexOf('USER2')>-1 &&this.props.chatterallUsers.indexOf('USER2')>-1  && this.props.chatterallUsers.length===3?
                   <View style={{flex:1}}>
                       {id===0?<AdminContent msg ={newMessage }/>: null}
                        {id===2?<User2Content msg ={newMessage }/>: null}
                        {id ===3?<User3Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   this.props.chatterallUsers.indexOf('USER1')>-1 &&this.props.chatterallUsers.indexOf('USER2')>-1 &&this.props.chatterallUsers.indexOf('USER3')>-1  && this.props.chatterallUsers.length===3?
                   <View style={{flex:1}}>
                       {id===1?<User1Content msg ={newMessage }/>: null}
                       {id===2?<User2Content msg ={newMessage }/>: null}
                        {id ===3?<User3Content msg ={newMessage }/>: null}
                        
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   this.props.chatterallUsers.indexOf('ADMIN')>-1 &&this.props.chatterallUsers.indexOf('USER2')>-1 &&this.props.chatterallUsers.indexOf('USER2')>-1 &&this.props.chatterallUsers.indexOf('USER3')>-1  && this.props.chatterallUsers.length===4?
                   <View style={{flex:1}}>
                       {

                       }
                       {id===0?<AdminContent msg ={newMessage }/>: null}
                       {id===1?<User1Content msg ={newMessage }/>: null}
                        {id===2?<User2Content msg ={newMessage }/>: null}
                        {id ===3?<User3Content msg ={newMessage }/>: null}
                        <View style={{marginBottom: moderateScale(4)}}/>
                   </View>
                   :
                   RNToasty.Error({title:'error exist'})
               }
            </View>
        )
    }
}

const mapStateToProps= state=>({
    chatterImg: state.chatterImg.img,
    chatterId: state.chatterImg.id,
    chatterallUsers: state.chatterImg.allUsers,
    CheckAdmin: state.CheckChatUser.isAdmin,
    CheckisUser1: state.CheckChatUser.isUser1,
    CheckisUser2: state.CheckChatUser.isUser2,
    CheckisUser3: state.CheckChatUser.isUser3,
})

const mapDispatchToProps={

}

export default connect(mapStateToProps, mapDispatchToProps)(RenderChatContent)

/*
{
                     this.props.CheckAdmin?//&& this.props.chatterallUsers.indexOf('ADMIN')>-1?
                        <AdminContent msg ={this.props.item}/>
                    :
                     this.props.CheckisUser1? //&& this.props.chatterallUsers.indexOf('USER1')>-1?
                        <User1Content msg ={this.props.item}/>
                    :
                    this.props.CheckisUser2?// && this.props.chatterallUsers.indexOf('USER2')>-1?
                        <User2Content msg ={this.props.item}/>
                    :
                    this.props.CheckisUser3?// && this.props.chatterallUsers.indexOf('USER3')>-1?
                       <User3Content msg ={this.props.item}/>
                    
                    :
                    <Image source={this.props.chatterImg}
                           style={{width:60, height:60, borderRadius:30, marginLeft:moderateScale(2), alignSelf:'center'}} 
                        />
                    }
////////////////
 {

                     this.props.CheckAdmin&& this.props.chatterId ===0?
                        <AdminContent/>
                    :
                     this.props.CheckisUser1 && this.props.chatterId ===1?
                        <User1Content/>
                    :
                    this.props.CheckisUser2 && this.props.chatterId ===2?
                        <User2Content/>
                    :
                    this.props.CheckisUser3 && this.props.chatterId ===3?
                       <User3Content/>
                    :
                    <Image source={this.props.chatterImg}
                           style={{width:60, height:60, borderRadius:30, marginLeft:moderateScale(2), alignSelf:'center'}} 
                        />
                    }
                    
                   { <View style={{width:responsiveWidth(40), height: responsiveHeight(5), marginLeft: moderateScale(1), 
                                  backgroundColor:'#F2F2F2', alignSelf:'center', borderRadius: responsiveWidth(5), justifyContent:'center'}}>
                        <Text //onPress={()=> alert(this.props.index)}
                        style={{fontSize: responsiveFontSize(7), marginLeft: moderateScale(5), color:'black',}}>{this.props.item}</Text>
                   </View>}




//////////////////


               {
                   this.props.CheckAdmin  && this.props.index ===0?
                   <View style={{backgroundColor:'white', marginTop:moderateScale(4),flexDirection:this.props.CheckAdmin && this.props.index ===0? 'row-reverse' :'row',width: responsiveWidth(60), height: responsiveHeight(8), marginLeft: moderateScale(1), marginRight: this.props.index === 0? moderateScale(2):0}}>
                   
                    
                   <Image source={require('../assets/imgs/user4.png')}
                          style={{width:60, height:60, borderRadius:30, marginLeft:moderateScale(2), alignSelf:'center'}} 
                       />
                   
                   <View style={{width:responsiveWidth(40), height: responsiveHeight(5), marginLeft: moderateScale(1), 
                                 backgroundColor:'#F2F2F2', alignSelf:'center', borderRadius: responsiveWidth(5), justifyContent:'center'}}>
                       <Text style={{fontSize: responsiveFontSize(7), marginLeft: moderateScale(5), color:'black',}}>{this.props.item}</Text>
                   </View>

               </View>
               :
               this.props.CheckisUser1  && this.props.index ===1?
                   <View style={{backgroundColor:'white', marginTop:moderateScale(4),flexDirection:'row',width: responsiveWidth(60), height: responsiveHeight(8), marginLeft: moderateScale(1), marginRight: this.props.index === 0? moderateScale(2):0}}>
                   
                    
                   <Image source={require('../assets/imgs/user3.png')}
                          style={{width:60, height:60, borderRadius:30, marginLeft:moderateScale(2), alignSelf:'center'}} 
                       />
                   
                   <View style={{width:responsiveWidth(40), height: responsiveHeight(5), marginLeft: moderateScale(1), 
                                 backgroundColor:'#F2F2F2', alignSelf:'center', borderRadius: responsiveWidth(5), justifyContent:'center'}}>
                       <Text style={{fontSize: responsiveFontSize(7), marginLeft: moderateScale(5), color:'black',}}>{this.props.item}</Text>
                   </View>

               </View>
               :
               this.props.CheckisUser2 && this.props.index !==0?
                   <View style={{backgroundColor:'white', marginTop:moderateScale(4),flexDirection:'row',width: responsiveWidth(60), height: responsiveHeight(8), marginLeft: moderateScale(1), marginRight: this.props.index === 0? moderateScale(2):0}}>
                   
                    
                   <Image source={require('../assets/imgs/user6.png')}
                          style={{width:60, height:60, borderRadius:30, marginLeft:moderateScale(2), alignSelf:'center'}} 
                       />
                   
                   <View style={{width:responsiveWidth(40), height: responsiveHeight(5), marginLeft: moderateScale(1), 
                                 backgroundColor:'#F2F2F2', alignSelf:'center', borderRadius: responsiveWidth(5), justifyContent:'center'}}>
                       <Text style={{fontSize: responsiveFontSize(7), marginLeft: moderateScale(5), color:'black',}}>{this.props.item}</Text>
                   </View>

               </View>
               :
               this.props.CheckisUser3 && this.props.index !==0?
                   <View style={{backgroundColor:'white', marginTop:moderateScale(4),flexDirection:'row' ,width: responsiveWidth(60), height: responsiveHeight(8), marginLeft: moderateScale(1), marginRight: this.props.index === 0? moderateScale(2):0}}>
                   
                    
                   <Image source={require('../assets/imgs/user9.png')}
                          style={{width:60, height:60, borderRadius:30, marginLeft:moderateScale(2), alignSelf:'center'}} 
                       />
                   
                   <View style={{width:responsiveWidth(40), height: responsiveHeight(5), marginLeft: moderateScale(1), 
                                 backgroundColor:'#F2F2F2', alignSelf:'center', borderRadius: responsiveWidth(5), justifyContent:'center'}}>
                       <Text style={{fontSize: responsiveFontSize(7), marginLeft: moderateScale(5), color:'black',}}>{this.props.item}</Text>
                   </View>

               </View>
               :
               <View style={{backgroundColor:'white', marginTop:moderateScale(4),flexDirection:this.props.index ===0? 'row-reverse' :'row',width: responsiveWidth(60), height: responsiveHeight(8), marginLeft: moderateScale(1), marginRight: this.props.index === 0? moderateScale(2):0}}>
                   
                    
                   <Image source={this.props.index ===0 ?require('../assets/imgs/user4.png'): this.props.chatterImg}
                          style={{width:60, height:60, borderRadius:30, marginLeft:moderateScale(2), alignSelf:'center'}} 
                       />
                   
                   <View style={{width:responsiveWidth(40), height: responsiveHeight(5), marginLeft: moderateScale(1), 
                                 backgroundColor:'#F2F2F2', alignSelf:'center', borderRadius: responsiveWidth(5), justifyContent:'center'}}>
                       <Text style={{fontSize: responsiveFontSize(7), marginLeft: moderateScale(5), color:'black',}}>{this.props.item}</Text>
                   </View>

               </View>
               }
                <View style={{marginBottom: moderateScale(1)}}/>
            </View>
        )
    }
}

const mapStateToProps= state=>({
    chatterImg: state.chatterImg.img,
    chatterId: state.chatterImg.id,
    CheckAdmin: state.CheckChatUser.isAdmin,
    CheckisUser1: state.CheckChatUser.isUser1,
    CheckisUser2: state.CheckChatUser.isUser2,
    CheckisUser3: state.CheckChatUser.isUser3,
})

const mapDispatchToProps={

}

export default connect(mapStateToProps, mapDispatchToProps)(RenderChatContent)*/