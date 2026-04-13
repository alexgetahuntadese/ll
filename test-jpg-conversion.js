// Test script to verify JPG conversion functionality
// This tests the receipt upload with JPG conversion

const testJpgConversion = async () => {
  try {
    // Test with a PNG image (1x1 pixel PNG)
    const pngBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
    
    // Test with a JPG image (already JPG)
    const jpgBase64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/wA==';
    
    console.log('Testing JPG conversion functionality...');
    
    const testPayload = {
      userId: "test-user-123",
      userName: "Test User",
      userPhone: "+251912345678",
      amount: 100,
      bankName: "CBE",
      accountNumber: "123456789",
      transactionRef: "TXN123456",
      paymentMethod: "cbe",
      submitterNotes: "Test payment with PNG receipt",
      receiptBase64: pngBase64, // This should be converted to JPG
      receiptFileName: "receipt.png", // PNG extension should be changed to .jpg
      receiptContentType: "image/png"
    };

    console.log('Testing PNG to JPG conversion...');
    console.log('Original filename: receipt.png');
    console.log('Original content type: image/png');
    console.log('Original format: PNG');

    const response = await fetch('http://localhost:3000/api/payments/backend4app/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('Success! Payment submission created:');
      console.log('- Submission ID:', result.id);
      console.log('- Receipt URL:', result.receiptUrl);
      console.log('- Status:', result.status);
      
      // Verify the receipt URL ends with .jpg
      if (result.receiptUrl && result.receiptUrl.includes('.jpg')) {
        console.log('Receipt successfully saved as JPG file!');
      } else {
        console.log('Receipt URL:', result.receiptUrl);
        console.log('Warning: Receipt may not be saved as JPG');
      }
    } else {
      console.error('Error:', result.error);
    }

    // Test with already JPG image
    console.log('\nTesting with already JPG image...');
    const jpgTestPayload = {
      ...testPayload,
      receiptBase64: jpgBase64,
      receiptFileName: "receipt.jpg",
      receiptContentType: "image/jpeg",
      submitterNotes: "Test payment with JPG receipt"
    };

    const jpgResponse = await fetch('http://localhost:3000/api/payments/backend4app/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jpgTestPayload),
    });

    const jpgResult = await jpgResponse.json();
    
    if (jpgResponse.ok) {
      console.log('JPG test successful!');
      console.log('- Receipt URL:', jpgResult.receiptUrl);
      if (jpgResult.receiptUrl && jpgResult.receiptUrl.includes('.jpg')) {
        console.log('JPG receipt saved correctly!');
      }
    } else {
      console.error('JPG test error:', jpgResult.error);
    }
  } catch (error) {
    console.error('Test failed:', error.message);
  }
};

// Run the test
testJpgConversion();
