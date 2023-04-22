const gnbBtn = document.querySelector('.gnb-btn');
let gnbBtnToggle = false;

gnbBtn.addEventListener('click', () => {
    if (!gnbBtnToggle) {
        document.querySelector('.gnb-wrap').classList.add('active');
    } else {
        document.querySelector('.gnb-wrap').classList.remove('active');
    }
    gnbBtnToggle = !gnbBtnToggle;
})


const acBtns = document.querySelectorAll('.account-contents .buttons button');
const forms = document.querySelectorAll('.account-contents form');
acBtns.forEach((btn, index) => { // 0, 1
    btn.addEventListener('click', () => {
        btn.classList.add('active');
        // 0 
        acBtns[(index + 1) % 2].classList.remove('active');

        forms[index].classList.add('active');
        forms[(index + 1) % 2].classList.remove('active');
    })
})

//const closeForm = document.querySelector("#closeForm");
// css 규칙은 id 중복 가능한가? 중복불가하므로 굳이 변수를 선언하지 않았다면 직접사용이 가능


// 여러 개발자가 협업하다 보면 변수명은 중복 가능성이 있고 
// 아이디 값을 변수로 선언했다면 더이상 아이디를 변수로 사용하고
// 구조 아이디 값으로 사용할 수 없음


const Maybelline_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

// fetch data list 
const createContent = (data, num) => {
    const content = document.createElement('div');
    content.classList.add('content');
    if (num == 5) {
        content.classList.add("new");
    }

    const img = document.createElement('img');
    img.setAttribute('src', data.image_link);
    img.setAttribute('title', data.description.slice(0, 200));

    const caption = document.createElement('div');
    caption.classList.add('caption');
    caption.innerHTML = data.product_link;

    content.append(img);
    content.append(caption);

    // document.querySelector('.contents').append(content);
    return content

}

//fetch
const getDatas = async () => {
    const response = await fetch(Maybelline_URL);
    const datas = await response.json();
    // console.log(datas);
    datas.forEach((data) => {
        let num = Math.floor(Math.random() * 10);
        const el = createContent(data, num);
        document.querySelector('.contents').append(el);
    })

    // const contents = document.querySelectorAll('.content');
    // contents.forEach(( content, index )=>{
    //     const num = Math.floor(Math.random() * 5);
    //     content.classList.remove('new');

    // })
}
getDatas();
 
//LOGIN
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // 원래 기능 제거 //bubble 방지
    document.querySelector('.account-container').classList.add('active');
    acBtns[0].click(); //event trigger

});
registerBtn.addEventListener('click', (event) => {
    event.preventDefault(); // 원래 기능 제거 //bubble 방지
    document.querySelector('.account-container').classList.add('active');
    acBtns[1].click(); //event trigger
});

/** 로그인 창 닫기 */
closeForm.addEventListener('click', () => {
    document.querySelector('.account-container').classList.remove('active');
})
