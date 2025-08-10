import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { FileText, Users, AlertTriangle, GraduationCap } from 'lucide-react';

const TermsConditions = () => {
  const authors = [
    "Diego Ulises Vázquez Omaña, MD",
    "Paula Beltran Reyes, MD", 
    "Jorge Eduardo Alonso Montoya, MD",
    "Nayeli Esmeralda Avalos Celis, MD",
    "Sandra Rajme Lopez, MSc, MD",
    "Karla M. Tamez Torres, MSc, MD",
    "Bernardo Martínez Guerra, MSc, MD",
    "Carla M. Román Montes, MSc, MD",
    "Alfredo Ponce De León, MSc, MD",
    "María Fernanda González Lara, MSc, MD"
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Terms and Conditions</h1>
        <p className="text-gray-300">Important information about the CandID Rule</p>
      </div>

      <Card className="bg-amber-900/20 border-amber-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Important Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-300">
          <div className="p-4 rounded-lg bg-amber-900/30 border-l-4 border-amber-500">
            <p className="font-semibold text-amber-200 mb-2">
              Professional Use Only
            </p>
            <p className="text-sm">
              The CandID Rule is intended to be used only by healthcare professionals. 
              This tool does not provide medical recommendations.
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-red-900/30 border-l-4 border-red-500">
            <p className="font-semibold text-red-200 mb-2">
              Under Validation
            </p>
            <p className="text-sm">
              The calculator is still under prospective validation and was developed at the 
              Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán (INCMNSZ).
            </p>
          </div>

          <div className="p-4 rounded-lg bg-orange-900/30 border-l-4 border-orange-500">
            <p className="font-semibold text-orange-200 mb-2">
              Use with Caution
            </p>
            <p className="text-sm">
              The accuracy of this calculator is not guaranteed. It should be used with caution.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Users className="w-5 h-5" />
            Development Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Authors</span>
            </div>
            
            <div className="grid gap-3">
              {authors.map((author, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
                >
                  <span className="text-gray-300">{author}</span>
                  <Badge variant="outline" className="text-xs">
                    {author.includes('MSc') ? 'MSc, MD' : 'MD'}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-900/20 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            Institution
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán
            </h3>
            <p className="text-blue-300">(INCMNSZ)</p>
            <p className="text-sm mt-4 text-gray-400">
              This calculator was developed and is being validated at this prestigious 
              medical institution in Mexico.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-gray-500 text-sm mt-8 p-4 border-t border-gray-700">
        <p>© 2024 CandID Rule Calculator. For healthcare professional use only.</p>
      </div>
    </div>
  );
};

export default TermsConditions;