import React ,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper,RecommendItem} from '../style'

class Recommend extends PureComponent{
  render(){
    return(
       <RecommendWrapper>
        {/* {
          this.props.list.map( (item)=>{
            return(
              <RecommendItem imgUrl={item.get('url')} key={item.get('id')}/>
            ) 
          })
        } */}
        {/* github暂时调整 */}
        <RecommendItem className="r1" />
        <RecommendItem className="r2" />
        <RecommendItem className="r3" />
        <RecommendItem className="r4" />
      </RecommendWrapper>
    )
  }
}

const mapState = (state)=>{
  return({
    list:state.getIn(['home','recommendList'])
  })
}

export default connect(mapState,null)(Recommend);
