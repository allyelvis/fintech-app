'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LineChartIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react'

const mockStocks = [
  { id: 1, name: 'Tech Co', price: 150.75, change: 2.5 },
  { id: 2, name: 'Finance Inc', price: 75.20, change: -1.3 },
  { id: 3, name: 'Green Energy Ltd', price: 45.60, change: 0.8 },
]

export default function InvestmentFeature() {
  const [portfolio, setPortfolio] = useState([])

  const handleBuy = (stock) => {
    setPortfolio([...portfolio, stock])
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Investment Platform</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <LineChartIcon className="mr-2" />
            Available Stocks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockStocks.map(stock => (
              <div key={stock.id} className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{stock.name}</p>
                  <p>${stock.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  {stock.change > 0 ? (
                    <TrendingUpIcon className="text-green-500 mr-2" />
                  ) : (
                    <TrendingDownIcon className="text-red-500 mr-2" />
                  )}
                  <span className={stock.change > 0 ? 'text-green-500' : 'text-red-500'}>
                    {stock.change > 0 ? '+' : ''}{stock.change}%
                  </span>
                </div>
                <Button onClick={() => handleBuy(stock)}>Buy</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolio.length > 0 ? (
            <ul>
              {portfolio.map((stock, index) => (
                <li key={index}>{stock.name} - ${stock.price.toFixed(2)}</li>
              ))}
            </ul>
          ) : (
            <p>You haven't made any investments yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
