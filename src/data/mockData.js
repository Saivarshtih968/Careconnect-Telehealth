export const mockPatients = [
  {
    id: 'P-1001',
    name: 'Sarah Johnson',
    age: 65,
    condition: 'Hypertension',
    lastReading: '145/95 mmHg',
    riskLevel: 'High',
    lastVisit: '2023-10-15',
  },
  {
    id: 'P-1002',
    name: 'Michael Chen',
    age: 54,
    condition: 'Diabetes Type 2',
    lastReading: '110 mg/dL',
    riskLevel: 'Low',
    lastVisit: '2023-10-20',
  },
  {
    id: 'P-1003',
    name: 'Emma Williams',
    age: 72,
    condition: 'COPD',
    lastReading: '92% SpO2',
    riskLevel: 'Medium',
    lastVisit: '2023-10-22',
  },
  {
    id: 'P-1004',
    name: 'James Rodriguez',
    age: 48,
    condition: 'General Monitoring',
    lastReading: '120/80 mmHg',
    riskLevel: 'Low',
    lastVisit: '2023-10-25',
  },
];

export const mockVitals = [
  { time: '08:00', bpSystolic: 125, bpDiastolic: 82, hr: 72, spo2: 98 },
  { time: '12:00', bpSystolic: 130, bpDiastolic: 85, hr: 75, spo2: 97 },
  { time: '16:00', bpSystolic: 128, bpDiastolic: 84, hr: 74, spo2: 98 },
  { time: '20:00', bpSystolic: 122, bpDiastolic: 80, hr: 70, spo2: 99 },
];

export const mockAlerts = [
  { id: 1, type: 'Vital Alert', patient: 'Sarah Johnson', message: 'Blood pressure spike detected (155/100)', time: '10 mins ago', severity: 'High' },
  { id: 2, type: 'Missed Reading', patient: 'Emma Williams', message: 'Did not sync SpO2 reading today', time: '2 hours ago', severity: 'Medium' },
];
