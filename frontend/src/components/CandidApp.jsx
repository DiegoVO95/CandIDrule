import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Toaster } from './ui/toaster';
import CandidCalculator from './CandidCalculator';
import HowToUse from './HowToUse';
import TermsConditions from './TermsConditions';
import { Stethoscope, Info, FileText } from 'lucide-react';

const CandidApp = () => {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Stethoscope className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CandID Rule
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Candidemia Risk Prediction Calculator for Healthcare Professionals (INCMNSZ)
          </p>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 border-gray-700">
            <TabsTrigger 
              value="calculator" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center gap-2"
            >
              <Stethoscope className="w-4 h-4" />
              Calculator
            </TabsTrigger>
            <TabsTrigger 
              value="howto" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center gap-2"
            >
              <Info className="w-4 h-4" />
              How to Use
            </TabsTrigger>
            <TabsTrigger 
              value="terms" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Terms
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="mt-6">
            <CandidCalculator />
          </TabsContent>

          <TabsContent value="howto" className="mt-6">
            <HowToUse />
          </TabsContent>

          <TabsContent value="terms" className="mt-6">
            <TermsConditions />
          </TabsContent>
        </Tabs>
      </div>

      <Toaster />
    </div>
  );
};

export default CandidApp;