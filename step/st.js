function verifyDomain() {
    const domain = document.getElementById("domainInput").value.trim().toLowerCase();
    const result = document.getElementById("result");
  
    
    const fakeDomains = ["fakesite.com", "phishy.com", "bank-login.net"];
  
    if (!domain) {
      result.textContent = "Please enter a domain name.";
      result.style.color = "orange";
    } else if (fakeDomains.includes(domain)) {
      result.textContent = "⚠️ Warning: This domain may be spoofed!";
      result.style.color = "red";
    } else {
      result.textContent = "✅ This domain appears to be safe.";
      result.style.color = "green";
    }
  }
  