const nodemailer = require("nodemailer");

export default async function (req, res) {
  const { attachments, subject, data } = req.body;
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "no_reply@bdata.ca",
      pass: "E=Q8bq>P",
    },
  });
  let mailOptions = {
    from: "no_reply@bdata.ca",
    to: "info@bdata.ca",
    subject: subject,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" style="height: 100%;">
         <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <title>${subject}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
         </head>
         <style>
            body{
            font-family: 'Roboto', sans-serif;
            }
         </style>
         <body  leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height: 100%;background-image:url('./Assets/bg-img.svg');background-size:100px 470px ;background-attachment: fixed  ;background-position: center right ;background-repeat: no-repeat;background-color: #f5f9ff;">
            <center >
               <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTbl" style="table-layout: fixed;max-width:100% !important;width: 100% !important;min-width: 100% !important;">
                  <tr>
                     <td align="center" valign="top" id="bodyCell">
                        <table  border="0" cellpadding="0" cellspacing="0" width="100%" id="emailBody">
                           <tr>
                              <td align="center" valign="top">
                                 <table border="0" cellpadding="0" cellspacing="0" width="100%" style="color:#FFFFFF;" >
                                    <tr>
                                       <td align="center" valign="top">
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" >
                                             <tr>
                                                <td align="center" valign="top" width="500">
                                                   <table border="0" cellpadding="30" cellspacing="0" width="100%">
                                                      <tr>
                                                         <td align="center" valign="top" class="textContent">
                                                            <svg width="111" height="38" viewBox="0 0 111 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                               <path d="M10.8656 1.26488L1.98193 6.8596C1.81421 6.96575 1.67675 7.11317 1.58278 7.28763C1.48882 7.4621 1.44156 7.65769 1.44548 7.85566C1.4494 8.05363 1.5044 8.24727 1.6052 8.4179C1.706 8.58853 1.8492 8.73043 2.02099 8.8299L11.1976 14.1327C11.3839 14.2409 11.5969 14.2952 11.8126 14.2891C12.0282 14.2831 12.2379 14.2171 12.4178 14.0986L18.08 10.3769C18.3278 10.2051 18.4984 9.94351 18.5554 9.64802C18.6124 9.35252 18.5512 9.04652 18.3849 8.79538C18.2186 8.54423 17.9604 8.3678 17.6654 8.30381C17.3704 8.23981 17.062 8.29333 16.806 8.45287L11.7418 11.7804L4.83498 7.78878L12.1054 3.20355C12.9372 2.67426 13.8903 2.36445 14.8753 2.30318C15.8602 2.24191 16.8445 2.43123 17.7359 2.85332L25.9582 7.07852L12.0957 16.536L7.21452 13.9745C6.45922 13.5648 5.60874 13.3613 4.74914 13.3845C3.88954 13.4076 3.05132 13.6568 2.31936 14.1066C1.58739 14.5564 0.98766 15.1909 0.580834 15.946C0.174008 16.7011 -0.0254795 17.5499 0.00260401 18.4065V28.9974C0.00257787 29.2107 0.0618884 29.4197 0.173909 29.6013C0.28593 29.783 0.446298 29.9301 0.637178 30.0264L16.1714 37.8662C16.3499 37.9562 16.5487 37.9987 16.7484 37.9893C16.9482 37.9799 17.1421 37.919 17.3112 37.8127L31.7814 28.7299C31.9463 28.6262 32.0822 28.4825 32.1765 28.3124C32.2708 28.1423 32.3204 27.9513 32.3208 27.7569V10.6931C32.3204 10.4871 32.2646 10.2848 32.1593 10.1075C32.0539 9.93022 31.9028 9.78433 31.7216 9.68499C31.5405 9.58565 31.3359 9.5365 31.1292 9.54268C30.9226 9.54887 30.7213 9.61018 30.5465 9.72017L15.5174 19.1654C14.978 19.4938 15.0293 20.4741 15.0293 20.479L15.0488 27.9199C15.0488 29.1191 17.3625 29.0194 17.3625 27.9199V20.7368L30.0169 12.785V27.1245L16.6425 35.5189L2.32606 28.292V18.3895C2.32606 18.3749 2.32606 18.3603 2.32606 18.3457C2.30835 17.8925 2.41186 17.4428 2.62603 17.0427C2.84021 16.6426 3.15732 16.3065 3.54483 16.0689C3.93233 15.8312 4.37626 15.7005 4.83114 15.6903C5.28602 15.68 5.73547 15.7906 6.13336 16.0105L11.6564 18.9027C11.8424 19.0003 12.0515 19.0454 12.2614 19.0334C12.4712 19.0214 12.6738 18.9528 12.8474 18.8346L28.882 7.88855C29.047 7.77588 29.1799 7.62243 29.2677 7.4433C29.3555 7.26416 29.3951 7.06542 29.3828 6.86643C29.3706 6.66745 29.3067 6.47502 29.1975 6.30798C29.0884 6.14093 28.9376 6.00499 28.76 5.91336L18.7975 0.80516C17.7059 0.27225 16.5059 -0.00322023 15.2904 2.84028e-05C13.7358 0.00129973 12.2131 0.439697 10.8974 1.26488" fill="#00B0DF"></path>
                                                               <path d="M40.0868 26.6719V30.7851H39.5547V26.6719H40.0868Z" fill="black"></path>
                                                               <path d="M51.326 16.6076C51.3504 17.3492 51.1761 18.0839 50.8208 18.736C50.4958 19.2997 50.0374 19.7756 49.4858 20.1226C48.9028 20.4826 48.261 20.7379 47.5895 20.8766C46.8733 21.03 46.1426 21.1066 45.41 21.1053H39.2305V5.64453H45.41C46.028 5.64647 46.6443 5.70836 47.2502 5.82937C47.8512 5.9433 48.4288 6.15711 48.9587 6.46184C49.5148 6.77501 49.9718 7.2373 50.2777 7.79625C50.5835 8.3552 50.726 8.98841 50.689 9.62401C50.7186 10.3942 50.4701 11.1493 49.9886 11.7524C49.5054 12.3258 48.8664 12.7481 48.1484 12.9687V13.0125C48.5792 13.0831 48.9965 13.2193 49.3857 13.4163C49.9793 13.7121 50.4765 14.1696 50.8195 14.7358C51.1625 15.3021 51.3373 15.9537 51.3236 16.615L51.326 16.6076ZM47.0721 10.13C47.0874 9.90219 47.0391 9.67462 46.9327 9.47243C46.8263 9.27024 46.6659 9.10128 46.4692 8.98427C45.9156 8.71043 45.2996 8.58634 44.6827 8.62432H42.8523V11.8132H44.8682C45.444 11.8479 46.0159 11.6988 46.501 11.3876C46.6943 11.2425 46.8486 11.0519 46.9499 10.8329C47.0513 10.6139 47.0966 10.3732 47.0818 10.1324L47.0721 10.13ZM47.5846 16.2671C47.6089 15.9976 47.5523 15.727 47.4219 15.4896C47.2915 15.2523 47.0933 15.0589 46.8524 14.9341C46.2477 14.6621 45.5872 14.5354 44.9244 14.5644H42.8523V18.1012H44.9561C45.2611 18.1006 45.5655 18.0754 45.8664 18.0258C46.1638 17.9805 46.4521 17.8885 46.7206 17.7533C46.9963 17.6188 47.2258 17.4058 47.38 17.1412C47.5342 16.8767 47.6063 16.5725 47.587 16.2671" fill="black"></path>
                                                               <path d="M68.2817 13.3312C68.3132 14.5429 68.0538 15.7446 67.5251 16.8363C67.0524 17.7862 66.3708 18.6176 65.5311 19.2688C64.697 19.9073 63.7487 20.382 62.7367 20.6675C61.7113 20.9643 60.6488 21.115 59.581 21.115H53.7969V5.6543H59.4102C60.5027 5.6537 61.5914 5.78185 62.6537 6.03615C63.6762 6.27176 64.6433 6.70215 65.5019 7.30353C66.3565 7.91883 67.0483 8.73189 67.5178 9.67275C68.0625 10.8173 68.3252 12.0748 68.2841 13.3409L68.2817 13.3312ZM64.3792 13.3409C64.4051 12.5938 64.2589 11.8508 63.9521 11.1687C63.6918 10.6232 63.3003 10.1502 62.8124 9.7919C62.3254 9.44521 61.7748 9.1973 61.1918 9.06219C60.5787 8.91573 59.9504 8.84225 59.3199 8.84327H57.4577V17.8702H59.232C59.8857 17.8727 60.5372 17.7959 61.1722 17.6415C61.7645 17.5011 62.3228 17.2448 62.8148 16.8875C63.3035 16.521 63.6949 16.0407 63.9545 15.4888C64.2596 14.8095 64.4056 14.0701 64.3816 13.3263" fill="black"></path>
                                                               <path d="M80.7531 21.1053L79.5474 18.0696H73.5436L72.4039 21.1053H68.3281L74.8347 5.64453H78.4711L84.9118 21.1053H80.7531ZM76.5894 9.77248L74.6175 15.0801H78.5224L76.5894 9.77248Z" fill="black"></path>
                                                               <path d="M91.5299 8.83496V21.1067H87.7836V8.83496H83.3906V5.64844H95.901V8.83496H91.5299Z" fill="black"></path>
                                                               <path d="M106.823 21.1053L105.618 18.0696H99.614L98.4742 21.1053H94.3984L100.905 5.64453H104.542L110.982 21.1053H106.823ZM102.66 9.77248L100.688 15.0801H104.593L102.66 9.77248Z" fill="black"></path>
                                                               <path d="M44.4146 27.8777C44.6624 28.1642 44.7869 28.5365 44.7612 28.9139V30.7747H44.2292V28.9601C44.246 28.6945 44.1585 28.4327 43.9851 28.2304C43.8981 28.1437 43.7939 28.0761 43.6791 28.0321C43.5644 27.9882 43.4416 27.9687 43.3188 27.975C43.1882 27.9689 43.0578 27.991 42.9365 28.0396C42.8152 28.0883 42.7059 28.1626 42.6159 28.2571C42.4258 28.4885 42.3315 28.7834 42.3523 29.0817V30.7845H41.8203V27.5833H42.3523V28.3422C42.4229 28.0972 42.5776 27.8846 42.7892 27.7415C43.0058 27.5981 43.2615 27.525 43.5214 27.5323C43.6861 27.5255 43.8505 27.5526 44.0042 27.6121C44.1579 27.6715 44.2976 27.762 44.4146 27.8777V27.8777Z" fill="black"></path>
                                                               <path d="M49.046 27.8778C49.2929 28.1647 49.4165 28.5369 49.3901 28.914V30.7748H48.8581V28.9602C48.8752 28.6946 48.7876 28.4327 48.614 28.2304C48.5271 28.1438 48.4228 28.0762 48.308 28.0322C48.1933 27.9882 48.0705 27.9688 47.9477 27.9751C47.8171 27.9692 47.6868 27.9913 47.5655 28.04C47.4443 28.0886 47.3349 28.1628 47.2448 28.2572C47.0547 28.4886 46.9604 28.7835 46.9812 29.0818V30.7846H46.4492V27.5834H46.9812V28.3423C47.0519 28.0973 47.2065 27.8847 47.4181 27.7415C47.6347 27.5983 47.8904 27.5253 48.1503 27.5324C48.3154 27.5253 48.4803 27.5523 48.6344 27.6117C48.7885 27.6712 48.9287 27.7617 49.046 27.8778V27.8778Z" fill="black"></path>
                                                               <path d="M53.3811 27.7399C53.6238 27.8709 53.8232 28.0695 53.9546 28.3115C54.098 28.5808 54.1694 28.8823 54.1621 29.1871C54.1694 29.4904 54.098 29.7904 53.9546 30.058C53.8226 30.2989 53.6233 30.4966 53.3811 30.6272C53.1245 30.7578 52.8406 30.826 52.5525 30.826C52.2644 30.826 51.9805 30.7578 51.724 30.6272C51.4814 30.496 51.2815 30.2985 51.1479 30.058C51.0029 29.7909 50.9305 29.4907 50.938 29.1871C50.9306 28.882 51.0029 28.5803 51.1479 28.3115C51.281 28.0698 51.4809 27.8715 51.724 27.7399C51.9805 27.6092 52.2644 27.541 52.5525 27.541C52.8406 27.541 53.1245 27.6092 53.3811 27.7399V27.7399ZM52.0241 28.1364C51.8575 28.2269 51.7209 28.3638 51.6311 28.5304C51.5332 28.7343 51.4825 28.9574 51.4825 29.1835C51.4825 29.4095 51.5332 29.6328 51.6311 29.8367C51.7209 30.0033 51.8575 30.1402 52.0241 30.2307C52.1878 30.315 52.3695 30.3589 52.5537 30.3589C52.738 30.3589 52.9196 30.315 53.0833 30.2307C53.2499 30.1402 53.3865 30.0033 53.4763 29.8367C53.5743 29.6328 53.6252 29.4096 53.6252 29.1835C53.6252 28.9574 53.5743 28.7342 53.4763 28.5304C53.3865 28.3638 53.2499 28.2269 53.0833 28.1364C52.9196 28.0521 52.738 28.0081 52.5537 28.0081C52.3695 28.0081 52.1878 28.0521 52.0241 28.1364V28.1364Z" fill="black"></path>
                                                               <path d="M56.9853 30.2168L57.9811 27.5801H58.5546L57.2953 30.7812H56.6632L55.4062 27.5801H55.9798L56.9853 30.2168Z" fill="black"></path>
                                                               <path d="M62.0555 27.7764C62.2709 27.9301 62.4302 28.1495 62.5095 28.4015V27.5842H63.0415V30.7853H62.5095V29.9656C62.4302 30.2176 62.2709 30.437 62.0555 30.5907C61.8242 30.7547 61.546 30.84 61.2623 30.834C60.9949 30.838 60.7316 30.769 60.5008 30.6345C60.2748 30.4988 60.0926 30.3012 59.9761 30.0653C59.8438 29.7943 59.7785 29.4958 59.7857 29.1945C59.7785 28.8917 59.8437 28.5915 59.9761 28.3188C60.092 28.0818 60.2742 27.8833 60.5008 27.7472C60.7316 27.6127 60.9949 27.5437 61.2623 27.5478C61.5444 27.5375 61.8224 27.6176 62.0555 27.7764V27.7764ZM60.6277 28.3285C60.4363 28.5746 60.3325 28.8771 60.3325 29.1884C60.3325 29.4998 60.4363 29.8022 60.6277 30.0483C60.7295 30.1529 60.8524 30.2347 60.9883 30.2884C61.1242 30.342 61.27 30.3663 61.416 30.3596C61.6137 30.3627 61.8086 30.3122 61.9798 30.2137C62.1457 30.1161 62.2803 29.9736 62.3679 29.8027C62.4651 29.6122 62.5138 29.4008 62.5095 29.1872C62.5135 28.9728 62.4649 28.7607 62.3679 28.5693C62.2813 28.3977 62.1465 28.2548 61.9798 28.1582C61.808 28.0614 61.6134 28.0119 61.416 28.0148C61.2702 28.0078 61.1245 28.0316 60.9886 28.0849C60.8527 28.1382 60.7297 28.2196 60.6277 28.3237V28.3285Z" fill="black"></path>
                                                               <path d="M66.3075 30.3191V30.7861H65.9097C65.6431 30.8034 65.3803 30.7161 65.1775 30.5428C65.0866 30.4355 65.0182 30.3111 64.9763 30.177C64.9344 30.0429 64.9199 29.9018 64.9335 29.762V28.0349H64.4453V27.5752H64.9335V26.7773H65.4728V27.5752H66.3075V28.0349H65.4752V29.7742C65.4584 29.9247 65.4994 30.0759 65.5899 30.1974C65.7019 30.2852 65.8437 30.3262 65.9854 30.3117L66.3075 30.3191Z" fill="black"></path>
                                                               <path d="M67.8453 26.3974C67.9205 26.3386 68.0133 26.3066 68.1089 26.3066C68.2044 26.3066 68.2973 26.3386 68.3725 26.3974C68.4039 26.4282 68.4289 26.4649 68.446 26.5054C68.463 26.5459 68.4717 26.5894 68.4717 26.6333C68.4717 26.6773 68.463 26.7207 68.446 26.7612C68.4289 26.8018 68.4039 26.8385 68.3725 26.8693C68.2973 26.9281 68.2044 26.96 68.1089 26.96C68.0133 26.96 67.9205 26.9281 67.8453 26.8693C67.8139 26.8385 67.7889 26.8018 67.7719 26.7612C67.7548 26.7207 67.7461 26.6773 67.7461 26.6333C67.7461 26.5894 67.7548 26.5459 67.7719 26.5054C67.7889 26.4649 67.8139 26.4282 67.8453 26.3974V26.3974ZM68.3725 27.5723V30.7758H67.8405V27.5747L68.3725 27.5723Z" fill="black"></path>
                                                               <path d="M72.6959 27.8776C72.9438 28.1641 73.0683 28.5364 73.0425 28.9138V30.7746H72.5104V28.9601C72.5273 28.6945 72.4397 28.4327 72.2663 28.2303C72.1794 28.1436 72.0752 28.0761 71.9604 28.0321C71.8457 27.9881 71.7229 27.9687 71.6001 27.9749C71.4695 27.9691 71.3391 27.9911 71.2179 28.0398C71.0966 28.0885 70.9873 28.1627 70.8972 28.2571C70.7071 28.4884 70.6128 28.7834 70.6337 29.0817V30.7844H70.1016V27.5833H70.6337V28.3422C70.7045 28.0972 70.859 27.8847 71.0705 27.7414C71.287 27.598 71.5428 27.525 71.8027 27.5322C71.9674 27.5256 72.1317 27.5528 72.2853 27.6122C72.439 27.6717 72.5788 27.762 72.6959 27.8776V27.8776Z" fill="black"></path>
                                                               <path d="M76.8523 27.7764C77.0677 27.9301 77.227 28.1495 77.3062 28.4015V27.5842H77.8383V30.8389C77.8432 31.1132 77.7786 31.3842 77.6504 31.627C77.5295 31.8525 77.3467 32.0389 77.1232 32.1645C76.8812 32.2968 76.6084 32.3631 76.3325 32.3567C75.9546 32.3727 75.582 32.2632 75.2733 32.0454C75.001 31.838 74.8156 31.5372 74.7534 31.2013H75.2806C75.3364 31.405 75.4614 31.583 75.6344 31.7048C75.8332 31.835 76.068 31.8996 76.3056 31.8896C76.4378 31.8943 76.5696 31.8721 76.693 31.8245C76.8163 31.7768 76.9286 31.7046 77.0231 31.6124C77.121 31.5097 77.1966 31.388 77.2453 31.2549C77.294 31.1219 77.3147 30.9803 77.3062 30.8389V29.9656C77.227 30.2176 77.0677 30.437 76.8523 30.5907C76.621 30.7547 76.3429 30.84 76.0591 30.834C75.7918 30.838 75.5284 30.769 75.2976 30.6345C75.0717 30.4987 74.8896 30.3011 74.7729 30.0653C74.6407 29.7943 74.5755 29.4958 74.5826 29.1945C74.5754 28.8917 74.6407 28.5915 74.7729 28.3188C74.889 28.0819 75.0712 27.8834 75.2976 27.7472C75.5284 27.6127 75.7918 27.5437 76.0591 27.5478C76.3413 27.5375 76.6192 27.6176 76.8523 27.7764V27.7764ZM75.4246 28.3285C75.2332 28.5746 75.1293 28.8771 75.1293 29.1884C75.1293 29.4998 75.2332 29.8022 75.4246 30.0483C75.5263 30.153 75.6492 30.2349 75.7851 30.2886C75.921 30.3423 76.0668 30.3665 76.2129 30.3596C76.4106 30.3628 76.6055 30.3124 76.7767 30.2137C76.9425 30.1161 77.0771 29.9736 77.1647 29.8027C77.262 29.6122 77.3106 29.4008 77.3062 29.1872C77.3103 28.9728 77.2617 28.7607 77.1647 28.5693C77.0781 28.3977 76.9433 28.2548 76.7767 28.1582C76.6049 28.0613 76.4102 28.0118 76.2129 28.0148C76.067 28.0078 75.9214 28.0316 75.7855 28.0849C75.6496 28.1382 75.5266 28.2196 75.4246 28.3237V28.3285Z" fill="black"></path>
                                                               <path d="M84.3533 30.2579C84.2529 30.4319 84.1048 30.5738 83.9263 30.6667C83.7076 30.7783 83.464 30.8326 83.2184 30.8247C82.9664 30.8297 82.7163 30.7791 82.4863 30.6764C82.2838 30.5861 82.1082 30.4453 81.9762 30.2677C81.8493 30.0949 81.7732 29.8902 81.7565 29.6766H82.3252C82.3392 29.8047 82.3839 29.9276 82.4557 30.0347C82.5275 30.1419 82.6243 30.2301 82.7377 30.292C82.8786 30.3671 83.0368 30.404 83.1965 30.399C83.294 30.4051 83.3918 30.3916 83.484 30.3595C83.5762 30.3273 83.6609 30.2771 83.7334 30.2118C83.797 30.1482 83.8465 30.0721 83.8789 29.9883C83.9113 29.9045 83.9257 29.8149 83.9214 29.7252C83.9278 29.5777 83.881 29.4327 83.7895 29.3166C83.7004 29.2129 83.5896 29.1299 83.4649 29.0733C83.2935 28.9974 83.1174 28.9324 82.9378 28.8788C82.7229 28.811 82.5126 28.7298 82.3081 28.6355C82.1475 28.5572 82.0092 28.4401 81.9055 28.295C81.787 28.1176 81.7289 27.907 81.7395 27.6941C81.7356 27.4942 81.7898 27.2973 81.8956 27.1274C82.003 26.9601 82.1575 26.8281 82.3398 26.7479C82.5543 26.6544 82.7867 26.6087 83.0207 26.6141C83.371 26.5925 83.7175 26.6969 83.997 26.9085C84.2288 27.0941 84.3779 27.3632 84.4119 27.6576H83.8384C83.8065 27.4914 83.7207 27.3402 83.5942 27.2271C83.4398 27.0958 83.2406 27.0287 83.0379 27.0398C82.8517 27.03 82.6684 27.0889 82.5229 27.2052C82.4575 27.2641 82.4063 27.3368 82.3729 27.4181C82.3395 27.4993 82.325 27.587 82.3302 27.6747C82.3243 27.8146 82.3693 27.952 82.4569 28.0615C82.541 28.1653 82.648 28.2486 82.7694 28.3047C82.9374 28.3774 83.1094 28.4408 83.2844 28.4945C83.5034 28.5616 83.7178 28.6428 83.9263 28.7376C84.0916 28.8183 84.2336 28.9397 84.3387 29.0904C84.4605 29.2765 84.5202 29.4961 84.5095 29.718C84.5054 29.9084 84.4517 30.0945 84.3533 30.2579Z" fill="black"></path>
                                                               <path d="M89.0215 29.2937H86.4516C86.4454 29.4447 86.4698 29.5953 86.5235 29.7366C86.5772 29.8779 86.659 30.0069 86.764 30.1159C86.8618 30.2075 86.9769 30.2789 87.1025 30.3261C87.2282 30.3733 87.3619 30.3952 87.4961 30.3908C87.7274 30.3993 87.955 30.3308 88.1429 30.1962C88.3142 30.0705 88.429 29.8826 88.4626 29.6732H89.0312C88.9947 29.8924 88.904 30.0991 88.7672 30.2745C88.6304 30.4499 88.4519 30.5885 88.2478 30.6778C88.0172 30.7789 87.7674 30.8287 87.5156 30.8238C87.2296 30.829 86.947 30.7603 86.6956 30.6243C86.4579 30.4926 86.2637 30.2948 86.1367 30.0551C85.9968 29.7864 85.9271 29.4869 85.9341 29.1842C85.927 28.8801 85.9967 28.579 86.1367 28.3086C86.2631 28.0678 86.4574 27.8692 86.6956 27.737C86.947 27.601 87.2296 27.5323 87.5156 27.5375C87.801 27.531 88.0832 27.5998 88.3333 27.737C88.5568 27.8608 88.741 28.0444 88.8652 28.2672C88.9884 28.4908 89.0524 28.7419 89.0508 28.997C89.0503 29.0966 89.0405 29.1959 89.0215 29.2937V29.2937ZM88.3893 28.4424C88.3056 28.2894 88.177 28.1655 88.0207 28.0872C87.8623 28.0088 87.6876 27.9688 87.5107 27.9705C87.2409 27.9635 86.9788 28.0602 86.7786 28.2405C86.6738 28.3445 86.5913 28.4687 86.5359 28.6054C86.4805 28.7421 86.4534 28.8885 86.4563 29.0359H88.5114C88.5277 28.8306 88.4853 28.6248 88.3893 28.4424V28.4424Z" fill="black"></path>
                                                               <path d="M93.0528 27.8664C93.3194 28.0875 93.4935 28.3998 93.541 28.7422H92.9795C92.949 28.5271 92.834 28.3328 92.6599 28.2021C92.4718 28.0678 92.2443 27.9994 92.0131 28.0076C91.8339 28.0056 91.6574 28.05 91.5007 28.1365C91.3407 28.2286 91.2116 28.3656 91.1296 28.5305C91.037 28.7368 90.9893 28.9602 90.9893 29.1861C90.9893 29.412 91.037 29.6354 91.1296 29.8416C91.2116 30.0065 91.3407 30.1436 91.5007 30.2357C91.6819 30.3306 91.8857 30.3743 92.0901 30.3619C92.2945 30.3494 92.4916 30.2814 92.6599 30.1651C92.8338 30.0332 92.9486 29.8384 92.9795 29.6227H93.541C93.495 29.9662 93.3206 30.2798 93.0528 30.5008C92.7619 30.7238 92.4019 30.8382 92.0351 30.8243C91.7491 30.8295 91.4666 30.7608 91.2151 30.6249C90.9775 30.493 90.7833 30.2953 90.6562 30.0557C90.5163 29.787 90.4466 29.4875 90.4536 29.1849C90.4466 28.8807 90.5163 28.5796 90.6562 28.3092C90.7827 28.0685 90.977 27.8699 91.2151 27.7376C91.4665 27.6016 91.7491 27.5328 92.0351 27.5381C92.4026 27.525 92.7629 27.6412 93.0528 27.8664V27.8664Z" fill="black"></path>
                                                               <path d="M97.9982 27.5791V30.7803H97.4661V30.0286C97.396 30.2732 97.2413 30.4852 97.0294 30.627C96.8118 30.7679 96.5566 30.8401 96.2972 30.8338C96.1302 30.8401 95.9637 30.8113 95.8085 30.7493C95.6533 30.6873 95.513 30.5934 95.3966 30.4738C95.1497 30.1896 95.0251 29.8199 95.05 29.4448V27.5791H95.5821V29.3937C95.566 29.6593 95.6534 29.9207 95.8261 30.1235C95.9124 30.2113 96.0165 30.2798 96.1313 30.3247C96.2461 30.3696 96.3692 30.3897 96.4924 30.3837C96.623 30.3896 96.7533 30.3674 96.8746 30.3188C96.9959 30.2701 97.1053 30.196 97.1953 30.1016C97.3853 29.8701 97.4795 29.5753 97.4588 29.277V27.5742L97.9982 27.5791Z" fill="black"></path>
                                                               <path d="M100.712 27.7128C100.933 27.5842 101.187 27.5202 101.444 27.528V28.1045H101.28C101.017 28.0948 100.758 28.1764 100.548 28.3356C100.445 28.4323 100.366 28.5512 100.316 28.6832C100.267 28.8152 100.248 28.9567 100.262 29.0969V30.7826H99.7305V27.5815H100.262V28.2285C100.358 28.0163 100.514 27.8368 100.712 27.7128Z" fill="black"></path>
                                                               <path d="M102.853 26.3974C102.928 26.3386 103.021 26.3066 103.117 26.3066C103.212 26.3066 103.305 26.3386 103.38 26.3974C103.412 26.4282 103.437 26.4649 103.454 26.5054C103.471 26.5459 103.479 26.5894 103.479 26.6333C103.479 26.6773 103.471 26.7207 103.454 26.7612C103.437 26.8018 103.412 26.8385 103.38 26.8693C103.305 26.9281 103.212 26.96 103.117 26.96C103.021 26.96 102.928 26.9281 102.853 26.8693C102.822 26.8385 102.797 26.8018 102.78 26.7612C102.763 26.7207 102.754 26.6773 102.754 26.6333C102.754 26.5894 102.763 26.5459 102.78 26.5054C102.797 26.4649 102.822 26.4282 102.853 26.3974V26.3974ZM103.38 27.5723V30.7758H102.848V27.5747L103.38 27.5723Z" fill="black"></path>
                                                               <path d="M106.636 30.3191V30.7861H106.238C105.971 30.8034 105.708 30.7161 105.506 30.5428C105.415 30.4355 105.346 30.3111 105.304 30.177C105.263 30.0429 105.248 29.9018 105.262 29.762V28.0349H104.773V27.5752H105.262V26.7773H105.801V27.5752H106.633V28.0349H105.801V29.7742C105.784 29.9247 105.825 30.0759 105.916 30.1974C106.028 30.2852 106.169 30.3262 106.311 30.3117L106.636 30.3191Z" fill="black"></path>
                                                               <path d="M108.381 27.5801L109.423 30.1001L110.4 27.5801H110.99L109.082 32.2991H108.479L109.145 30.7302L107.793 27.5801H108.381Z" fill="black"></path>
                                                            </svg>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </table>
                                       </td>
                                    </tr>
                                 </table>
                              </td>
                           </tr>
                           <tr>
                              <td align="center" valign="top">
                                 <table border="0" cellpadding="20" cellspacing="0" width="600" style="background:white;border-top: 8px solid #feb72f;    border-image: linear-gradient(to right, #feb72f 50%, #FFF 50%) 100% 1;">
                                    <tr>
                                       <td align="center" valign="top">
                                          <table border="0" cellpadding="0" cellspacing="0" >
                                             <tr>
                                                <td align="center" valign="top">
                                                   <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                                      <tr>
                                                         <td valign="top" class="imageContent">
                                                               <h1 style="font-weight: 700;font-size: 22px;text-align: center;">${subject}</h1>
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0 40px;">
                                                               <tr>
                                                                  <td style="font-size: 16px;">
                                                                  Hi ${data.firstName},
                                                                  <br />
                                                                  <br /> 
                                                                Thanks for contacting us.Our team will shortly connect with you with in 24 Hours.
                                                                  <br />
                                                                  <br />
                                                                  <br />
                                                                  Thanks,
                                                                  <br /> 
                                                                  <br />
                                                                  BDATA TEAM
                                                                  <br /> 
                                                                  www.BDATA.CA
                                                                  </td>
                                                               </tr>
                                                               <tr >
                                                                  <td >
                                                                     <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                       
                                                                        <tr>
                                                                           <td style="font-size: 16px; text-align: center;">
                                                                           </td>
                                                                        </tr>
                                                                       
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </table>
                                       </td>
                                    </tr>
                                 </table>
                              </td>
                           </tr>
                           <tr>
                              <td align="center" valign="top">
                                 <table border="0" cellpadding="20" cellspacing="0" width="600" style="border-bottom: 1px solid #bccee5;" >
                                    <tr>
                                       <td align="center" valign="top">
                                          <table border="0" cellpadding="0" cellspacing="0" >
                                             <tr>
                                                <td align="center" valign="top">
                                                   <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                                      <tr>
                                                         <td>
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                               <tr>
                                                                  <td style="font-size: 16px;">
                                                                     If you have questions, We are ready to help you.Simply hop on Live chat or call us at<b> +1 604 753 9332</b> or send an Email to <a href="javascript:void(0)" style="text-decoration: none; color: #185e92;font-weight: 700;">info@bdata.ca</a>
                                                                  </td>
                                                               </tr>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </table>
                                       </td>
                                    </tr>
                                 </table>
                              </td>
                           </tr>
                           <tr>
                              <td align="center" valign="top">
                                 <table border="0" cellpadding="20" cellspacing="0" width="600" >
                                    <tr>
                                       <td align="center" valign="top">
                                          <table border="0" cellpadding="0" cellspacing="0" >
                                             <tr>
                                                <td align="center" valign="top">
                                                   <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                                      <tr>
                                                         <td>
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                               <tr>
                                                                  <td style="font-size: 16px;">
                                                                     BDATA, Inc., 75 Longwood Road South, Suite B21, Hamilton, Ontario, L8P 0A1.
                                                                     If you recieve this message by mistake,please notify <a href="javascript:void(0)" style="text-decoration: none; color: #185e92;font-weight: 700;">Custom Support</a>
                                                                  </td>
                                                               </tr>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </table>
                                       </td>
                                    </tr>
                                 </table>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
               </table>
            </center>
         </body>
      </html>`,
  };

  transporter.sendMail(mailOptions, function (err, res1) {
    if (err) {
      res.redirect(302, JSON.stringify({ message: "Error" }));
    } else {
      res.redirect(302, JSON.stringify({ message: "Send Mail" }));
    }
  });
}
