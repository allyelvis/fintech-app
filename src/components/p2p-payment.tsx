'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SendIcon } from 'lucide-react'

export default function P2PPayment() {
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')

  const handleSendMoney = () => {
    if (recipient && amount && !isNaN(Number(amount))) {
      // Here you would typically integrate with a backend API to process the payment
      alert(`Sending ${amount} to ${recipient}`)
      setRecipient('')
      setAmount('')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Send Money</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Peer-to-Peer Payment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="recipient">Recipient</Label>
              <Input
                id="recipient"
                placeholder="Enter recipient's email or username"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>
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
            <Button onClick={handleSendMoney} className="w-full">
              <SendIcon className="mr-2" /> Send Money
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
