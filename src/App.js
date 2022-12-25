import Header from './component/Hd';
import Footer from './component/Ft';
import Worksswiper from './component/Worksswiper';
import Preinterview from './component/Preinterview';

function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Worksswiper></Worksswiper>
      <Preinterview contentid="pre-interview" leng="kr" objnm="predb1" title="먼저 답하기"></Preinterview>
      <Footer></Footer>
    </div>
  );
}

export default App;
