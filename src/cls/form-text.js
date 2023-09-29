import React from "react";

export default function FormText() {
    const textPswd1 = React.useRef()
    const textPswd2 = React.useRef()

    const onBlurPassword1 = () => {
        let pswd1 = textPswd1.current.value
        if (pswd1 !== '' && !pswd1.match(/^[0-9a-zA-Z]+$/)) {
            textPswd1.current.value = ''
            alert('ต้องเป็น 0-9 a-z A-Z เท่านั้น')
        }
    }

    const onBlurPassword2 = () => {
        if (textPswd1.current.value !== textPswd2.current.value) {
            textPswd2.current.value = ''
            alert('รหัสผ่านทั้งสองช่องไม่ตรองกัน')
        }
    }

    return (
        <div className="mt-4 mx-auto p-3 rounded" style={{ width: '400px', background: '#cee' }}>
            <form>
                <div className="form-group mb-2">
                    <label htmlFor="login">ชื่อผู้ใช้</label>
                    <input type="text" id="login" name="login" maxLength="20" className="form-control form-control-sm" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="pswd1">รหัสผ่าน</label>
                    <input type="password" 
                        id="pswd1" name="pswd1" 
                        maxLength="10" className="form-control form-control-sm" 
                        ref={textPswd1} onBlur={onBlurPassword1}/>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="pswd2">รหัสผ่านอีกครั้ง</label>
                    <input type="password" 
                        id="pswd2" name="pswd2" 
                        maxLength="10" className="form-control form-control-sm" 
                        ref={textPswd2} onBlur={onBlurPassword2}/>
                </div>
                <div className="form-broup mb-4">
                    <label htmlFor="memo">บันทึกช่วยจำ</label>
                    <textarea id="memo" name="memo" rows="2" maxLength="200" className="form-control form-control-sm"></textarea>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary px-4 rounded">
                        OK
                    </button>
                </div>
            </form>
        </div>
    )
}