import React, { useState } from 'react'

function Registration(){
    const [name, setName] = useState('')
    const [addr, setAddr] = useState('')
    const [gender, setGender] = useState('')
    const [hobbies, setHobbies] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const handleName = (e) => { setName(e.target.value) };
    const handleAddr = (e) => { setAddr(e.target.value) };
    const handleGender = (e) => { setGender(e.target.value) };
    // const handleHobbies = (e) => { setHobbies(e.target.value) };
    const handleCity = (e) => { setCity(e.target.value) };
    const handleEmail = (e) => { setEmail(e.target.value) };
    const handlePassword = (e) => { setPassword(e.target.value) };
    const handleCpassword = (e) => { setCpassword(e.target.value) };

    const handleSubmit = (e) => {
        if (password != cpassword) {
            alert('Password mismatch');
        } else {
            alert("Name :" + name + "\nAddress :" + addr + "\nGender :" + gender + "\nHobbies :" + hobbies.toString() + "\nCity :" + city + "\nEmail :" + email);
        }
        e.preventDefault();
    }
    function chk(e) {
        hobbies.push(e.target.value);
    }
    return (
        <>
            <form>
                <table cellSpacing="15" cellPadding="5" width="100%">
                    <tr>
                        <td colSpan="2">
                            <h3>Registration Page</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>Name :</td>
                        <td><input type="text" value={name} onChange={(e) => handleName(e)} /></td>
                    </tr>
                    <tr>
                        <td>Address :</td>
                        <td><input type="text" value={addr} onChange={(e) => handleAddr(e)} /></td>
                    </tr>
                    <tr>
                        <td>Gender :</td>
                        <td>
                            <input type="radio" name="gen" value="Male" onChange={(e) => handleGender(e)} />Male
                            <input type="radio" name="gen" value="Feale" onChange={(e) => handleGender(e)} />Female
                            <input type="radio" name="gen" value="Others" onChange={(e) => handleGender(e)} />Others
                        </td>
                    </tr>
                    <tr>
                        <td>Hobbies :</td>
                        <td>
                            <input type="checkbox" name="chk" value="Listening Music" onChange={chk} />Listening Music
                            <input type="checkbox" name="chk" value="Travelling" onChange={chk} />Travelling
                            <input type="checkbox" name="chk" value="Resurch" onChange={chk} />Resurch
                        </td>
                    </tr>
                    <tr>
                        <td>City :</td>
                        <td>
                            <select onChange={(e) => handleCity(e)}>
                                <option value="">Select City</option>
                                <option value="Surat">Surat</option>
                                <option value="Bharuch">Bharuch</option>
                                <option value="Baroda">Baroda</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Email :</td>
                        <td><input type="email" value={email} onChange={(e) => handleEmail(e)} /></td>
                    </tr>
                    <tr>
                        <td>Password :</td>
                        <td><input type="password" value={password} onChange={(e) => handlePassword(e)} /></td>
                    </tr>
                    <tr>
                        <td>Comfirm Password :</td>
                        <td><input type="password" value={cpassword} onChange={(e) => handleCpassword(e)} /></td>
                    </tr>
                    <tr >
                        <td colSpan="2"><input type="submit" value="submit" onClick={(e) => handleSubmit(e)} /></td>
                    </tr>
                </table>
            </form>
        </>
    )
}
export default Registration;