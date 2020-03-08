import React, {Component} from 'react'
import {View,FlatList, StatusBar, Text, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import {responsiveWidth,
    responsiveHeight, 
    moderateScale, 
    responsiveFontSize} from '../utils/responsiveDimensions'
import RenderAccountRow from '../components/RenderAccountRow'    

const WIDTH = Dimensions.get('screen').width  

class RestaurantCollection extends Component {
    renderHeader=()=>{
        return(
            <View style={{width: WIDTH, height: responsiveHeight(9), backgroundColor:'white',elevation: responsiveWidth(1), justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontFamily:'ArianaVioleta', fontSize: responsiveFontSize(18), color:'black', opacity:0.7}}>All accounts..</Text>
            </View>
        )
    }

    renderContent=()=>{
        return(
            <FlatList
                    data={this.props.accountData}
                    keyExtractor={(item, index)=> item.id}
                    renderItem={({item, index})=>{
                        return <RenderAccountRow item={item} index={index}/>
                    }}
                    style={{marginTop: moderateScale(4)}}
                    //inverted
                   // extraData={this.props.isActivated}
            />
        )
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <StatusBar hidden/>
                {this.renderHeader()}
                {this.renderContent()}
            </View>
        )
    }
}

const mapStateToProps= state=>({
    accountData: state.AccountInfo.data,
    //isActivated: state.ActiveAcc.isActive,
})

const mapDispatchToProps={
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCollection)
