'use client'

import { useState } from 'react'

type UnitSystem = 'metric' | 'imperial'

interface BMICategory {
  name: string
  range: string
  color: string
  min: number
  max: number
}

const bmiCategories: BMICategory[] = [
  { name: 'Underweight', range: '< 18.5', color: 'text-blue-600', min: 0, max: 18.5 },
  { name: 'Normal weight', range: '18.5 - 24.9', color: 'text-green-600', min: 18.5, max: 25 },
  { name: 'Overweight', range: '25 - 29.9', color: 'text-yellow-600', min: 25, max: 30 },
  { name: 'Obese', range: '≥ 30', color: 'text-red-600', min: 30, max: 100 },
]

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)

  const calculateBMI = () => {
    let weightInKg: number
    let heightInM: number

    if (unitSystem === 'metric') {
      weightInKg = parseFloat(weight)
      heightInM = parseFloat(height) / 100 // cm to m
    } else {
      // Imperial: weight in lbs, height in feet and inches
      weightInKg = parseFloat(weight) * 0.453592 // lbs to kg
      const totalInches = parseFloat(feet) * 12 + parseFloat(inches)
      heightInM = totalInches * 0.0254 // inches to m
    }

    if (weightInKg > 0 && heightInM > 0) {
      const bmiValue = weightInKg / (heightInM * heightInM)
      setBmi(Math.round(bmiValue * 10) / 10)
    }
  }

  const getBMICategory = (bmiValue: number): BMICategory => {
    return bmiCategories.find(cat => bmiValue >= cat.min && bmiValue < cat.max) || bmiCategories[3]
  }

  const resetCalculator = () => {
    setWeight('')
    setHeight('')
    setFeet('')
    setInches('')
    setBmi(null)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">BMI Calculator</h2>
      
      {/* Unit System Toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-lg border border-gray-200">
          <button
            onClick={() => {
              setUnitSystem('metric')
              resetCalculator()
            }}
            className={`px-4 py-2 rounded-l-lg ${
              unitSystem === 'metric'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Metric
          </button>
          <button
            onClick={() => {
              setUnitSystem('imperial')
              resetCalculator()
            }}
            className={`px-4 py-2 rounded-r-lg ${
              unitSystem === 'imperial'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Imperial
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={unitSystem === 'metric' ? 'Enter weight in kg' : 'Enter weight in lbs'}
          />
        </div>

        {unitSystem === 'metric' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter height in cm"
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Feet"
              />
              <input
                type="number"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Inches"
              />
            </div>
          </div>
        )}
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateBMI}
        className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Calculate BMI
      </button>

      {/* Results */}
      {bmi !== null && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600">Your BMI is</p>
            <p className={`text-4xl font-bold ${getBMICategory(bmi).color}`}>
              {bmi}
            </p>
            <p className={`text-lg font-semibold ${getBMICategory(bmi).color}`}>
              {getBMICategory(bmi).name}
            </p>
          </div>

          {/* BMI Scale Visual */}
          <div className="mt-4">
            <div className="relative h-8 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-400 rounded-full">
              <div
                className="absolute top-0 w-1 h-8 bg-black"
                style={{
                  left: `${Math.min(Math.max((bmi - 15) * 3.33, 0), 100)}%`,
                }}
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-600">
              <span>15</span>
              <span>20</span>
              <span>25</span>
              <span>30</span>
              <span>35</span>
              <span>40</span>
              <span>45</span>
            </div>
          </div>

          {/* BMI Categories */}
          <div className="mt-4 space-y-2">
            {bmiCategories.map((category) => (
              <div
                key={category.name}
                className={`flex justify-between text-sm ${
                  getBMICategory(bmi).name === category.name ? 'font-semibold' : ''
                }`}
              >
                <span className={category.color}>{category.name}</span>
                <span className="text-gray-600">{category.range}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Health Disclaimer */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">Important Note</h3>
        <p className="text-sm text-yellow-700">
          BMI is a screening tool and is not diagnostic of body fatness or health. It doesn&apos;t account for muscle mass, bone density, overall body composition, or racial and sex differences. Always consult with a healthcare professional for a comprehensive health assessment.
        </p>
      </div>
    </div>
  )
}