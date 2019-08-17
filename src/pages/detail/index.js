import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'

import {
  Wrapper,
  Title,
  WriterWrapper,
  Writer,
  WriterName,
  WriterInfo,
  Content,
  BackTop,
  DownloadPic
} from './style'

class Detail extends Component{
  constructor(props){
    super(props);
    this.myRef=React.createRef();
  }
  render(){
    const {title,headPic,name,browse,time,words,read,comment,like,content} = this.props;
    return(
      <Wrapper>
        <Title>{title}</Title>
        <WriterWrapper>
          <img src={headPic} alt='' />
          <Writer>
            <WriterName>{name}</WriterName>
            <WriterInfo>
              <span className='browse'><i className='iconfont '>&#xe601;</i>{browse}</span>
              <span>{time}</span>
              <span>{words}</span>
              <span>{read}</span>
              <span>{comment}</span>
              <span>{like}</span>
            </WriterInfo>
          </Writer>
        </WriterWrapper>
        <Content dangerouslySetInnerHTML={{__html: content}}>
          {/* <img src='https://upload-images.jianshu.io/upload_images/15233518-7d1d8baf8a548e99.com?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp' alt='' />
          <p>前阵子，我和阿里的薪酬福利专家M同学聊了一下午，M同学做了9年薪酬，和我们吐槽了很多薪酬方面的现象，也道出了少有人关注的薪酬逻辑和常识。</p>
          <p>这一次，我又找了一位阿里技术岗位的招聘专家T同学，从他的视角中，我们来看一下金三银四的招聘旺季下，10条求职的黄金规律。</p>
          <p>可以说每一条都很有深度。</p>
          <p>01很多时候，HR不要你，不是因为你水平的问题，也不是因为你专业技能的问题。而是HR自己对自己没信心，HR没把握你这样的候选人，会不会踏实地在部门内做事。HR觉得你够聪明，够优秀，但不敢用你，因为他们担心花了很大的精力去培养你，最后你没花心思放在这份工作上，这对HR和用人部门都是很大的打击。</p>
          <p>02薪水高是否意味着一份好工作，答案无疑是否定的。一般情况下，薪水和期待成正比，既然有人给了你更高的经济回馈，那就意味着对你的期待更高。而一个人创造的价值并不完全由自己决定，还依赖于客观的条件，比如团队、客户、同事、客户、周期等。如果你要先享受更大的收益，然后再去创造价值，往往翻车的概率会很大。</p>
          <p>03手里攥着Offer 来谈更高条件的候选人，一般不会被待见。如果单从薪酬上看，永远都有可能比当下更高薪的工作在等着自己，拿着 Offer 来谈条件的候选人往往会被认定稳定性存疑。收入不是不重要，但不应该是决定一个人是否加入一家公司的先决条件。特别是工作数年后还对薪酬非常纠结的话，可能压根就没有对自己和外部环境有一个清晰的认识。</p>
          <p>04企业对外招聘的时候，大家都不要太在意招聘广告上的薪酬范围数值，这个数值往往并不是公司实际对这个岗位的定薪标准。确实，薪酬写的越高越能吸引人，但职位工作的内容和挑战，会因为薪资的关系被弱化甚至被忽视。像在阿里，看官网上的招聘，我们不会放出某个职位的薪资范围，销售岗位偶尔例外。</p>
          <p>05 如果你真的有两把刷子，学历限制、工作年限条件、专业背景要求都不是问题。公司的 JD 是 HR 部门写的，HR希望能够最大程度上用高效率的方式筛选到合适人才。但实际的用人部门的需求更现实，用人部门只在乎来的人能不能解决问题。在阿里也有大专甚至中专的同事，一点都不影响他们成为公司的优秀员工，在职场上的员工优秀与否和学历有时候并不是正向关系。</p>
          <img src='https://upload-images.jianshu.io/upload_images/15233518-0aae7612b4c6a733.com?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp' alt='' />
          <p>06如果你现在的领导，排斥异己，容不下不同的声音，搞裙带关系，专心培养自己的所谓派系，评定业绩的时候做不到看业绩说话，那就早点离开，不要把自己有限的人生浪费在无聊的蝇营狗苟上。而且离职也并不是一件坏事，离职在另外一方面有助于提升自己的认知，扩大自己的视野，机会也会更多，所以别总纠结着或依依不舍，成年人都懂得取舍。1条观点</p>
          <p>07人有三观，企业也有。但三观约束自己还行，不能用它来界定他人。因为你不是对方，你不了解对方，你对其他一切知之甚少。不要因为局部而否定整体，每家公司都有自己的问题，我们是选择一个适合自己的平台，不是扮演企业的道德和伦理的警察，用自己的三观来判断一家公司的好坏，这很幼稚，所谓“三观正”其实是个简称啦，全称是：“三观正好和我一样”。</p>
          <p>08如果真的想好好锻炼自己的能力，那一开始就不要先去环境特别稳定、管理特别健全的公司。我们以HR来举例，现在人力资源工作在一些超大型的企业里，已经分工的非常细，某些环节跟工厂的流水线差不多，流水线一多，就会让HR学习能力不够强，学习速度不够快，影响了个人发展。倘若你已经在超大公司的内部工作，那也尽量选择有挑战的事业部。</p>
          <img src='https://upload-images.jianshu.io/upload_images/15233518-a6be8f734e7cdb63.com?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp' alt='' />
          <p>这次交谈的最后，我问了T同学一个私人的问题：现在阿里的HR是单身多还是成家立业的多啊，T同学的答案是后者。</p>
          <p>所以如果你想加入阿里，可以再等等，不着急，有能力，随时都有机会。</p> */}
        </Content>
        <div className="outer">
          <DownloadPic ref={this.myRef}>
            
              <span 
                className="close"
                onClick={this.hide.bind(this)}
              >×</span>
            
          </DownloadPic>
        </div>
        {this.props.backTopShow ? <BackTop onClick={this.handleBackTop} ><i className='iconfont'>&#xe60c;</i></BackTop> : null}
      </Wrapper>
    )
  }

  componentDidMount(){
    //组件挂在时（即页面加载时），使得页面会最顶端
    window.scrollTo(0,0);
    this.bindEvents();

    //获取前一个页面的props里的id值.通过action传递，在axios中的路径可加上id，不同id可对应后端提供的不同数据
    const id=this.props.match.params.id;
    this.props.getDetail(id);
  }

  //backtop组件卸载时，解除window上的事件绑定，避免此组件事件对其他组件造成影响
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeBackTop);
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeBackTop);
  }

  //sscrollTo(xpos,ypos) 方法可把内容滚动到指定的坐标。
  handleBackTop(){
    let scrollToTop = window.setInterval(function() {
      let pos = window.pageYOffset;
      if ( pos > 0 ) {
          window.scrollTo( 0, pos - 50 ); // how far to scroll on each step
      } else {
          window.clearInterval( scrollToTop );
      }
    }, 2);
  }

  hide(){
    this.myRef.current.setAttribute("class","hide");
  }
  
}

const mapState=(state)=>({
  backTopShow:state.getIn(['detail','backTopShow']),
  title:state.getIn(['detail','title']),
  headPic:state.getIn(['detail','headPic']),
  name:state.getIn(['detail','name']),
  browse:state.getIn(['detail','browse']),
  time:state.getIn(['detail','time']),
  words:state.getIn(['detail','words']),
  read:state.getIn(['detail','read']),
  comment:state.getIn(['detail','comment']),
  like:state.getIn(['detail','like']),
  content:state.getIn(['detail','content'])
})

const mapDispatch=(dispatch)=>({
  changeBackTop(){
    //元素滚动条内的顶部隐藏部分的高度>300,显示回顶部按钮
    if( document.documentElement.scrollTop>300){
      const action = actionCreators.getBackTop(true); 
      dispatch(action);
    }else{
      const action = actionCreators.getBackTop(false); 
      dispatch(action);
    }
  },
  getDetail(id){
    const action = actionCreators.getDetailAction(id);
    dispatch(action);
  }
})

// 在App.js中Detail是从loadable导入的，不是直接从本组件导入，所以本组件无法获取router的相关内容。withRouter让Detail有能力获取到router里的所有内容，对应上面const id=this.props.match.params.id;这句代码，如果不用withRouter，无法获取。
export default connect(mapState,mapDispatch)(withRouter(Detail));
