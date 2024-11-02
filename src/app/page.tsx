import LoginForm from '@/components/login-form'
import Dashboard from '@/components/dashboard'
import DigitalWallet from '@/components/digital-wallet'
import P2PPayment from '@/components/p2p-payment'
import InvestmentFeature from '@/components/investment-feature'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
      <Dashboard />
      <DigitalWallet />
      <P2PPayment />
      <InvestmentFeature />
    </main>
  )
}
