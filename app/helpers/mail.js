const systemConfig = require(__pathConfig + 'system');
const nodemailer = require('nodemailer');
let sendMailConfirmSignUp = (user, req, res) =>{
    let transporter = nodemailer.createTransport({ 
        service: 'Gmail',
        auth: {
            user: systemConfig.email,
            pass: systemConfig.password 
        }
    });
    let mainOptions = { 
        from: '[LuyenThiDaiHoc.com]',
        to: user.email,
        subject: '[Hệ Thống LuyenThiDaiHoc.com] Xác thực tài khoản',
        text: 'You recieved message from luyenthidaihoc@gmail.com',
        html: `<div marginwidth="0" marginheight="0" style="margin:0pt auto;padding:0px;background:#f4f7fa"><div class="adM">
                </div><table id="m_1590321008341783323main" width="100%" height="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F4F7FA">
                    <tbody>
                        <tr>
                            <td valign="top">
                                <table class="m_1590321008341783323innermain" cellpadding="0" width="580" cellspacing="0" border="0" bgcolor="#F4F7FA" align="center" style="margin:0 auto;table-layout:fixed">
                                    <tbody>
                                        <tr>
                                            <td colspan="4">
                                                <table class="m_1590321008341783323logo" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ff5722;margin-top:20px">
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="2" height="10"></td>
                                                        </tr>
                                                        <tr>
                                                            <td valign="top" align="center">
                                                                <a href="" style="display:inline-block;text-align:center" target="_blank" >
                                                                    <img src="https://thithu24h.herokuapp.com/frontend/images/main_logo.png" border="0" alt="LogaVN" width="200" class="CToWUd">
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" height="10"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="border-radius:4px">
                                                    <tbody>
                                                        <tr>
                                                            <td height="10"></td>
                                                        </tr>
                                                        <tr style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:#4e5c6e;font-size:14px;line-height:20px;margin-top:20px">
                                                            <td class="m_1590321008341783323content" colspan="2" valign="top" align="center" style="padding-left:90px;padding-right:90px">
                                                                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" valign="bottom" colspan="2" cellpadding="3">
                                                                                <img src="https://ci4.googleusercontent.com/proxy/QwdES3iEnXJ5xykRJVSiBSyBTWyT5Pl1PrvlgkCQYG_Z2LdgGahaJvS7507AR9H4b_nzgjnzKto=s0-d-e1-ft#https://loga.vn/Images/icon_email.png" width="80" class="CToWUd">
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td height="20"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center">
                                                                                <span style="color:#48545d;font-size:22px;line-height:24px">
                                                                                    Xác thực đăng ký tài khoản
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td height="24"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td height="1" bgcolor="#DAE1E9"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td height="24"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="color:#48545d;font-size:14px;line-height:24px">
                                                                                <p>Xin chào <b>${user.name}</b>!</p>
                                                                                <p>Chúc mừng bạn đã đăng ký thành công tài khoản trên <b>ThiThu24h.com</b>. Xin vui lòng bấm xác thực đăng ký để được hưởng ưu đãi sau:</p>
                                                                                <ul>
                                                                                    <li>Tặng ngay 50 kim cương vào tài khoản.</li>
                                                                                    <li>Gửi tặng tài liệu học tập miễn phí hàng tháng.</li>
                                                                                </ul>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td height="10"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td valign="top" width="48%" align="center">
                                                                                <span>
                                                                                    <a href="${systemConfig.host}/kich-hoat-tai-khoan/${req.user.id}" style="font-weight:700;display:block;padding:15px 25px;background-color:#0087d1;color:#ffffff;border-radius:3px;text-decoration:none">Xác thực đăng ký</a>
                                                                                </span>
            
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="40"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table id="m_1590321008341783323promo" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px">
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="2" height="10"></td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" align="center">
                                                                <span style="font-size:16px;font-weight:500;margin-bottom:10px;color:#007ee5;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
                                                                    <a >ThiThu24h.com - Cộng Đồng Luyện Thi Trực Tuyến</a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" height="10"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table><div class="yj6qo"></div><div class="adL">
            </div></div>`
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            return res.json({
                status: 404,
                message: 'Máy chủ lỗi, gửi email thất bại !'
            })
        } else {
            return res.json({
                status: 200,
                message: `Đăng ký tài khoản thành công, Hãy kiểm tra Email để xác nhận là thành viên LuyenThiDaiHoc.com!`
            });
        }
    });
}
let sendMailConfirmForgotPassword = (userInfo, code, res) => {
    let transporter = nodemailer.createTransport({ 
        service: 'Gmail',
        auth: {
            user: systemConfig.email,
            pass: systemConfig.password 
        }
    });
    let mainOptions = { 
        from: '[LuyenThiDaiHoc.com]',
        to: userInfo.email,
        subject: '[Hệ Thống LuyenThiDaiHoc.com]',
        text: 'You recieved message from luyenthidaihoc@gmail.com',
        html: `<div marginwidth="0" marginheight="0" style="margin:0pt auto;padding:0px;background:#f4f7fa"><div class="adM">
        </div><table id="m_1590321008341783323main" width="100%" height="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F4F7FA">
            <tbody>
                <tr>
                    <td valign="top">
                        <table class="m_1590321008341783323innermain" cellpadding="0" width="580" cellspacing="0" border="0" bgcolor="#F4F7FA" align="center" style="margin:0 auto;table-layout:fixed">
                            <tbody>
                                <tr>
                                    <td colspan="4">
                                        <table class="m_1590321008341783323logo" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ff5722;margin-top:20px">
                                            <tbody>
                                                <tr>
                                                    <td colspan="2" height="10"></td>
                                                </tr>
                                                <tr>
                                                    <td valign="top" align="center">
                                                        <a href="" style="display:inline-block;text-align:center" target="_blank" >
                                                            <img src="https://thithu24h.herokuapp.com/frontend/images/main_logo.png" border="0" alt="LogaVN" width="200" class="CToWUd">
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" height="10"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="border-radius:4px">
                                            <tbody>
                                                <tr>
                                                    <td height="10"></td>
                                                </tr>
                                                <tr style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:#4e5c6e;font-size:14px;line-height:20px;margin-top:20px">
                                                    <td class="m_1590321008341783323content" colspan="2" valign="top" align="center" style="padding-left:90px;padding-right:90px">
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" valign="bottom" colspan="2" cellpadding="3">
                                                                        <img src="https://ci4.googleusercontent.com/proxy/QwdES3iEnXJ5xykRJVSiBSyBTWyT5Pl1PrvlgkCQYG_Z2LdgGahaJvS7507AR9H4b_nzgjnzKto=s0-d-e1-ft#https://loga.vn/Images/icon_email.png" width="80" class="CToWUd">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center">
                                                                        <span style="color:#48545d;font-size:22px;line-height:24px">
                                                                            Xác thực quên mật khẩu
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="24"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="1" bgcolor="#DAE1E9"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="24"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="color:#48545d;font-size:14px;line-height:24px">
                                                                        <p>Xin chào <b>${userInfo.name}</b>!</p>
                                                                        <p>Bạn đã yêu cầu đổi mật khẩu <b>ThiThu24h.com</b>. Xin vui lòng bấm xác thực để tiếp tục</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="10"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" width="48%" align="center">
                                                                        <span>
                                                                            <a href="${systemConfig.host}/quen-mat-khau/xac-thuc/${userInfo.id}/${code}" style="font-weight:700;display:block;padding:15px 25px;background-color:#0087d1;color:#ffffff;border-radius:3px;text-decoration:none">Xác thực đổi mật khẩu</a>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="40"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table id="m_1590321008341783323promo" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px">
                                            <tbody>
                                                <tr>
                                                    <td colspan="2" height="10"></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" align="center">
                                                        <span style="font-size:16px;font-weight:500;margin-bottom:10px;color:#007ee5;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
                                                            <a >ThiThu24h.com - Cộng Đồng Luyện Thi Trực Tuyến</a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" height="10"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table><div class="yj6qo"></div><div class="adL">
        </div></div>`
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            return res.json({
                status: 404,
                message: 'Máy chủ lỗi, gửi email thất bại !'
            })
        } else {
            return res.json({
                status: 200,
                message: 'Xác thực thành công, các hạ vui lòng truy cập email để thực hiện lấy lại mật khẩu. !'
            })
        }
    });
}
module.exports = {
    sendMailConfirmSignUp,
    sendMailConfirmForgotPassword 
}