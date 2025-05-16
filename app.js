
        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const loginPage = document.getElementById('loginPage');
            const dashboardPage = document.getElementById('dashboardPage');
            const loginForm = document.getElementById('loginForm');
            const userDisplayName = document.getElementById('userDisplayName');
            const logoutBtn = document.getElementById('logoutBtn');
        
        // Content sections
        const homeContent = document.getElementById('homeContent');
        const cropHealthContent = document.getElementById('cropHealthContent');
        const fertilizersContent = document.getElementById('fertilizersContent');
        const sellCropContent = document.getElementById('sellCropContent');
        const chatbotContent = document.getElementById('chatbotContent');
        const orderSaplingsContent = document.getElementById('orderSaplingsContent');
        const coldStorageContent = document.getElementById('coldStorageContent');
        const droneServiceContent = document.getElementById('droneServiceContent');
        const marketPriceContent = document.getElementById('marketPriceContent');
        const workersContent = document.getElementById('workersContent');
        
        // Navigation buttons
        const homeBtn = document.getElementById('homeBtn');
        const cropHealthBtn = document.getElementById('cropHealthBtn');
        const fertilizersBtn = document.getElementById('fertilizersBtn');
        const sellCropBtn = document.getElementById('sellCropBtn');
        const chatbotBtn = document.getElementById('chatbotBtn');
        const orderSaplingsBtn = document.getElementById('orderSaplingsBtn');
        const coldStorageBtn = document.getElementById('coldStorageBtn');
        const droneServiceBtn = document.getElementById('droneServiceBtn');
        const marketPriceBtn = document.getElementById('marketPriceBtn');
        const workersBtn = document.getElementById('workersBtn');
        
            // Function to hide all content sections
            function hideAllContent() {
                document.getElementById('homeContent').style.display = 'none';
                document.getElementById('cropHealthContent').style.display = 'none';
                document.getElementById('fertilizersContent').style.display = 'none';
                document.getElementById('sellCropContent').style.display = 'none';
                document.getElementById('chatbotContent').style.display = 'none';
                document.getElementById('orderSaplingsContent').style.display = 'none';
                document.getElementById('coldStorageContent').style.display = 'none';
                document.getElementById('droneServiceContent').style.display = 'none';
                document.getElementById('marketPriceContent').style.display = 'none';
                document.getElementById('workersContent').style.display = 'none';
            }
            
            // Function to simulate sensor data updates
            function updateSensorData() {
            // In a real application, this would fetch data from an API connected to actual sensors
            const soilMoisture = document.querySelector('.sensor-card:nth-child(1) .sensor-value');
            const temperature = document.querySelector('.sensor-card:nth-child(2) .sensor-value');
            const humidity = document.querySelector('.sensor-card:nth-child(3) .sensor-value');
            const pH = document.querySelector('.sensor-card:nth-child(4) .sensor-value');
            
            // Simulate random fluctuations in sensor values
            let moistureValue = Math.floor(38 + Math.random() * 8);
            let tempValue = (26 + Math.random() * 4).toFixed(1);
            let humidityValue = Math.floor(60 + Math.random() * 10);
            let pHValue = (6.3 + Math.random() * 0.6).toFixed(1);
            
            soilMoisture.textContent = `${moistureValue}%`;
            temperature.textContent = `${tempValue}°C`;
            humidity.textContent = `${humidityValue}%`;
            pH.textContent = pHValue;
            
            // Update status indicators based on values
            const moistureStatus = document.querySelector('.sensor-card:nth-child(1) .sensor-status');
            const tempStatus = document.querySelector('.sensor-card:nth-child(2) .sensor-status');
            const humidityStatus = document.querySelector('.sensor-card:nth-child(3) .sensor-status');
            const pHStatus = document.querySelector('.sensor-card:nth-child(4) .sensor-status');
            
            // Soil moisture status
            if (moistureValue < 30) {
                moistureStatus.textContent = 'Too Dry';
                moistureStatus.className = 'sensor-status status-alert';
            } else if (moistureValue > 50) {
                moistureStatus.textContent = 'Too Wet';
                moistureStatus.className = 'sensor-status status-warning';
            } else {
                moistureStatus.textContent = 'Normal';
                moistureStatus.className = 'sensor-status status-normal';
            }
            
            // Temperature status
            if (parseFloat(tempValue) > 30) {
                tempStatus.textContent = 'High';
                tempStatus.className = 'sensor-status status-warning';
            } else if (parseFloat(tempValue) < 22) {
                tempStatus.textContent = 'Low';
                tempStatus.className = 'sensor-status status-warning';
            } else {
                tempStatus.textContent = 'Normal';
                tempStatus.className = 'sensor-status status-normal';
            }
            
            // Humidity status
            if (humidityValue > 70) {
                humidityStatus.textContent = 'Too High';
                humidityStatus.className = 'sensor-status status-alert';
            } else if (humidityValue > 65) {
                humidityStatus.textContent = 'Slightly High';
                humidityStatus.className = 'sensor-status status-warning';
            } else if (humidityValue < 40) {
                humidityStatus.textContent = 'Too Low';
                humidityStatus.className = 'sensor-status status-alert';
            } else {
                humidityStatus.textContent = 'Normal';
                humidityStatus.className = 'sensor-status status-normal';
            }
            
            // pH status
            if (parseFloat(pHValue) < 6.0) {
                pHStatus.textContent = 'Too Acidic';
                pHStatus.className = 'sensor-status status-warning';
            } else if (parseFloat(pHValue) > 7.0) {
                pHStatus.textContent = 'Too Alkaline';
                pHStatus.className = 'sensor-status status-warning';
            } else {
                pHStatus.textContent = 'Normal';
                pHStatus.className = 'sensor-status status-normal';
            }
        }
        
            // Login form submission
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const farmerId = document.getElementById('farmerId').value;
                const password = document.getElementById('password').value;
                
                // In a real app, you would validate credentials against a database
                // For this demo, we'll accept any non-empty values
                if (farmerId && password) {
                    loginPage.style.display = 'none';
                    dashboardPage.style.display = 'block';
                    userDisplayName.textContent = `Farmer ${farmerId}`;
                    
                    // Show home content initially
                    hideAllContent();
                    homeContent.style.display = 'block';
                    
                    // Start sensor updates simulation
                    updateSensorData();
                    setInterval(updateSensorData, 10000); // Update every 10 seconds
                }
            });
        
            // Logout function
            logoutBtn.addEventListener('click', function() {
                dashboardPage.style.display = 'none';
                loginPage.style.display = 'flex';
                document.getElementById('farmerId').value = '';
                document.getElementById('password').value = '';
            });
            
            // Navigation button event listeners
            document.getElementById('homeBtn').addEventListener('click', function() {
                hideAllContent();
                homeContent.style.display = 'block';
            });
            
            document.getElementById('cropHealthBtn').addEventListener('click', function() {
                hideAllContent();
                cropHealthContent.style.display = 'block';
            });
            
            document.getElementById('fertilizersBtn').addEventListener('click', function() {
                hideAllContent();
                fertilizersContent.style.display = 'block';
            });
            
            document.getElementById('sellCropBtn').addEventListener('click', function() {
                hideAllContent();
                sellCropContent.style.display = 'block';
            });
            
            document.getElementById('chatbotBtn').addEventListener('click', function() {
                hideAllContent();
                chatbotContent.style.display = 'block';
            });
            
            document.getElementById('orderSaplingsBtn').addEventListener('click', function() {
                hideAllContent();
                orderSaplingsContent.style.display = 'block';
            });
            
            document.getElementById('coldStorageBtn').addEventListener('click', function() {
                hideAllContent();
                coldStorageContent.style.display = 'block';
            });
            
            document.getElementById('droneServiceBtn').addEventListener('click', function() {
                hideAllContent();
                droneServiceContent.style.display = 'block';
            });
            
            document.getElementById('marketPriceBtn').addEventListener('click', function() {
                hideAllContent();
                marketPriceContent.style.display = 'block';
            });
            
            document.getElementById('workersBtn').addEventListener('click', function() {
                hideAllContent();
                workersContent.style.display = 'block';
            });
        });
    