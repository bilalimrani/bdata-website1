const nodemailer = require("nodemailer");

export default async function (req, res) {
  const { attachments, subject, data } = req.body
  console.log(req.body)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    host: 'smtp.gmail.com',
    secure: true, // use TLS
    auth: {
      user: "no_reply@bdata.ca",
      pass: "E=Q8bq>P",
    },
  });
  let mailOptions = await transporter.sendMail({
    from: "no_reply@bdata.ca",
    to: data.email,
    subject: subject,
    html: `<body  leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height: 100%;background-image:url('./Assets/bg-img.svg');background-size:100px 470px ;background-attachment: fixed  ;background-position: center right ;background-repeat: no-repeat;background-color: #f5f9ff;">
          <center>
             <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTbl" style="table-layout: fixed;max-width:100% !important;width: 100% !important;min-width: 100% !important;">
                <tr>
                   <td align="center" valign="top" id="bodyCell">
                      <table  border="0" cellpadding="0" cellspacing="0" width="100%" id="emailBody">
                         <tr>
                            <td align="center" valign="top">
                               <table border="0" cellpadding="20" cellspacing="0" width="600" style="background:white;border-top: 8px solid#feb72f;    border-image: linear-gradient(to right, #feb72f 50%, #FFF 50%) 100% 1;">
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
                                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0 20px;">
                                                             <tr>
                                                                <td style="font-size: 16px;">
                                                                    Hi,
                                                        
                                                                </td>
                                                             </tr>
                                                             <tr>
                                                                <td style="font-size: 16px;">
                                                                    Mr ${data.firstName}
                                                             
                                                                </td>
                                                             </tr>
                                                             <tr>
                                                                <td style="font-size: 16px;">
                                                                    
                                                                    We hope you’ve enjoyed our services by using ‘Micro’ package of 
                                                                    BDATA.
                                                           
                                                                </td>
                                                             </tr>
                                                             <tr>
                                                                <td style="font-size: 16px;">
                                                                    As a reminder,your membership renews in 6 days.Unless your 
                                                                    ’MICRO’ package status change to another package.You will be charged  <b> $800 </b> on <b>12-09-2022</b>.
                                                                </td>
                                                             </tr>
                                                             <tr>
                                                                <td style="font-size: 16px;">
                                                                    If your status/package change in the next 6 days you will be charged based on your new package.
                                                                </td>
                                                             </tr>
                                                          </table>
                                                       </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                           <table border="0" width="100%" style="border-spacing: 0 40px;">
                                                              <tr>
                                                                 <td style="font-size: 16px;">
                                                                    Thanks,
                                                                 </td>
                                                              </tr>
                                                              <tr cellspacing="10">
                                                                 <td >
                                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                       <tr>
                                                                          <td style="font-size: 16px;">
                                                                             BDATA TEAM
                                                                          </td>
                                                                       </tr>
                                                                       <tr>
                                                                          <td style="font-size: 16px;">
                                                                             www.BDATA.CA
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
       </body>`,
    attachments: attachments,

  });

  transporter.sendMail(mailOptions, function (err, res1) {
    if (err) {
      console.log(err, "Asd")
      res.status(400).end(JSON.stringify({ message: "Error" }));

    } else {
      res.status(200).end(JSON.stringify({ message: "Send Mail" }));
    }
  });
}
