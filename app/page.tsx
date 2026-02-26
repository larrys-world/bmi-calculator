import BMICalculator from '@/components/BMICalculator'
import AdSense from '@/components/AdSense'
import RelatedTools from './RelatedTools'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          BMI Calculator - Body Mass Index
        </h1>
        
        {/* Top Ad */}
        <div className="max-w-4xl mx-auto mb-6">
          <AdSense slot="top-banner" format="horizontal" />
        </div>
        
        <BMICalculator />
        
        {/* Middle Ad */}
        <div className="max-w-4xl mx-auto my-8">
          <AdSense slot="mid-content" format="rectangle" />
        </div>
        
        {/* Related Tools */}
        <div className="max-w-4xl mx-auto my-8">
          <RelatedTools currentTool="bmi-calculator" />
        </div>
        
        {/* SEO Content */}
        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">What is BMI?</h2>
            <p className="text-gray-700 mb-4">
              Body Mass Index (BMI) is a simple calculation using a person&apos;s height and weight. The formula is BMI = kg/m² where kg is a person&apos;s weight in kilograms and m² is their height in metres squared.
            </p>
            <p className="text-gray-700">
              A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9. BMI applies to most adults 18-65 years.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">How to Use This Calculator</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Select your preferred unit system (Metric or Imperial)</li>
              <li>Enter your weight in kilograms or pounds</li>
              <li>Enter your height in centimeters or feet/inches</li>
              <li>Click &quot;Calculate BMI&quot; to see your results</li>
              <li>Review your BMI category and what it means</li>
            </ol>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">BMI Categories Explained</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-blue-600">Underweight (BMI &lt; 18.5)</h3>
                <p className="text-gray-700">May indicate malnutrition, eating disorder, or other health problems.</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-600">Normal weight (BMI 18.5-24.9)</h3>
                <p className="text-gray-700">Indicates a healthy weight for most people.</p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-600">Overweight (BMI 25-29.9)</h3>
                <p className="text-gray-700">May indicate excess weight that could lead to health problems.</p>
              </div>
              <div>
                <h3 className="font-semibold text-red-600">Obese (BMI ≥ 30)</h3>
                <p className="text-gray-700">Indicates obesity, which increases risk of various health conditions.</p>
              </div>
            </div>
          </section>

          {/* Bottom Ad */}
          <div className="my-8">
            <AdSense slot="bottom-content" format="rectangle" />
          </div>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Limitations of BMI</h2>
            <p className="text-gray-700 mb-4">
              While BMI is a useful screening tool, it has limitations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Doesn&apos;t distinguish between muscle and fat mass</li>
              <li>May misclassify athletes with high muscle mass</li>
              <li>Doesn&apos;t account for fat distribution</li>
              <li>May not be accurate for elderly people</li>
              <li>Doesn&apos;t consider ethnic differences in body composition</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}