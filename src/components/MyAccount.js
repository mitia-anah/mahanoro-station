import React from 'react'
import { connect, useSelector } from 'react-redux'
import myAccount from '../reducers/myAccountReducer'

function MyAccount() {
    const account = useSelector(state => state.account)
    // console.log(account);
    return (
        <div>
            <h2>My account</h2>
            <p>my name</p>
            <div className='personal_information'>
                <h3>My personal informations</h3>
                <form>
                    <label>First name</label>
                    <input type='text' placeholder='Rosny'/>
                    <label>Last name</label>
                    <input type='text' placeholder='Mamuah'/>
                    <label>Phone number</label>
                    <input type='number' placeholder='034.....' min="10" max="10"/>

                    <button type='submit'>Update</button>
                </form>
            </div>
            <div className='bookings'>
            {account.map(account => {
                <div key={account.id}>
                    <div>
                        <p>{account.destination}</p>
                        <span>{account.seats}</span>
                        <span>{account.departureTime}</span>
                        <span>{account.price}</span>
                    </div>
                    <button>Cancel</button>
                </div>
            })}
            </div>            
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        account : state.account,
    }
  }; 

const mapDispatchToProps = {
  myAccount: myAccount
}
  
export default connect(mapStateToProps, mapDispatchToProps) (MyAccount)
