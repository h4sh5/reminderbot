
const postData = async () => {
 
  try {
    const response = await fetch(process.env.WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"content":"@everyone Remember to make a commit today! And send the link here if needed."})
    });
 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
 
    const data = await response.json();
    //console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};
 
postData();
