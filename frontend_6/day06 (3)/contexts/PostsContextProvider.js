import React, {useState} from 'react'
import { createContext  } from "react";
import { format } from 'date-fns'

export const PostsContext = createContext({});

const boards = [
    {
        id:1,
        title : '비트맥시 맥스 카이저 “테더(USDT)는 달러페깅 아냐, 디페깅은 거래소 탓”–커뮤니티 “무슨 말이야”',
        body: '그는 “테더는 미국 달러에 페깅 된 게 아니다”면서 “테더는 가상 달러”라고 주장했다.\n그는 자국 통화를 다른 국가화폐에 페깅(고정)해 안정 시키려는 국가는 위험하고 동요하며 예측할 수 없는 근본적인 경제 위험에 노출된다고 말했다.\n  맥스 카이저는 “USDT는 가상 $USD로 거의 전적으로 미국 재무부 채권으로 뒷받침 된다”고 설명했다.',
        datetime:'2023-07-16'
    },
    {
        id:2,
        title : '파산한 크레디트 스위스 조사 자료 50년 동안 비밀 유지–스위스 의회',
        body: `로이터통신은 조사위원회가 일반적으로 30년인 기밀 조사 적용 기준보다 긴 기간을 적용해 관련 파일을 스위스 연방 기록보관서에 넘기려 한다며, 이는 대중들의 큰 관심을 불러 일으키고 있다고 지적했다.\n
        이번 조사는 지난 3월 UBS가 크레디트 스위스를 긴급 인수하기 전 스위스 정부와 금융 감독 당국, 중앙은행의 활동에 초점을 맞춰 진행할 예정이다.\n
        이번 조사는 스위스 역사상 다섯 번째로 진행되는 것이다. 의원들로 구성된 위원회는 스위스 내각, 재무부 및 기타 국가 기관에 광범위한 자료를 요구할 수 있는 권한을 가지고 있다.\n
        위원회는 정책을 설명하는 전략 문서에서 “조사가 완료된 후 파일은 연방 기록 보관소에 넘겨질 것이며 50년의 보호 기간을 가진다”고 설명했다. 스위스 의회는 50년 간의 비밀 요구 사항이 현지 신문인 아르가우어 차이퉁에 의해 처음 보도된 후 언급을 거부했다.`,
        datetime:'2023-06-29'
    },
    {
        id:3,
        title : '‘원투펀치’ 겐슬러 쓰러뜨릴 판결 또 나온다… “그레이스케일 BTC 신탁, ETF로 전환하라”',
        body: `밉상 중의 밉상 개리 겐슬러 증권거래위원장(SEC)을 납작하게 만든 이 판결은 비록 부분 승소이지만 암호화폐 업계에 단비 같은 소식이 분명합니다.\n
        겐슬러를 KO 시킬 수 있는 또 다른 판결이 기다리고 있습니다. 그레이스케일이 제기한 소송인데요. 비트코인 신탁(GBTC)을 ETF로 전환하겠다는 내용입니다.`,
        datetime:'2023-05-15'
    }
]

const PostsContextProvider = ({children}) => {
    const [posts, setPosts] = useState(boards);

    // 새글을 저장하기 위한  state
    const [title, setTitle] = useState("");
    const [body, setBody ] = useState("");

    const addPostHandle = ()=>{
        // 날짜 만들기 
        const today = new Date();
        const datetime = format(today, 'yyyy-MM-dd');
        
        // id만들기 
        const id = posts[posts.length-1].id + 1; 

        const newPost = { id , title, body, datetime }

        // posts.push(newPost)
        setPosts([newPost, ...posts])
        console.log( posts.length )
    
        setTitle("");
        setBody("");
    }
    
    const submitHandle = (event)=>{
        event.preventDefault(); 
        // console.log( title, body )
    }

    const deletePostHandle = (id)=>{
        // console.log(id)
        const filtered = posts.filter(post=>post.id !== Number(id));
        setPosts([...filtered]);

        /*
        // javascript 
        const find = posts.find(post=>post.id === Number(id));
        const index = posts.indexOf(find);
        posts.splice(index, 1);
        */
    }

  return (
            <PostsContext.Provider 
                    value={{ posts, setPosts, 
                             title, setTitle, 
                             body, setBody, 
                             addPostHandle, 
                             submitHandle, 
                             deletePostHandle }}
            >
                {children}
            </PostsContext.Provider>
  )
}

export default PostsContextProvider