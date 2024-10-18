import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
    const loggedIn = {firstName: 'Pavan',lastname:'Kumar R',email:'pavan@gmail.com'};
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.firstName || 'Guset'}
                  subtext="Access and manage your account and transactions efficiently."
                />

                <TotalBalanceBox
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={2563.23}
                />
            </header>
        </div>
        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:12356.32},{currentBalance:586235.23}]}
        />
    </section>
  )
}

export default Home