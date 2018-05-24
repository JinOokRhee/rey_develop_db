import React, {Component} from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from './CloudItem';
import Header from './Header.js';
import {Route, Link} from 'react-router-dom';
import AnimationCount from 'react-count-animation';
import 'react-count-animation/dist/count.min.css';
import Image from 'react-image'
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Cell,Radar, RadarChart, PolarGrid,
         PolarAngleAxis, PolarRadiusAxis} from 'recharts';
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];

//const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

const data = [
      {name: '2018:05:05', 긍정: 4000, 부정: 2400, 평균: (4000+2400)/2},
      {name: '2018:05:06', 긍정: 3000, 부정: 1398, 평균: (3000+1398)/2},
      {name: '2018:05:07', 긍정: 2000, 부정: 9800, 평균: (2000+9800)/2},
      {name: '2018:05:08', 긍정: 2780, 부정: 3908, 평균: (2780+3908)/2},
      {name: '2018:05:09', 긍정: 1890, 부정: 4800, 평균: (1890+4800)/2},
      {name: '2018:05:10', 긍정: 2390, 부정: 3800, 평균: (2390+3800)/2},
      {name: '2018:05:11', 긍정: 3490, 부정: 4300, 평균: (3490+4300)/2},
];
const data2 = [
      {name: '10대', 긍정: 8490, 부정: 1800, 평균: (4000+2400)/2},
      {name: '20대', 긍정: 5330, 부정: 3098, 평균: (3000+1398)/2},
      {name: '30대', 긍정: 3410, 부정: 9800, 평균: (2000+9800)/2},
      {name: '40대', 긍정: 900, 부정: 4568, 평균: (2780+3908)/2},
];
const data3 = [
  {name: '약건성', 긍정: 8490, 부정: 1800, 평균: (4056+2489)/2},
      {name: '건성', 긍정: 8490, 부정: 1800, 평균: (4577+2467)/2},
      {name: '중성', 긍정: 5330, 부정: 3098, 평균: (3567+1398)/2},
      {name: '약지성', 긍정: 3410, 부정: 9800, 평균: (2987+9845)/2},
      {name: '지성', 긍정: 900, 부정: 4568, 평균: (2783+3928)/2},
];


const data4 = [
    { subject: '커버력', A: 120, B: 110, fullMark: 150 },
    { subject: '지속력', A: 98, B: 130, fullMark: 150 },
    { subject: '다크닝', A: 86, B: 130, fullMark: 150 },
    { subject: '수분감', A: 99, B: 100, fullMark: 150 },
    { subject: '피부표현', A: 85, B: 90, fullMark: 150 },
    { subject: '가격', A: 65, B: 85, fullMark: 150 },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
const styles = {
  large: {
    fontSize: 100,
    fontWeight: 'bold',
  opacity: 1
  },
  medium: {
    fontSize: 60,
    //fontStyle: 'italic',
    //fontWeight: 'bold'
    opacity: 0.6,
  },
  small: {
    opacity: 0.3,
    fontSize: 30
  }
};


  const settings = {
    start: 15000,
    count: 19178,
    duration: 4000,
    decimals: 0,
    useGroup: true,
    animation: 'up'
  };

  /*function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }*/

//const numbers = [1, 2, 3, 4, 5];

  export class Home extends Component {
    render() {
      return (


        <div align="center">
<img src="http://d9vmi5fxk1gsw.cloudfront.net/home/glowmee/upload/20160126/1453795169175.jpg" />
        <h1 className="title">디스어포어 뷰티 밤(비비크림)</h1>
          <div className="title2">
          Total Review
          </div>
        <div className="exam-div">
       <AnimationCount {...settings}/>
        </div>

      </div>
    );
    }
  }

  export class First extends Component {
    render() {
      return (
        <div align="center">
            <h1>____________</h1>
          <h3>감성시계열그래프</h3>
<div align="center">

  <LineChart width={1500} height={760} data={data}
            margin={{top: 30, right: 0, left: 0, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="5 5"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="긍정" stroke="#0033CC" />
       <Line type="monotone" dataKey="부정" stroke="#FF0033" />
        <Line type="monotone" dataKey="평균" stroke="#33CC33" />
      </LineChart>

</div>
    </div>
    );
    }
  }

  export class Second extends Component {
    componentDidMount() {
      setInterval(() => {
        this.forceUpdate();
      }, 7000);
    }
    render() {
      return (

        <div className='app-outer'>
          <div className='app-inner'>
            <TagCloud className='tag-cloud' style={{
                fontFamily: 'sans-serif',
                //fontSize: () => Math.round(Math.random() * 50) + 16,
                fontSize: 30,
                color: () => randomColor({hue: ''}),
                padding: 3
              }}>
              <div style={{
                  fontFamily: 'serif',
                  fontSize: 50,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  //color: randomColor()
                }}>가격</div>

              <div style={styles.large}>피부</div>
              <div style={styles.large}>커버</div>
              <div style={styles.large}>촉촉</div>
              <div style={styles.large}>지속력</div>
              <div style={styles.large}>지속성</div>
              <div style={styles.large}>사용</div>
              <div style={styles.large}>제품</div>
              <div style={styles.large}>밝음</div>
              <div style={styles.large}>피부표현</div>
              <CloudItem text="건성"/>
              <CloudItem text="ㅠㅠ"/>
              <CloudItem text="예쁨"/>
              <CloudItem text="보습"/>
              <CloudItem text="정리"/>
              <CloudItem text="악건성"/>
              <CloudItem text="꾸덕"/>
              <CloudItem text="아이보리"/>
              <CloudItem text="묻어남"/>
              <CloudItem text="좋은듯"/>
              <CloudItem text="매일"/>
              <CloudItem text="유목"/>
              <CloudItem text="좋을듯"/>
              <CloudItem text="나쁠듯"/>
              <CloudItem text="발리는데"/>
              <CloudItem text="당연"/>
              <CloudItem text="3호"/>
              <CloudItem text="가루"/>
              <CloudItem text="샤넬"/>
              <CloudItem text="학교"/>
              <CloudItem text="파우더처리"/>
              <CloudItem text="란제리"/>
              <CloudItem text="제품들"/>
              <CloudItem text="투명"/>
              <CloudItem text="실망"/>
              <CloudItem text="이마"/>
              <CloudItem text="코"/>
              <CloudItem text="아예"/>
                <CloudItem text="트러블"/>
                <CloudItem text="시간"/>
                <CloudItem text="파우더"/>
                <CloudItem text="적당"/>
                <CloudItem text="ㅋㅋ"/>
                <CloudItem text="기초"/>
                <CloudItem text="브러"/>
                <CloudItem text="컬러"/>
                <CloudItem text="더블웨어"/>
                <CloudItem text="제일"/>
                <CloudItem text="여드름"/>
                <CloudItem text="홍조"/>
                <CloudItem text="평소"/>
                <CloudItem text="잿빛"/>
                <CloudItem text="보송"/>
                <CloudItem text="계속"/>
                <CloudItem text="평가단"/>
                <CloudItem text="샘플"/>
                <CloudItem text="확실"/>
                <CloudItem text="좋아보"/>
                <CloudItem text="각질부각"/>
                <CloudItem text="무엇보다"/>
                <CloudItem text="뜨지"/>
                <CloudItem text="비슷"/>
                <CloudItem text="핑크베이스"/>
                <CloudItem text="매장"/>
                <CloudItem text="가격대"/>
                <CloudItem text="유분기"/>
              <div className="tag-item-wrapper">
                <div>
                  !
                </div>
                <div className="tag-item-tooltip">
                  hi
                </div>
              </div>
              <div style={styles.medium}>화장</div>
              <div style={styles.medium}>표현</div>
              <div style={styles.medium}>얼굴</div>
              <div style={styles.medium}>발림성</div>
              <div style={styles.medium}>ㅋㅋ</div>
              <div style={styles.medium}>무난</div>
              <div style={styles.medium}>수정화장</div>
              <div style={styles.medium}>23호</div>
              <div style={styles.medium}>피부톤</div>
              <div style={styles.medium}>보통</div>
              <div style={styles.medium}>2호</div>
              <div style={styles.medium}>수정용</div>
              <div style={styles.medium}>좋아보</div>
              <div style={styles.medium}>마음</div>
              <div style={styles.medium}>짱짱맨</div>
              <div style={styles.medium}>바보</div>
              <div style={styles.medium}>보통</div>
              <div style={styles.medium}>쏘쏘</div>
              <div style={styles.medium}>각질부각</div>
              <div style={styles.medium}>엄마</div>
              <div style={styles.small}>굿굿</div>
              <div style={styles.small}>뜨지</div>
              <div style={styles.small}>깔끔</div>
              <div style={styles.small}>파운데이션</div>
              <div style={styles.small}>케이스</div>
              <div style={styles.small}>바르기</div>
              <div style={styles.small}>아침</div>
              <div style={styles.small}>개인적</div>
              <div style={styles.small}>사실</div>
              <div style={styles.small}>스틱</div>
              <div style={styles.small}>건조함</div>
              <div style={styles.small}>워낙</div>
              <div style={styles.small}>쿨링감</div>
              <div style={styles.small}>극혐</div>
              <div style={styles.small}>한참</div>
              <div style={styles.small}>자신</div>
              <div style={styles.small}>그리기</div>
              <div style={styles.small}>적용</div>
              <div style={styles.small}>루나</div>
              <div style={styles.small}>무스</div>
              <div style={styles.small}>손등</div>
              <div style={styles.small}>더페</div>
              <div style={styles.small}>13호</div>
              <div style={styles.small}>티존</div>
              <div style={styles.small}>좁쌀</div>
              <div style={styles.small}>선택</div>
              <div style={styles.small}>가성비</div>
                <div style={styles.small}>사기</div>
                <div style={styles.small}>눈밑</div>
                <div style={styles.small}>소량으로</div>
                <div style={styles.small}>미세</div>
                <div style={styles.small}>남자친구</div>
                <div style={styles.small}>아토피</div>
                <div style={styles.small}>오렌지</div>
                <div style={styles.small}>노란기</div>
                <div style={styles.small}>어퓨</div>
                <div style={styles.small}>여태</div>
                <div style={styles.small}>초보양</div>
                <div style={styles.small}>한참</div>
                <div style={styles.small}>전반적</div>
                <div style={styles.small}>4시간</div>
                <div style={styles.small}>실크</div>
                <div style={styles.small}>립스틱</div>
                <div style={styles.small}>찾고</div>
                <div style={styles.small}>무너지는중</div>
                <div style={styles.small}>가루날릴</div>
                <div style={styles.small}>핑크끼</div>
                <div style={styles.small}>촉촉한거</div>
                <div style={styles.small}>파우치</div>
                <div style={styles.small}>웨지</div>
                <div style={styles.small}>냄새</div>
            </TagCloud>
          </div>
        </div>);

    }
  }

  export class Third extends Component {
    render() {
      return (
        <div align="center">
            <h1>____________</h1>
          <h3>연령별선호도</h3>

<div align="center">
        <BarChart width={1500} height={780} data={data2}
              margin={{top: 30, right: 0, left: 0, bottom: 50}}>
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey="name"/>
         <YAxis/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="긍정" fill="#8884d8" background={{ fill: '#eee' }} />
         <Bar dataKey="부정" fill="#FF9993" />
        </BarChart>
      </div>
    </div>
      )
    }
  }
  export class Forth extends Component {
    render() {
      return (
        <div align="center">
            <h1>____________</h1>
          <h3>피부별선호도</h3>

<div align="center">
  <BarChart width={1500} height={700} data={data3}
        margin={{top: 50, right: 0, left: 0, bottom: 0}}>
   <XAxis dataKey="name"/>
   <YAxis/>
   <CartesianGrid strokeDasharray="3 3"/>
   <Bar dataKey="평균" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}>
     {
        data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]}/>
        ))
      }
   </Bar>
  </BarChart>
      </div>
    </div>
      )
    }
  }
  export class Fifth extends Component {
    render() {
      return (
        <div align="center">
            <h1>____________</h1>
          <h3>제품 속성</h3>
<div align="center">
            <RadarChart cx={500} cy={400} outerRadius={300} width={1000} height={1000} data={data4}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis/>
                      <Radar name="제품속성" dataKey="A" stroke="#8884d8" fill="#FF6699" fillOpacity={0.6}/>
                    </RadarChart>
      </div>
    </div>
      )
    }
  }
  class Item extends Component {
    render() {
      return (<div>
        <h3>{this.props.match.params.id}10대 그래프</h3>
      </div>);
    }
  }
/*
  export function changeNumberOfData(data) {
    if (Array.isArray(data)) {
      return data.map(changeNumberOfData);
    }

    if (typeof data === 'object') {
      return _.mapValues(data, val => {
        if (typeof val === 'number') {
          return parseInt(val * Math.random() * 2, 10);
        }

        return changeNumberOfData(val);
      });
    }

    return data;
  }
*/
