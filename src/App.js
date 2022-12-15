import Header from './component/Hd';
import Footer from './component/Ft';
import Worksswiper from './component/Worksswiper';

function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Worksswiper></Worksswiper>
      <Preinterview ></Preinterview>      
      <Preinterview contentid="me"></Preinterview>
      <Preinterview contentid="preInterview"></Preinterview>
      <Footer></Footer>
    </div>
  );
}

const Preinterview = (props) => {
  const interviewjson = [{
    subject : '코딩보다 이게 더 어려워',
    content : '일단 만나봅시다! 사장'
  },
  {
    subject : '사진인터뷰의 용도를 잘 이해하고 기입하셔야합니다.',
    content : `그들이 나에게 요구하는것이 나한테 있는지 여부파악하고 잘 써야합니다.
    없는 거는 없다 있는거는 있다. 
    나만 나중에 피곤한 일이 없도록 써야합니다.`
  }]

  return(
    
    <section className="section py-5 text-center" id={props.contentid}>
        <h3>규칙위에 틀을 깨는 개발자가 되겠습니다.</h3>
        <div className="py-5 container-md text-start">
          <ul>
             {
              interviewjson.map(function(value, index){
                  //this조심할것
                  return(
                    <li  key={'interview'+index}>
                      <strong className='d-block border-bottom py-2 ' role="button" onClick={ e => { console.log( e.target.nextSibling.classList.toggle('d-none') ) }}>{value.subject}</strong>
                      <p className='py-5 d-none'>{value.content}</p>
                    </li>
                  )
              }
              )
             }
          </ul>
        </div>
    </section>
  )
}

export default App;
