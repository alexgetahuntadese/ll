// Test script to verify receipt upload functionality
// This simulates a payment submission with a receipt file

const testReceiptUpload = async () => {
  try {
    // Create a sample base64 receipt image (1x1 pixel PNG)
    const sampleBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
    
    const testPayload = {
      userId: "test-user-123",
      userName: "Test User",
      userPhone: "+251912345678",
      amount: 100,
      bankName: "CBE",
      accountNumber: "123456789",
      transactionRef: "TXN123456",
      paymentMethod: "cbe",
      submitterNotes: "Test payment submission",
      receiptBase64: sampleBase64,
      receiptFileName: "test-receipt.png",
      receiptContentType: "image/png"
    };

    console.log('Testing payment submission with receipt upload...');
    console.log('Payload:', JSON.stringify(testPayload, null, 2));

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
      
      // Verify receipt URL is a proper file link, not base64
      if (result.receiptUrl && result.receiptUrl.startsWith('http')) {
        console.log('Receipt uploaded successfully as file link!');
      } else {
        console.log('Receipt URL is not a proper file link:', result.receiptUrl);
      }
    } else {
      console.error('Error:', result.error);
    }
  } catch (error) {
    console.error('Test failed:', error.message);
  }
};

// Run the test
testReceiptUpload();
