import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { AlertCircle, Calculator, CheckCircle2, XCircle } from 'lucide-react';

const CandidCalculator = () => {
  const [selectedFactors, setSelectedFactors] = useState({
    abdominalSurgery: false,
    antibioticTherapy: false,
    candiduria: false,
    cirrhosis: false,
    cvc: false,
    solidCancer: false,
  });

  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const riskFactors = [
    {
      id: 'abdominalSurgery',
      label: 'Abdominal Surgery',
      description: 'Recent abdominal surgery in less than 1 month',
      score: 1.11,
    },
    {
      id: 'antibioticTherapy',
      label: 'Broad-Spectrum Antibiotic Use',
      description: 'Antibiotic therapy in first 3 days of hospital admission',
      score: 0.82,
    },
    {
      id: 'candiduria',
      label: 'Candiduria',
      description: 'Presence of candiduria within the last week',
      score: 0.41,
    },
    {
      id: 'cirrhosis',
      label: 'Hepatic Cirrhosis',
      description: 'Cirrhosis, regardless of stage or etiology',
      score: 1.11,
    },
    {
      id: 'cvc',
      label: 'Central Venous Catheter (CVC)',
      description: 'CVC in place for ≥72 hours',
      score: 1.50,
    },
    {
      id: 'solidCancer',
      label: 'Solid Cancer',
      description: 'Diagnosis of solid cancer (with or without chemotherapy)',
      score: 1.17,
    },
  ];

  const handleFactorChange = (factorId, checked) => {
    setSelectedFactors(prev => ({
      ...prev,
      [factorId]: checked,
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.keys(selectedFactors).forEach(factorId => {
      if (selectedFactors[factorId]) {
        const factor = riskFactors.find(f => f.id === factorId);
        totalScore += factor.score;
      }
    });

    const isHighRisk = totalScore >= 1.92;
    setResult({
      score: totalScore,
      isHighRisk,
      selectedFactors: Object.keys(selectedFactors).filter(key => selectedFactors[key]),
    });
    setShowResult(true);
  };

  const resetCalculator = () => {
    setSelectedFactors({
      abdominalSurgery: false,
      antibioticTherapy: false,
      candiduria: false,
      cirrhosis: false,
      cvc: false,
      solidCancer: false,
    });
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">CandID Rule Calculator</h1>
        <p className="text-gray-300">Candidemia Risk Assessment Tool</p>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Risk Factor Assessment
          </CardTitle>
          <CardDescription className="text-gray-400">
            Select all applicable risk factors for your patient
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {riskFactors.map((factor) => (
            <div
              key={factor.id}
              className="flex items-start space-x-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
            >
              <Checkbox
                id={factor.id}
                checked={selectedFactors[factor.id]}
                onCheckedChange={(checked) => handleFactorChange(factor.id, checked)}
                className="mt-1"
              />
              <div className="flex-1">
                <label
                  htmlFor={factor.id}
                  className="text-white font-medium cursor-pointer"
                >
                  {factor.label}
                </label>
                <p className="text-gray-400 text-sm mt-1">{factor.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button
          onClick={calculateScore}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          size="lg"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Calculate Risk Score
        </Button>
        <Button
          onClick={resetCalculator}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
          size="lg"
        >
          Reset
        </Button>
      </div>

      {showResult && result && (
        <Card className={`border-2 ${result.isHighRisk ? 'border-red-500 bg-red-900/20' : 'border-green-500 bg-green-900/20'}`}>
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              {result.isHighRisk ? (
                <AlertCircle className="w-5 h-5 text-red-400" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              )}
              Risk Assessment Result
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {result.score.toFixed(2)}
                </div>
                <Badge
                  variant={result.isHighRisk ? "destructive" : "default"}
                  className="text-lg px-4 py-1"
                >
                  {result.isHighRisk ? "High Risk" : "Low Risk"}
                </Badge>
              </div>
              
              <div className={`p-4 rounded-lg ${result.isHighRisk ? 'bg-red-900/30' : 'bg-green-900/30'}`}>
                {result.isHighRisk ? (
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Elevated Risk for Candidemia</p>
                      <p className="text-gray-300 text-sm mt-1">
                        Score ≥1.92 indicates elevated risk. Consider conducting additional 
                        microbiological studies to rule out candidemia.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Low Risk for Candidemia</p>
                      <p className="text-gray-300 text-sm mt-1">
                        Score &lt;1.92 indicates lower risk. Continue standard monitoring 
                        and clinical assessment.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {result.selectedFactors.length > 0 && (
                <div>
                  <p className="text-white font-medium mb-2">Selected Risk Factors:</p>
                  <div className="flex flex-wrap gap-2">
                    {result.selectedFactors.map(factorId => {
                      const factor = riskFactors.find(f => f.id === factorId);
                      return (
                        <Badge key={factorId} variant="secondary" className="text-sm">
                          {factor.label} (+{factor.score})
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CandidCalculator;