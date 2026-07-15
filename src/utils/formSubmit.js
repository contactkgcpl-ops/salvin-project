export const handleFormSubmit = (e, formData, formName = "General Inquiry") => {
  e.preventDefault();
  
  // Format the message
  let messageBody = `*New Lead from ${formName}*\n\n`;
  for (const [key, value] of Object.entries(formData)) {
    if(value) messageBody += `*${key}:* ${value}\n`;
  }

  // 1. WhatsApp Delivery
  const whatsappNumber = "919898727796"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageBody)}`;
  
  // 2. Email Delivery
  const emailAddress = "info.salvinindustries@gmail.com";
  const emailSubject = `New Website Lead: ${formName}`;
  // Remove markdown asterisks for email body
  const emailBody = messageBody.replace(/\*/g, '');
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
  
  // Trigger email client in the current window after a short delay
  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 500);
};
