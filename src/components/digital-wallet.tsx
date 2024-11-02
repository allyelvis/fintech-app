'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusIcon, MinusIcon } from 'lucide-react'

export default function DigitalWallet() {
  const [balance, setBalance] = useState(1000)
  const [amount, setAmount] = useState('')

  const handleDeposit = () => {
    if (amount && !isNaN(Number(amount))) {
      setBalance(prevBalance => prevBalance + Number(amount))
      setAmount('')
    }
  
  }

  const handleWithdraw = () => {
    if (amount && !isNaN(Number(amount)) && Number(amount) <= balance) {
      setBalance(prevBalance => prevBalance - Number(amount))
      setAmount('')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Digital Wallet</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">${balance.toFixed(2)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deposit or Withdraw</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleDeposit} className="flex-1">
                <PlusIcon className="mr-2" /> Deposit
              </Button>
              <Button onClick={handleWithdraw} className="flex-1" variant="outline">
                <MinusIcon className="mr-2" /> Withdraw
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
