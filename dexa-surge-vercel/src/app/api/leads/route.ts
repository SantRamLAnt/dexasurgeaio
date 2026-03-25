import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'leads.json');

// Initialize the file if it doesn't exist
function initDB() {
  if (!fs.existsSync(dataFilePath)) {
    fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
    fs.writeFileSync(dataFilePath, JSON.stringify([]), 'utf-8');
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, businessType } = body;

    // Basic validation
    if (!name || !phone || !email || !businessType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newLead = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      businessType,
      createdAt: new Date().toISOString(),
    };

    initDB();
    const fileData = fs.readFileSync(dataFilePath, 'utf-8');
    const leads = JSON.parse(fileData);
    
    leads.push(newLead);
    
    fs.writeFileSync(dataFilePath, JSON.stringify(leads, null, 2), 'utf-8');

    return NextResponse.json(
      { message: 'Lead captured successfully', leadId: newLead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error capturing lead:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
