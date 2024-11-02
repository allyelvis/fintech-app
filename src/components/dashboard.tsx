'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { WalletIcon, SendIcon, LineChartIcon, BellIcon } from 'lucide-react'

export default function Dashboard() {
  const [balance, setBalance] = useState(1000) // Example balance

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Fintech Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <WalletIcon className="mr-2" />
              Your Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <SendIcon className="mr-2" />
              Quick Transfer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => alert('Transfer feature not implemented yet')}>
              Send Money
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LineChartIcon className="mr-2" />
              Investments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => alert('Investment feature not implemented yet')}>
              View Investments
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BellIcon className="mr-2" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>No recent activity to display.</p>
        </CardContent>
      </Card>
    </div>
  )
}
