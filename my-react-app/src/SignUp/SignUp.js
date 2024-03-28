import React, { useState } from "react";
import './SignUp.css'
import {FaQuestionCircle} from 'react-icons/fa';
import { Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp(){  
  
const[userName, setUserName] = useState('');
const[sureName , setSureName] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');


const navigate = useNavigate();
 
 const  ProjectId ='f104bi07c490';

 

 const submitform =(e)=>{
    // e.preventDefault();
   
    try{
     
        fetch('https://academics.newtonschool.co/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'projectID': ProjectId ,
            },
            body: JSON.stringify({
                name: userName,
                sureName: sureName,
                email: email,
                password: password,
                appType: 'facebook'
            })
        })
        .then((response)=>response.json())
        .then((data)=> {
            if(data.status === 'success'){
                console.log("SignUpRegisterData",data)
                
               

                toast.success('Register Successfully..!');
                   
                navigate('/');
            }else{
                toast.error(data.message);
            }
           
        });
    }catch(error){
        toast.error(error.message);
        console.log('Sign Up data', error);
    }
 }

 let RegisterDetils = JSON.parse(localStorage.getItem('userdetails'));
 console.log(RegisterDetils);


 let CountDate =[];

 for(let i=1;i<=31;i++){
     CountDate.push(<option value={i}>{i}</option>);
 }

 const monthsArray = [
    { value: 1, label: 'Jan' },
    { value: 2, label: 'Feb' },
    { value: 3, label: 'Mar' },
    { value: 4, label: 'Apr' },
    { value: 5, label: 'May' },
    { value: 6, label: 'Jun' },
    { value: 7, label: 'Jul' },
    { value: 8, label: 'Aug' },
    { value: 9, label: 'Sep' },
    { value: 10, label: 'Oct' },
    { value: 11, label: 'Nov' },
    { value: 12, label: 'Dec' }
];


const yearsArray = [];
for (let year = 1905; year <= 2024; year++) {
    yearsArray.push({ value: year, label: year });
}


 function CheckAge(e){
     e.preventDefault();
     
     const selectedYear = parseInt(document.getElementById('year').value);
     const selectedMonth = parseInt(document.getElementById('month').value);
     const selectedDay = parseInt(document.getElementById('day').value);

     const birthdate = new Date(selectedYear, selectedMonth - 1, selectedDay);

      // Calculate the date 18 years ago
      const date18YearsAgo = new Date();
      date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);

      if (birthdate > date18YearsAgo) {
        toast.error("You must be at least 18 years old to sign up.");
         navigate("/SignUp");// Prevent form submission
    }else{
        submitform();
    }
 }


    return(

        <>
        <ToastContainer/>
         <div className="signup">
            <div className="signup-cotainer">
                
            <div className="headerbox">
                </div>
                <div className="signup-header">
                   <div>
                   <h1 className="signup-hd">Sign Up</h1>
                    <p className="signup-p">It's quick and easy </p>
                   </div>
                    <div>
                   <Link to="/"> <img class="xform" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/11W0xEwKS62.png" alt="close-btn" style={{ width:"24px",height:"24px", cursor:"pointer" }}/></Link>
               
                    </div>
                </div>
                <div className="signup-seperator"></div>

                    <form onSubmit={CheckAge}>
                    <div className="signup-fields">
                    <div className="signup-inputs">
                        <div className="hd_place">
                            <input type="text"
                             placeholder="First-Name"
                             id="firstname"
                             minLength={4}
                             required
                             onChange={(e)=>setUserName(e.target.value)}
                            />

                            <input type="text" 
                            placeholder="Surename" 
                            id="sureName"
                            minLength={4}
                            required
                            onChange={(e) =>setSureName(e.target.value)}

                            />
                        </div>
                        
                        <input type="email"
                         placeholder="Mobile Number or email address"
                         id="email"
                        required
                         onChange={(e)=> setEmail(e.target.value)}
                         />
                        <input class="pass" 
                        type="password" 
                        placeholder="Password" 
                        id="password"
                        minLength={4}
                        required 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    
                      
                       </div>
                <div className="signup-boxes">
                     <div>
                        <div className="info-text">
                    <p>Date Of birth</p> 
                    <FaQuestionCircle />
                        </div>
                    <div className="birthday" required>
                        
                        <select aria-label="Day" name="birthday_day" id="day" title="Day" class="_9407 _5dba _9hk6 _8esg" required>
                          {CountDate.map((option)=>option)}
                         </select>
                        <select aria-label="Month" name="birthday_month" id="month" title="Month" class="_9407 _5dba _9hk6 _8esg" required>
                        {monthsArray.map(month => (
                            <option key={month.value} value={month.value}>{month.label}</option>
                        ))}
                         </select>
                         <select aria-label="Year" name="birthday_year" id="year" title="Year" class="_9407 _5dba _9hk6 _8esg" required>
                         {yearsArray.map(year => (
                            <option key={year.value} value={year.value} selected={year.value === 2024 ? "selected" : ""}>{year.label}</option>
                        ))}
                        </select>
                    </div>

                    <div className="info-text">
                  <p>Gender </p>
                   <FaQuestionCircle />
                  
                  </div>

                  <div className="chuse-gender" required>
                    <div className="signup-gen">
                    <label htmlFor="female">Female</label>
                       <input class="redi"
                        type="radio" 
                        name="gender"
                         value="Female"
                          id="female" 
                          required
                          />
                      
                    </div>
                        <div className="signup-gen">
                        <label htmlFor="Male">Male</label>
                       <input class="redi"
                        type="radio"
                         name="gender"
                          value="Male"
                           id="male" 
                           required
                           />
                      
                        </div>
                         
                        <div className="signup-gen"> <label htmlFor="custom">Custom</label>
                        <input class="redi" 
                        type="radio"
                         name="gender"
                          value="Custom"
                           id="custom"
                            required
                           />
                      </div>
                     </div>

                  </div>
                 
                     
                    
                  </div>
                
                <div class="singup-para" data-nocookies="1">
                    <p class="para">People who use our service may have uploaded your contact information to Facebook. <a href="/help/637205020878504" id="non-users-notice-link" target="_blank" rel="nofollow">Learn more</a>.</p>
                    </div>
                   <div class="singup-para" data-nocookies="1" id="u_c_r_Fa">
                    <p class="para">By clicking Sign Up, you agree to our <a href="/legal/terms/update" id="terms-link" target="_blank" rel="nofollow">Terms</a>, <a href="/about/privacy/update" id="privacy-link" target="_blank" rel="nofollow">Privacy Policy</a> and <a href="/policies/cookies/" id="cookie-use-link" target="_blank" rel="nofollow">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
                    </div>
                  <button type="submit" name="websubmit" id="signup-btn" >Sign Up</button>
                
                </div>

                
                    </form>
                
               

            </div>

        </div>
        </>
        
    );

}

export default SignUp;
