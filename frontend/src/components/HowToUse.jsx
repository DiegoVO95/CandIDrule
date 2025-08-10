import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Info, Calculator, AlertTriangle, Scissors, Pill, Zap, CircleDot, Droplets, Bug } from 'lucide-react';

const HowToUse = () => {
  const instructions = [
    {
      title: 'Abdominal Surgery',
      description: 'Indicate if the patient has had recent abdominal surgery in less than 1 month.',
      score: 1.11,
      icon: Scissors,
    },
    {
      title: 'Antibiotic Therapy',
      description: 'Indicate if the patient received antibiotic therapy in the first 3 days of their hospital admission.',
      score: 0.82,
      icon: Pill,
    },
    {
      title: 'Candiduria',
      description: 'Indicate if there is the presence of candiduria within the last week before the suspicion of candidemia.',
      score: 0.41,
      icon: Zap,
    },
    {
      title: 'Cirrhosis',
      description: 'Indicate if the patient has cirrhosis, regardless of stage or etiology.',
      score: 1.11,
      icon: CircleDot,
    },
    {
      title: 'Central Venous Catheter (CVC)',
      description: 'Indicate if the patient has a central venous catheter in place for more than or equal to 72 hours.',
      score: 1.50,
      icon: Droplets,
    },
    {
      title: 'Solid Cancer',
      description: 'Indicate if the patient has a diagnosis of solid cancer, regardless of whether they have received chemotherapy or not.',
      score: 1.17,
      icon: Bug,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">How to Use the CandID Rule</h1>
        <p className="text-gray-300">Guidelines for proper risk assessment</p>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Info className="w-5 h-5" />
            Instructions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {instructions.map((instruction, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{instruction.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-white font-semibold">{instruction.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        Score: +{instruction.score}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {instruction.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-900/20 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-400" />
            How to Calculate
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 space-y-4">
          <div className="space-y-2">
            <p>1. Review each risk factor carefully with your patient's clinical history</p>
            <p>2. Select all applicable risk factors that are present</p>
            <p>3. Click the "Calculate Score" button to generate the total risk score</p>
            <p>4. Interpret the result based on the threshold value</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-amber-900/20 border-amber-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Risk Interpretation
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-900/30 border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-2">Score &lt; 1.92</h4>
              <p className="text-sm">Lower risk for candidemia. Continue standard monitoring and clinical assessment.</p>
            </div>
            <div className="p-4 rounded-lg bg-red-900/30 border border-red-500/30">
              <h4 className="text-red-400 font-semibold mb-2">Score ≥ 1.92</h4>
              <p className="text-sm">Elevated risk for candidemia. Consider conducting additional microbiological studies.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowToUse;