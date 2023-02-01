const translations = {
    en: {
      Thank: "Thank you for trusting us.",
      You: "You will be notified when we launch the website.",
      Close: "Close",
      OR: ` OR Countine to Our Website`,
      Subscribe: `Subscribe`,
      error: `Invalid email`,
      Please: `Please make sure the email you entered is valid`,
      
    },
    ar: {
        Thank: "شكراً لثقتك بنا.",
        You: "سيتم مراسلتك عندما نقوم بإطلاق الموقع الالكتروني.",
        Close: "إغلاق",
        OR: ` أو يمكنك المتابعة لموقعنا الرسمي`,
        Subscribe: `اشترك الآن`,
        error: `خطأ في البريد الإلكتروني`,
        Please: `يرجى التحقق من عنوان البريد الإلكتروني الذي أدخلته`,
    },
  };

let wrapper = document.querySelector('#wrapper')
let EN_btn = document.querySelector('#EN')
let AR_btn = document.querySelector('#AR')
let footer = document.querySelector('#footer')
let footer_p = document.querySelector('#footer_p')
let counterr = document.querySelector('#counter')
let container = document.querySelector('#container')
let counter_block = document.querySelector('#counter_block')
let contact = document.querySelector('#contact')
let socialIcons = document.querySelector('#socialIcons')
let popUp = document.querySelector('#popUp')
let popUp_text = document.querySelector('.popUp_text')
let closee = document.querySelector('.close')
let popUpFalse = document.querySelector('#popUpFalse')
let popUpFalse_text = document.querySelector('.popUpFalse_text')
let closea = document.querySelector('#closea')
let closing = document.querySelector('.closing')
let close_web = document.querySelector('.close_a')
let subscribe_btn_M = document.querySelectorAll('.btn')
let bg_img = document.querySelector('#bg_img')
let popf = document.querySelector('#popf')
let popff = document.querySelector('#popff')
let btn = document.querySelector('.btn')
let a = document.querySelector('#a')
let form = document.querySelector('#fupForm')


let htmlEN = `
<section>
<h1 class="title">New Era will Begin</h1>
<p class="p1"> <strong>focal app solution</strong> will be a vast <br class="MB"> business gate in Syria,<br>
    a safe place for you if you are: <br class="MB">Business owner, Freelancer,<br>
    job seeker, designer, marketer,<br class="MB"> developer, or blogger.</p>
<p class="p2">Also you can check our company<br class="MB"> website from <a href="https://focal-x.com/" target="_blank"><span>HERE</span></a></p>
</section>
 `
let htmlAR = `
<section>
 <h1 class="title">عصر جديد سيبدأ معنا</h1>
 <p class="p1" dir="rtl">
 منصة
 <strong>focal app solution</strong> 
 بوابة واسعة للأعمال في 
 <br class="MB"> 
  <span class="MB">
  الجمهورية العربية السورية </span>
  <br class="MB"> 
  <span class="not_MB">سورية</span>
مكان آمن لك إن كنت: صاحب عمل أو شركة، مُستقل،
<br>
باحث عن وظيفة، مصمم، مسّوق، مبرمج، أو  مُدون.
<br>
 </p>
 <p class="p2">تعرف علينا أكثر وقم بزيارة موقع شركتنا من <a href="https://focal-x.com/" target="_blank"><span>هنا</span></a></p>
</section>
`
if (window.matchMedia('screen and (max-width: 500px)').matches) {
    bg_img.src='./img/mainbackgroundM2.png'
}
if (!window.matchMedia('screen and (max-width: 500px)').matches) {
    bg_img.src='./img/mainbackground.jpg'
}
EN_btn.addEventListener('click',()=>{
    EN_btn.classList.add('active')
    EN_btn.classList.remove('de-active')
    AR_btn.classList.remove('active')
    AR_btn.classList.add('de-active')
    form.removeAttribute('dir');
    popUp.classList.add('popUp')
    popUp.classList.remove('popUp_AR')
    popUp_text.classList.remove('popUp_text_a')
    popUp_text.classList.add('popUp_text')
    popUp_text.removeAttribute('dir')
    popf.classList.remove('popf-a');
    a.removeAttribute('dir');
    a.classList.remove('a-a');
    a.classList.add('w');
    closee.removeAttribute('dir');
    closee.classList.remove('closeaa');
    popUpFalse.classList.add('popUpFalse')
    popUpFalse.classList.remove('popUpFalse_AR')
    popUpFalse_text.classList.remove('popUpFalse_text_a')
    popUpFalse_text.classList.add('popUpFalse_text')
    popUpFalse_text.removeAttribute('dir')
    popff.classList.remove('popff-a');
    closea.removeAttribute('dir');
    closea.classList.remove('closeaaa');
    setLanguage("en");
    wrapper.innerHTML=htmlEN;
    wrapper.classList.remove('wrapper_AR')
    document.getElementById("subscribe").innerHTML=`<p class="form_title">Subscribe to the newsletter <br class="MB"> to stay in latest news
    </p>`;
    sb.classList.remove('sb_AR')
    btn.removeAttribute('lang');
    footer.classList.remove('AR_footer')
    if (!window.matchMedia('screen and (max-width: 500px)').matches) {
        counterr.style.columnGap='33px';
    }

    if (window.matchMedia('screen and (max-width: 500px)').matches) {
        counter_block.classList.add('not_MB')
        counterr.classList.add('counter_MB')
        counterr.style.marginTop='15px';
        contact.innerHTML='<p class="MB" id="contact">Keep In Touch:</p>'
        socialIcons.classList.remove('socialIcons_AR')
        footer_p.innerHTML='<p>© 2021 - 2022 <a href="https://focal-x.com/" target="_blank">focal X L.L.C</a> All Right Reserved</p>'
    }    
})

AR_btn.addEventListener('click',()=>{
    AR_btn.classList.add('active')
    AR_btn.classList.remove('de-active')
    EN_btn.classList.remove('active')
    EN_btn.classList.add('de-active')
    form.setAttribute('dir' , 'rtl');
    setLanguage("ar");
    wrapper.innerHTML=htmlAR;
    wrapper.classList.add('wrapper_AR');
    document.getElementById("subscribe").innerHTML=`<p dir="rtl" class="form_title">اشترك الآن في النشرة الأخبارية ليصلك كل جديد
    <br class="MB">
    عن أخبار منصتنا
    <span dir="rtl" class="MB">
    و يوم انطلاقها.
    </span>
    </p>`;
    sb=document.getElementById("sb");
    sb.classList.add('sb_AR');
    btn.setAttribute('lang' , 'ar');
    footer.classList.add('AR_footer')
    popUp_text.setAttribute('dir' , 'rtl');
    popUp_text.classList.add('popUp_text_a');
    popUp_text.classList.remove('popUp_text');
    popf.classList.add('popf-a');
    popUpFalse_text.setAttribute('dir' , 'rtl');
    popUpFalse_text.classList.add('popUpFalse_text_a');
    popUpFalse_text.classList.remove('popUpFalse_text');
    popff.classList.add('popff-a');
    a.setAttribute('dir' , 'rtl');
    a.classList.add('a-a');
    a.classList.remove('w');
    closee.setAttribute('dir' , 'rtl');
    closee.classList.add('closeaa');
    closea.setAttribute('dir' , 'rtl');
    closea.classList.add('closeaaa');
    if (!window.matchMedia('screen and (max-width: 500px)').matches) {
        counterr.style.columnGap='37px';
        popUp_text.setAttribute('dir' , 'rtl');
        popUp_text.classList.add('popUp_text_a');
        popf.classList.add('popf-a');
        a.setAttribute('dir' , 'rtl');
        a.classList.add('a-a');
        closee.setAttribute('dir' , 'rtl');
        closee.classList.add('closeaa');
        popUpFalse_text.setAttribute('dir' , 'rtl');
        popUpFalse_text.classList.add('popUpFalse_text_a');
        popff.classList.add('popff-a');
        closea.setAttribute('dir' , 'rtl');
        closea.classList.add('closeaaa');
    }
   
    if (window.matchMedia('screen and (max-width: 500px)').matches) {
        counterr.style.columnGap='21px';
        counter_block.classList.add('not_MB')
        counterr.classList.add('counter_MB')
        counterr.style.marginTop='22px';
        contact.innerHTML='<p class="contact_AR" dir="rtl">ابقوا على إطلاع من خلال متابعتنا:</p>'
        socialIcons.classList.add('socialIcons_AR')
        footer_p.innerHTML='<p dir="rtl">©2021 - 2022 جميع حقوق النشر محفوظة لـــ <a href="https://focal-x.com/" target="_blank">focal X L.L.C</a> </p>'
        popUp.classList.add('popUp_AR')
        popUpFalse.classList.add('popUpFalse_AR')
    }
})

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-tr]");
    const placeholder = document.querySelector("[placeholder]");
    elements.forEach((element) => {
      const translationKey = element.getAttribute("data-tr");
      element.textContent = translations[language][translationKey];
    });
    if(language==`ar`){const email =document.getElementById("email");
    email.setAttribute("placeholder", `سّجل من خلال بريدك الالكتروني`);}
    if(language==`en`){const email =document.getElementById("email");
    email.setAttribute("placeholder", `Enter your E-mail to subscribe`);}
    }
